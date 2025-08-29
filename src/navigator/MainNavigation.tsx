import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ListingStack from './ListingStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={() => ({
          headerShown: false,
          lazy: true,
        })}
      >
        <Tabs.Screen name="main" component={ListingStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
