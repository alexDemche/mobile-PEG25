import styled from 'styled-components/native';
import { hexToRGB } from '../../utils/helpers';
import { CSS } from '../../constants';

export const ViewStyled = styled.View`
  padding: 10px 0;
  margin: 10px 0;
  align-items: center;
  background-color: ${props =>
    hexToRGB(props.theme.accentColor, CSS.OPACITY.SM)};
  border-radius: 6px;
  min-width: 50%;
  align-self: center;
`;

export const IconWrapperStyled = styled.View`
  width: 100px;
  height: 100px;
`;
