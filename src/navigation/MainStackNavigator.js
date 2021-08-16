import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CategoryScreen } from '../screens/CategoryScreen';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import { EmotionScreen } from '../screens/EmotionScreen';
import { useCurrentColorTheme } from '../hooks/useCurentColorTheme';

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
  const currentTheme = useCurrentColorTheme();

  return (
    <MainStack.Navigator
      // mode={'modal'}
      screenOptions={{
        animationEnabled: false,

        headerStyle: {
          backgroundColor: currentTheme.backgroundColor,
          // height: 90,
        },
        // headerBackTitle: 'back',
        // headerBackTitleVisible: false,
        headerBackTitleStyle: {
          fontSize: 12,
        },
        cardStyle: { backgroundColor: currentTheme.backgroundColor },
        headerTintColor: currentTheme.color,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        style: {},
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
