import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useImperativeHandle, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import useBackHandler from '../../hooks/useBackHandler';

type Props = {
  children: React.ReactNode;
};

type BottomSheetRef = {
  open: () => void;
  close: () => void;
};

interface BottomSheetProps {
  children: React.ReactNode;
}

function GorhomBottomSheet(
  props: BottomSheetProps,
  ref: React.Ref<BottomSheetRef>,
) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const close = () => {
    bottomSheetRef.current && bottomSheetRef.current.close();
    setIsOpen(false);
  };
  useBackHandler(isOpen, close);

  useImperativeHandle(ref, () => ({
    open: () => {
      bottomSheetRef.current && bottomSheetRef.current.expand();
      setIsOpen(true);
    },
    close,
  }));

  return (
    <BottomSheet ref={bottomSheetRef} index={-1} enablePanDownToClose={true}>
      <BottomSheetView>{props.children}</BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});

export default React.forwardRef(GorhomBottomSheet);
