import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlatformInput from '../components/PlatformInput';

type Screen2NavigationProp = StackNavigationProp<RootStackParamList, 'Screen2'>;
type Screen2RouteProp = RouteProp<RootStackParamList, 'Screen2'>;

type Screen2Props = {
  navigation: Screen2NavigationProp;
  route: Screen2RouteProp;
};

export default function Screen2({ route }: Screen2Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}
      >
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <View
              key={i}
              style={{
                width: 80,
                height: i == 0 ? 150 : 80,
                margin: 5,
                backgroundColor: 'skyblue',
              }}
            />
          ))}
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{ backgroundColor: 'blue', height: 20, width: 20, top: -100 }}
        ></View>
        <View
          style={{
            backgroundColor: 'yellow',
            height: 20,
            width: 20,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        ></View>
      </View>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>
        {route.params.name}
      </Text>

      <View
        style={{
          padding: 10,
          backgroundColor: 'white',
          width: '50%',
          height: 500,
          borderWidth: 5,
          borderColor: 'pink',
          borderRadius: 20,
          elevation: 10,
          margin: 10,
          marginBottom: 20,
          marginHorizontal: 30,
          marginVertical: 40,
        }}
      ></View>

      <Text
        style={{
          fontFamily: 'Fuzzy Bubbles Regular',
          fontSize: 14,
          textAlign: 'center',
        }}
      >
        This is NotoSans-SemiBold
      </Text>
      <Text
        style={{
          fontFamily: 'Fuzzy Bubbles Regular',
          fontSize: 14,
          textAlign: 'center',
        }}
      >
        This is NotoSans-Regular
      </Text>
      <Text
        style={{
          fontFamily: 'Fuzzy Bubbles Regular',
          fontSize: 14,
          textAlign: 'center',
        }}
      >
        This is NotoSans-ThinItalic
      </Text>
      <Text
        style={{
          fontFamily: 'Fuzzy Bubbles Regular',
          fontSize: 14,
          textAlign: 'center',
        }}
      >
        This is NotoSans-Thin
      </Text>
      <Text
        style={{
          fontFamily: 'Fuzzy Bubbles Regular',
          fontSize: 14,
          textAlign: 'center',
          textTransform: 'capitalize',
        }}
      >
        this is notosans-semibolditalic
      </Text>
      <Text
        style={{
          textDecorationLine: 'underline line-through',
          textAlign: 'center',
        }}
      >
        Normal Text
      </Text>

      <FontAwesome name="rocket" size={30} color="#900" />
      <PlatformInput />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        backgroundColor: 'white',
      },
      android: {
        backgroundColor: 'grey',
      },
    }),
  },
});
