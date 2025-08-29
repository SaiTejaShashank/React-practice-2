import { useEffect, useRef } from 'react';
import { DeviceEventEmitter } from 'react-native';

const useEventListner = <T>(event: string, onEvent: (data: T) => void) => {
  const eventRef = useRef(event);

  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener(
      eventRef.current,
      onEvent,
    );

    return () => {
      subscription.remove();
    };
  }, [onEvent]);
};

export default useEventListner;
