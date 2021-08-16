import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingsScreen } from '../screens/SettingsScreen';
import { useCurrentColorTheme } from '../hooks/useCurentColorTheme';

const TabTwoStack = createStackNavigator();

export function TabTwoNavigator() {
  const currentTheme = useCurrentColorTheme();

  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: currentTheme.backgroundColor,
        },
        cardStyle: { backgroundColor: currentTheme.backgroundColor },
        headerTintColor: currentTheme.color,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={SettingsScreen}
        options={{
          headerTitle: 'Tab Two Title',
        }}
      />
    </TabTwoStack.Navigator>
  );
}
