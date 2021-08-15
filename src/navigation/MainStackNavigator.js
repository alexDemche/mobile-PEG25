import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CategoryScreen } from '../screens/CategoryScreen';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import { EmotionScreen } from '../screens/EmotionScreen';

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <MainStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Categories',
        }}
      />

      <MainStack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: 'Category',
        }}
      />

      <MainStack.Screen
        name="Emotion"
        component={EmotionScreen}
        options={{
          title: 'Emotion',
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};
