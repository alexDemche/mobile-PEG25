import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';

import { CategoryScreen } from '../screens/CategoryScreen';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import { EmotionScreen } from '../screens/EmotionScreen';

import { translate } from '../i18n';

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <MainStack.Navigator
      mode="modal"
      screenOptions={{
        animationEnabled: false,
        headerStyle: {
          backgroundColor: themeContext.backgroundColor,
        },
        headerBackTitleStyle: {
          fontSize: 12,
        },
        cardStyle: { backgroundColor: themeContext.backgroundColor },
        headerTintColor: themeContext.color,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <MainStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: translate('navigations.categories'),
        }}
      />

      <MainStack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: translate('navigations.category'),
        }}
      />

      <MainStack.Screen
        name="Emotion"
        component={EmotionScreen}
        options={{
          title: translate('navigations.emotion'),
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};
