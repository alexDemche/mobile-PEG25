import { Appearance } from 'react-native';
import { themes } from '../themes';
import { useColorThemeStore } from '../store';

const colorScheme = Appearance.getColorScheme();
const isDeviseDarkTheme = colorScheme === 'dark';
const selector = state => [state.isDarkMode, state.isUserToggledMode];

export const useColorTheme = () => {
  const [isDarkMode, isUserToggledMode] = useColorThemeStore(selector);

  if (isUserToggledMode) {
    return isDarkMode ? themes.dark : themes.light;
  } else if (isDeviseDarkTheme) {
    return themes.dark;
  } else {
    return themes.light;
  }
};
