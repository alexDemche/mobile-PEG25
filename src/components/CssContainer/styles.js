import styled from 'styled-components/native';

export const ContainerStyled = styled.ScrollView`
  padding: ${props =>
      props.paddingVertical ? `${props.paddingVertical}px` : '20px'}
    10px;
  flex: 1;
`;
