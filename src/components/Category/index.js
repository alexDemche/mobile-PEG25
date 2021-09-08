import React from 'react';

import {
  StyledContainer,
  StyledCategoryTextWrapper,
  StyledCategoryImage,
} from './styles';

import { AppText } from '../AppText';

export const Category = ({ category, onPress }) => {
  const { title, icon } = category;

  return (
    <StyledContainer onPress={onPress}>
      {icon && (
        <StyledCategoryImage source={{ uri: icon.url }} resizeMode={'cover'} />
      )}
      <StyledCategoryTextWrapper>
        <AppText fontSize={13}>{title}</AppText>
      </StyledCategoryTextWrapper>
    </StyledContainer>
  );
};
