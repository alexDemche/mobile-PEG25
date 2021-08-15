import React from 'react';
import { Center } from '../../components/Center';
import { CategoriesScreen } from '../../screens/CategoriesScreen';
import { MainStackNavigator } from '../../navigation/MainStackNavigator';
import { View, Button, Text } from 'react-native';
import { useQuery } from '@apollo/client';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { GET_EMOTION } from '../../graphql/requests';
import { IconButton } from '../../components/IconButton';
import { useColorThemeStore } from '../../store';

export const TabOneScreen = ({ navigation }) => {
  const toggleDarkMode = useColorThemeStore(state => state.toggleDarkMode);

  const { data, loading, error } = useQuery(GET_EMOTION, {
    variables: {
      emotionId: 4,
    },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return (
      <Center>
        <Text>{error.message}</Text>
      </Center>
    );
  }

  return (
    <Center>
      <Text>Tab One Screen</Text>
      <IconButton text="hello" name="swap" onPress={toggleDarkMode} />
    </Center>
  );
};
