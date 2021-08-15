import React from 'react';
import { Text, Button } from 'react-native';

import { useColorThemeStore } from '../../store';

import { Center } from '../../components/Center';

export const SettingsScreen = () => {
  const isDarkMode = useColorThemeStore(state => state.isDarkMode);
  const toggleDarkMode = useColorThemeStore(state => state.toggleDarkMode);

  return (
    <Center>
      <Text>{isDarkMode ? 'dark' : 'light'}</Text>
      <Text>Hello TabTwoScreen</Text>
      <Button onPress={toggleDarkMode} title={'toggle theme'} />
    </Center>
  );
};
