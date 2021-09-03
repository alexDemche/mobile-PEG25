import styled from 'styled-components/native';
import { hexToRGB } from '../../../../utils/helpers';

export const StyledSafeAreaView = styled.SafeAreaView`
  position: absolute;
  left: 15px;
  bottom: 0;
`;

export const RoundedContainer = styled.View`
  background-color: ${props => hexToRGB(props.theme.backgroundColor, 0.6)};
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
`;
