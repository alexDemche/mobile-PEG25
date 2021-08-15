import { Dimensions } from 'react-native';

export const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get('window');

export function convertWidthInPercent(percent) {
  const value = (percent * viewportWidth) / 100;

  return Math.round(value);
}
