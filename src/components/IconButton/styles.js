import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const StyledIconWrapper = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.bgColor ? props.bgColor : props.theme.backgroundColor};
  border-radius: ${props => (props.round ? '50px' : 0)};
  padding: ${props =>
    props.xl ? '20px' : props.lg ? '10px' : props.sm ? '5px' : 0};
  box-shadow: 0 0 2px
    ${props => (props.shadow ? props.theme.color : 'transparent')};
`;

export const AntDesignIcon = styled(AntDesign)`
  color: ${props => (props.color ? props.color : props.theme.color)};
`;

export const StyledText = styled.Text`
  color: ${props => props.theme.color};
  margin-top: 5px;
`;

export const StyledIconContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
