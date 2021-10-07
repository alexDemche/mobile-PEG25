import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { translate } from '../../i18n';

import { AppText } from '../AppText';
import { StyledContainer } from './styles';

export function GoToButton({ screenName, withBg, fontSize }) {
  const navigation = useNavigation();

  return (
    <StyledContainer
      withBg={withBg}
      onPress={() => navigation.navigate(screenName)}>
      <AppText fontSize={fontSize}>
        {translate('buttons.back_to', {
          screenName: translate('titles.category'),
        })}
      </AppText>
    </StyledContainer>
  );
}
