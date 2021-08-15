import React from 'react';
import {
  AntDesignIcon,
  StyledIconContainer,
  StyledIconWrapper,
  StyledText,
} from './styles';

export const IconButton = props => {
  const { name, size = 24, text, color, onPress } = props;

  return (
    <StyledIconContainer>
      <StyledIconWrapper {...props}>
        <AntDesignIcon
          onPress={onPress}
          name={name}
          size={size}
          color={color}
        />
      </StyledIconWrapper>
      {text && <StyledText>{text}</StyledText>}
    </StyledIconContainer>
  );
};
