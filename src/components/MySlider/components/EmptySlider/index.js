import React from 'react';
import { Center } from '../../../Center';
import { GoToButton } from '../../../GoToButton';
import { AppText } from '../../../AppText';
import { translate } from '../../../../i18n';

export const EmptySlider = () => {
  return (
    <Center>
      <AppText marginBottom={20} fontSize={20}>
        {translate('slider.no_images')}
      </AppText>
      <GoToButton fontSize={14} withBg screenName="Category" />
    </Center>
  );
};
