import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const StyledSafeAreaView = styled.SafeAreaView`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  align-items: center;
  padding-top: ${Platform.OS === 'android'
    ? StatusBar.currentHeight + 'px'
    : '10px'};
  padding-bottom: 10px;
`;
