import React from 'react';
import { BASE_URL } from '../../config';

import {
  StyledContainer,
  StyledCategoryTextWrapper,
  StyledCategoryImage,
} from './styles';

import { AppText } from '../AppText';

export const Category = ({ category, navigation, onPress }) => {
  const { title, id, icon } = category;

  return (
    <StyledContainer onPress={onPress}>
      {icon && (
        <StyledCategoryImage
          source={{ uri: `${BASE_URL}${icon.url}` }}
          resizeMode={'cover'}
        />
      )}
      <StyledCategoryTextWrapper>
        <AppText fontSize={14}>{title}</AppText>
      </StyledCategoryTextWrapper>
    </StyledContainer>
  );
};
