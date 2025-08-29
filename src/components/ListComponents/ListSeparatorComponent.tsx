import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ListSeparatorComponent() {
  return <View style={styles.footer}></View>;
}

const styles = StyleSheet.create({
  footer: {
    height: 3,
    backgroundColor: 'brown',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
