import { useColorScheme } from 'react-native';
import { themes } from '../themes';

export const useColorTheme = () => {
  const deviceTheme = useColorScheme();

  return themes[deviceTheme] || themes.dark;
};
