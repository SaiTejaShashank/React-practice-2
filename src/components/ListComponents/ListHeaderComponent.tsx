import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ListHeaderComponent() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>📋 Your Items</Text>
      <Text style={styles.headerSubtitle}>A list of all available items</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
    backgroundColor: '#e6f0ff',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003366',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#336699',
  },
  footer: {
    marginTop: 24,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fef6e4',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#7a5c00',
  },
});
