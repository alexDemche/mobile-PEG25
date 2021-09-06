import React from 'react';
import { Switch } from 'react-native';

import { AppText } from '../../components/AppText';
import { useColorThemeStore } from '../../store';
import { ViewStyled } from './styles';
import { translate } from '../../i18n';

export const ThemeSwitcher = () => {
  const isDarkMode = useColorThemeStore(state => state.isDarkMode);
  const toggleDarkMode = useColorThemeStore(state => state.toggleDarkMode);

  return (
    <ViewStyled>
      <AppText fontSize={16} marginBottom={5}>
        {translate('themes.theme')}:{' '}
        {isDarkMode
          ? translate('themes.name.dark')
          : translate('themes.name.light')}
      </AppText>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={!isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#767577"
        onValueChange={toggleDarkMode}
        value={!isDarkMode}
      />
    </ViewStyled>
  );
};
