import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TabTwoScreen } from '../screens/TabTwoScreen';

const TabTwoStack = createStackNavigator();

export function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
