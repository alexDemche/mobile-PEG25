import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeContext } from 'styled-components';

import { SettingsScreen } from '../screens/SettingsScreen';
import { translate } from '../i18n';

const TabTwoStack = createStackNavigator();

export function TabTwoNavigator() {
  const themeContext = useContext(ThemeContext);

  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeContext.backgroundColor,
        },
        cardStyle: { backgroundColor: themeContext.backgroundColor },
        headerTintColor: themeContext.color,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={SettingsScreen}
        options={{
          headerTitle: translate('navigations.settings'),
        }}
      />
    </TabTwoStack.Navigator>
  );
}
