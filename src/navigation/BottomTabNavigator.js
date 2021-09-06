import React, { useCallback, useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

import { translate } from '../i18n';

import { TabTwoNavigator } from './TabTwoNavigator';
import { MainStackNavigator } from './MainStackNavigator';

import { StyledAntDesignIcon } from './styles';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const themeContext = useContext(ThemeContext);

  const getTabBarVisibility = useCallback(route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';

    return routeName !== 'Emotion';
  }, []);

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: themeContext.backgroundColor,
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
        activeTintColor: themeContext.color,
        inactiveTintColorTintColor: 'red',
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
          tabBarLabel: translate('navigations.categories'),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarVisible: true,
          tabBarLabel: translate('navigations.settings'),
          tabBarIcon: ({ color }) => (
            <StyledAntDesignIcon name="setting" size={28} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
