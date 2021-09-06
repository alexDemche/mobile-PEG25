import styled from 'styled-components/native';

export const ViewStyled = styled.View`
  padding: 10px;
  margin: 10px 0;
  align-items: center;
  background-color: ${props => props.theme.accentColorTransparent};
  border-radius: 6px;
  min-width: 50%;
  align-self: center;
`;

export const IconWrapperStyled = styled.View`
  width: 100px;
  height: 100px;
`;
