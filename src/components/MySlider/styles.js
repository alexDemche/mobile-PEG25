import styled from 'styled-components/native';

export const SettingButtonStyledSafeAreaView = styled.SafeAreaView`
  position: absolute;
  bottom: 0;
  right: 15px;
  z-index: 1;
`;

export const Slide = styled.View`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export const SlideImage = styled.Image`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
