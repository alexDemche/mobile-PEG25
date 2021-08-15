import { themes } from '../themes';
import { useColorThemeStore } from '../store';

export const useCurrentColorTheme = () => {
  console.log('rerender th ----');
  const isDarkMode = useColorThemeStore(state => state.isDarkMode);

  return isDarkMode ? themes.dark : themes.light;
};
