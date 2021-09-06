import styled from 'styled-components/native';

export const ViewStyled = styled.View`
  align-items: center;
  padding: 10px 0;
  margin: 10px 0;
  border: 1px solid ${props => props.theme.accentColorTransparent};
  border-radius: 6px;
  min-width: 50%;
  align-self: center;
`;
