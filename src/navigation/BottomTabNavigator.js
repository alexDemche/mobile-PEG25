import * as React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneNavigator } from './TabOneNavigator';
import { TabTwoNavigator } from './TabTwoNavigator';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="ios-code" />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="ios-code" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
