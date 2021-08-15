import React, { useCallback } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// import { TabOneNavigator } from './TabOneNavigator';
import { TabTwoNavigator } from './TabTwoNavigator';
import { MainStackNavigator } from './MainStackNavigator';

import { StyledAntDesignIcon } from './styles';
import { useCurrentColorTheme } from '../hooks/useCurentColorTheme';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const currentTheme = useCurrentColorTheme();

  const getTabBarVisibility = useCallback(route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';

    return routeName !== 'Emotion';
  }, []);

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: currentTheme.bottomTabBgColor,
          borderTopColor: currentTheme.color,
          height: 86,
          paddingBottom: 24,
        },
        tabStyle: {
          paddingBottom: 4,
          paddingTop: 4,
        },
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        activeTintColor: currentTheme.accentColor,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={MainStackNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color }) => (
            <StyledAntDesignIcon
              name="smileo"
              size={24}
              style={{ color: color }}
            />
          ),
          tabBarLabel: 'Emotions',
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarVisible: true,
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <StyledAntDesignIcon name="setting" size={28} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
