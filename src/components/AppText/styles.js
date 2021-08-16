import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: ${props => (props.color ? props.color : props.theme.color)};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '16px')};
  font-weight: ${props => (props.fontWeight ? `${props.fontWeight}` : '400')};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : '0')};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}px` : '0'};
`;