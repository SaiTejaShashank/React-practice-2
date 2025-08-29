import React, { useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { FormBottomSheet } from '../components';
import { useEventListner } from '../hooks';

type BottomSheetRef = {
  open: () => void;
  close: () => void;
};

export default function Screen6() {
  const ref = useRef<BottomSheetRef>(null);
  const [values, setValues] = useState(null);

  const open = () => {
    ref.current?.open();
  };

  const close = () => {
    ref.current?.close();
  };

  useEventListner('submit', values => {
    console.log(values, 'values');
    setValues(values);
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Open" onPress={open} />
      <Button title="Close" onPress={close} />

      <Text>{values?.email}</Text>

      <FormBottomSheet ref={ref} />
    </View>
  );
}
