import styled from 'styled-components/native';

export const StyledContainer = styled.TouchableOpacity`
  background-color: ${props =>
    props.withBg ? props.theme.accentColor : 'transparent'};
  padding: 5px 10px;
  border-radius: 5px;
`;
