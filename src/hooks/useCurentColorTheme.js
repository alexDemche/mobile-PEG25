import { themes } from '../themes';
import { useColorThemeStore } from '../store';

export const useCurrentColorTheme = () => {
  const isDarkMode = useColorThemeStore(state => state.isDarkMode);

  return isDarkMode ? themes.dark : themes.light;
};
