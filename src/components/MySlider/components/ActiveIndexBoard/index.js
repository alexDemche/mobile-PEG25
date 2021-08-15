import React from 'react';

import { StyledSafeAreaView, RoundedContainer } from './styles';

import { AppText } from '../../../AppText';

export const ActiveIndexesBoard = ({ activeIndex, length }) => {
  return (
    <StyledSafeAreaView>
      <RoundedContainer>
        <AppText fontSize="14" fontWeight="500">
          {activeIndex + 1} / {length}
        </AppText>
      </RoundedContainer>
    </StyledSafeAreaView>
  );
};
