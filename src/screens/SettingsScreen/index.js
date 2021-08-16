import React from 'react';
import { Button } from 'react-native';

import { useColorThemeStore } from '../../store';

import { Center } from '../../components/Center';
import { AppText } from '../../components/AppText';

export const SettingsScreen = () => {
  const isDarkMode = useColorThemeStore(state => state.isDarkMode);
  const toggleDarkMode = useColorThemeStore(state => state.toggleDarkMode);

  return (
    <Center>
      <AppText>Hello from TabTwoScreen</AppText>
      <AppText>{isDarkMode ? 'dark' : 'light'}</AppText>
      <Button onPress={toggleDarkMode} title={'toggle theme'} />
    </Center>
  );
};
