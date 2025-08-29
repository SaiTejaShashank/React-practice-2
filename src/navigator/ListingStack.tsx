import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'ListingScreen'}>
      <Stack.Screen
        name="Screen1"
        component={Screens.Screen1}
        options={({ route }) => ({
          title: 'Sai Teja Shashank',
          headerTintColor: 'blue',
          headerStyle: {
            backgroundColor: 'green',
          },
        })}
      />
      <Stack.Screen
        name="Screen2"
        component={Screens.Screen2}
        options={({ route }) => ({
          title: route.params.name,
          headerShown: false,
          presentation: 'modal',
          gestureEnabled: true,
          cardOverlayEnabled: true,
        })}
      />
      <Stack.Screen name="Screen3" component={Screens.Screen3} />
      <Stack.Screen name="Screen4" component={Screens.Screen4} />
      <Stack.Screen name="Screen5" component={Screens.Screen5} />
      <Stack.Screen name="ListingScreen" component={Screens.ListingScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
