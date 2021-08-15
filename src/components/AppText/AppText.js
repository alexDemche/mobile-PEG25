import React from 'react';
import { StyledText, StyledTextWrapper } from './styles';

export const AppText = props => {
  const { fontSize, fontWeight, children } = props;

  return (
    <StyledTextWrapper {...props}>
      <StyledText fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </StyledText>
    </StyledTextWrapper>
  );
};
