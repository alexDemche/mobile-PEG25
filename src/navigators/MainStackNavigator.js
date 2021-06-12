import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <MainStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Details',
        }}
      />
    </MainStack.Navigator>
  );
};
