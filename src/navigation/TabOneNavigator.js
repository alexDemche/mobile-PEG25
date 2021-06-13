import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TabOneScreen } from '../screens/TabOneScreen';

const TabOneStack = createStackNavigator();

export function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}
