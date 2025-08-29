import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';

type ImagePickerHook = {
  images: string[];
  pickImage: () => Promise<void>;
  removeImage: (url: string) => void;
  hasPermission: boolean;
};
export default function useCamera(): ImagePickerHook {
  //request permissions
  //add images and remove images
  const [images, setImages] = useState<string[]>([]);
  const [hasPermission, setHasPermission] = useState(false);

  const requestCameraPermission = async () => {
    try {
      let permission;

      if (Platform.OS === 'ios') {
        permission = PERMISSIONS.IOS.PHOTO_LIBRARY;
      } else {
        permission = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
      }

      const result = await check(permission);

      if (result === RESULTS.GRANTED) {
        setHasPermission(true);
        return;
      }

      if (result === RESULTS.DENIED) {
        const newResult = await request(permission);
        if (newResult === RESULTS.GRANTED) {
          setHasPermission(true);
        } else {
          setHasPermission(false);
        }
      } else {
        setHasPermission(false);
        Alert.alert(
          'Permission Denied',
          'Please enable photo access in settings to use this feature.',
        );
      }
    } catch (error) {
      console.warn('Permission error:', error);
      setHasPermission(false);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const pickImage = useCallback(async () => {
    if (!hasPermission) {
      Alert.alert('No Permission', 'Cannot open gallery without permission.');
      return;
    }

    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });

      setImages(prev => [...prev, image.path]);
    } catch (err) {
      console.warn('Image picking cancelled or failed', err);
    }
  }, [hasPermission]);

  const removeImage = useCallback((url: string) => {
    setImages(prev => prev.filter(item => item !== url));
  }, []);

  return {
    images,
    pickImage,
    removeImage,
    hasPermission,
  };
}
