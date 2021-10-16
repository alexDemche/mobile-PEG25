import React from 'react';

import {
  StyledCategoryItemContainer,
  StyledCategoryItemImage,
  StyledCategoryItemTextWrapper,
} from './styles';
import { AppText } from '../AppText';

export const CategoryItem = ({ emotion, onPress, size }) => {
  const { icon, title } = emotion;
  return (
    <StyledCategoryItemContainer onPress={onPress} size={size}>
      {icon && (
        <StyledCategoryItemImage
          size={size}
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
