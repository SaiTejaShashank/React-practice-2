import React, { useRef, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Switch,
  Button,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import BottomSheet from '@gorhom/bottom-sheet/';

export default function Screen4() {
  const [name, setName] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [category, selectCategory] = useState<string>('Select Category');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const ref = useRef<null | BottomSheet>(null);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'dismissed') {
      setShowPicker(false);
      return;
    }

    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowPicker(false);
  };

  const backdropComponent = () => {
    return (
      <Pressable
        style={styles.backdropStyle}
        onPress={() => {
          ref.current?.close();
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Hello"
        style={{
          borderColor: 'brown',
          borderWidth: 1,
          width: '70%',
        }}
        value={name}
        onChangeText={text => setName(text)}
        secureTextEntry
        clearButtonMode="always"
      />
      <Text>{name}</Text>

      <Switch value={check} onValueChange={val => setCheck(val)} />

      <Button title="Pick a Date" onPress={() => setShowPicker(true)} />

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}
      <Text>{date.toDateString()}</Text>

      <Text
        onPress={() => {
          setModalVisible(true);
        }}
        style={{ margin: 20, fontSize: 18, fontWeight: '800', color: 'red' }}
      >
        {category}
      </Text>

      <Modal visible={modalVisible} animationType="slide">
        <View
          style={{
            backgroundColor: 'pink',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: 'yellow',
              width: '70%',
              height: '20%',
              justifyContent: 'center',
            }}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ textAlign: 'center' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* <BottomSheet
        ref={ref}
        onClose={() => {}}
        index={2}
        enablePanDownToClose
        backdropComponent={backdropComponent}
        snapPoints={['25%', '28%', '50%', '75%']}
      >
        <Text>hello</Text>
      </BottomSheet> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // fill the entire screen
    justifyContent: 'center', // center vertically
    alignItems: 'center', // center horizontally
    backgroundColor: '#f5f5f5', // light background
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  backdropStyle: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'gray',
    opacity: 0.7,
    elevation: 5,
  },
});
