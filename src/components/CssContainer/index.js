import React from 'react';
import { ContainerStyled } from './styles';

export const CssContainer = props => {
  return <ContainerStyled {...props}>{props.children}</ContainerStyled>;
};
