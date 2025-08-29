import React, { useEffect, useRef, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { apiResponseType } from '../types';
import ListItem from '../components/ListComponents/ListItem';
import ListHeaderComponent from '../components/ListComponents/ListHeaderComponent';
import ListFooterComponent from '../components/ListComponents/ListFooterComponent';
import ListSeparatorComponent from '../components/ListComponents/ListSeparatorComponent';

export default function Screen3() {
  const [data, setData] = useState<apiResponseType[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const ref = useRef<FlatList<any>>(null);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    setRefreshing(true);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      res.json().then(data => {
        setData(data);
        setRefreshing(false);
      });
    });
  };
  return (
    // <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    //  {data.map(item => (
    //         <ListItem item={item} key={item.id} />
    //       ))}

    <FlatList
      ref={ref}
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        return <ListItem item={item} />;
      }}
      refreshing={refreshing}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ItemSeparatorComponent={ListSeparatorComponent}
      onRefresh={callApi}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emoji}>📭</Text>
          <Text style={styles.emptyTitle}>No items found</Text>
          <Text style={styles.emptySubtitle}>
            Try refreshing or come back later.
          </Text>
        </View>
      }
      onEndReached={() => {
        ref.current?.scrollToOffset({ offset: 0, animated: true });
      }}
    />

    //</ScrollView>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
});
