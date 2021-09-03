import styled from 'styled-components/native';
import { hexToRGB } from '../../utils/helpers';

export const ViewStyled = styled.View`
  align-items: center;
  padding: 10px 0;
  margin: 10px 0;
  border: 1px solid ${props => hexToRGB(props.theme.accentColor, 0.2)};
  border-radius: 6px;
  min-width: 50%;
  align-self: center;
`;
