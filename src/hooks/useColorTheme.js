import { useColorScheme } from 'react-native';
import { themes } from '../themes';
import { useEffect } from 'react';
import { useColorThemeStore } from '../store';

export const useColorTheme = () => {
  const [isDarkMode, isUserToggledMode] = useColorThemeStore(state => [
    state.isDarkMode,
    state.isUserToggledMode,
  ]);

  const setIsDarkMode = useColorThemeStore(state => state.setIsDarkMode);

  const deviceTheme = useColorScheme();
  const isDeviseDarkTheme = deviceTheme === 'dark';
  const currentTheme = isDarkMode ? themes.dark : themes.light;

  useEffect(() => {
    if (isUserToggledMode) {
      return;
    }

    if (isDeviseDarkTheme) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [isUserToggledMode, isDeviseDarkTheme, setIsDarkMode]);

  return currentTheme;
};
