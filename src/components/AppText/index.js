import React from 'react';
import { StyledText } from './styles';

export const AppText = props => {
  const { children } = props;

  return <StyledText {...props}>{children}</StyledText>;
};
