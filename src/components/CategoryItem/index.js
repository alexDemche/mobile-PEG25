import React from 'react';

import {
  StyledCategoryItemContainer,
  StyledCategoryItemImage,
  StyledCategoryItemTextWrapper,
} from './styles';
import { AppText } from '../AppText';

export const CategoryItem = ({ emotion, onPress }) => {
  const { icon, title } = emotion;
  return (
    <StyledCategoryItemContainer onPress={onPress}>
      {icon && (
        <StyledCategoryItemImage
          source={{ uri: icon.url }}
          resizeMode={'cover'}
        />
      )}
      <StyledCategoryItemTextWrapper>
        <AppText fontSize={14}> {title}</AppText>
      </StyledCategoryItemTextWrapper>
    </StyledCategoryItemContainer>
  );
};
