import React from 'react';
import { Center } from '../../../Center';
import { GoToButton } from '../../../GoToButton';
import { AppText } from '../../../AppText';

export const EmptySlider = () => {
  return (
    <Center>
      <AppText marginBottom={10} fontSize={14}>
        No Images
      </AppText>
      <GoToButton fontSize={14} withBg screenName="Category" />
    </Center>
  );
};
