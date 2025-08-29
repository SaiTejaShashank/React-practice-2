import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useBackHandler = (shouldListen = false, handler: () => void) => {
  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (shouldListen) {
          handler();
          return true;
        }
        return false;
      },
    );
    return () => {
      subscription.remove();
    };
  }, [shouldListen, handler]);
};

export default useBackHandler;
