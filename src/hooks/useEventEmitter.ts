import { DeviceEventEmitter } from 'react-native';

const useEventEmitter = () => {
  return (event: string, ...args: unknown[]) => {
    DeviceEventEmitter.emit(event, ...args);
  };
};

export default useEventEmitter;
