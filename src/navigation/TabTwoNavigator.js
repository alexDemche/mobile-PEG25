import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingsScreen } from '../screens/SettingsScreen';

const TabTwoStack = createStackNavigator();

export function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
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
