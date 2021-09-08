import styled from 'styled-components/native';

export const FooterSafeAreaViewStyled = styled.SafeAreaView`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  justify-content: space-between;
  flex-direction: row;
  margin: 15px;
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
