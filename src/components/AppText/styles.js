import styled from 'styled-components/native';

export const StyledTextWrapper = styled.View`
  margin: 0;
`;

export const StyledText = styled.Text`
  color: ${props => props.theme.color};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '16px')};
  font-weight: ${props => (props.fontWeight ? `${props.fontWeight}` : '400')};
`;
