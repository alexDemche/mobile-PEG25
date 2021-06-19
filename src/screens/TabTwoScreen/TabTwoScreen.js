import React from 'react';
import { Center } from '../../components/Center';
import { Text, Button } from 'react-native';
import { useColorThemeStore } from '../../store';
import { ViewStyled, Title } from './styles';

export const TabTwoScreen = () => {
  const isDarkMode = useColorThemeStore(state => state.isDarkMode);
  const toggleDarkMode = useColorThemeStore(state => state.toggleDarkMode);

  return (
    <ViewStyled>
      <Title>{isDarkMode ? 'dark' : 'light'}</Title>
      <Title>Hello TabTwoScreen</Title>
      <Button onPress={toggleDarkMode} title={'toggle theme'} />
    </ViewStyled>
  );
};
