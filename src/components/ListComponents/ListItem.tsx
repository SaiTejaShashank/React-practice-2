import React from 'react';
import {
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { apiResponseType } from '../../types';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Prop = {
  item: apiResponseType;
};

const { width } = Dimensions.get('window');

export default function ListItem({ item }: Prop) {
  return (
    <View style={styles.wrapper}>
      <Swipeable
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        overshootLeft={false}
        overshootRight={false}
      >
        <View style={styles.card} key={item.id}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      </Swipeable>
    </View>
  );
}

const renderLeftActions = (progress, dragX) => {
  console.log(progress, 'progress');
  console.log(dragX, 'dragX');
  return (
    <Pressable
      style={styles.leftActionContainer}
      onPress={() => {
        Alert.alert('Hello');
      }}
    >
      <Text style={{ fontSize: 15, color: 'white', fontWeight: '700' }}>
        Add
      </Text>
      <FontAwesome name="credit-card" size={30} color="cyan" />
    </Pressable>
  );
};

const renderRightActions = () => {
  return (
    <Pressable style={styles.rightActionContainer}>
      <Text style={{ fontSize: 15, color: 'white', fontWeight: '700' }}>
        Delete
      </Text>
      <FontAwesome name="credit-card" size={30} color="cyan" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    width: width - 32,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  body: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  leftActionContainer: {
    backgroundColor: '#388E3c',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginRight: 20,
  },
  rightActionContainer: {
    backgroundColor: 'red',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginLeft: 20,
  },
  wrapper: {
    paddingHorizontal: 16,
  },
});
