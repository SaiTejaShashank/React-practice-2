import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const ListingScreen = ({ navigation }: Props) => {
  const screens: (keyof RootStackParamList)[] = navigation
    .getState()
    .routeNames.filter(item => item != 'ListingScreen');

  const handleNavigation = (screen: keyof RootStackParamList) => {
    if (screen === 'Screen2') {
      navigation.navigate('Screen2', { name: 'Sai Teja' });
    } else {
      navigation.navigate(screen);
    }
  };

  return (
    <FlatList
      data={screens}
      keyExtractor={item => item}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            handleNavigation(item);
          }}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    marginBottom: 8,
    borderRadius: 6,
  },
  text: {
    fontSize: 18,
  },
});
