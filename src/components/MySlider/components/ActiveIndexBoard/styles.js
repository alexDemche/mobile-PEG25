import styled from 'styled-components/native';

export const RoundedContainer = styled.View`
  background-color: ${props => props.theme.backgroundColorTransparent};
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
`;
