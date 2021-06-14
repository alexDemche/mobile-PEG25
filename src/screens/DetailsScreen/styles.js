import styled from 'styled-components/native';

export const ViewStyled = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.color};
  font-size: 24px;
  text-align: center;
  padding: 10px;
`;
