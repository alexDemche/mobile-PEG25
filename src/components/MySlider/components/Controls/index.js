import React from 'react';

import {
  ControlsContainer,
  ControlsButtonWrapper,
  ControlsHeader,
  ControlsHeaderButtons,
  ControlsMainContainer,
} from './styles';

import { AppText } from '../../../AppText';
import { IconButton } from '../../../IconButton';
import { translate } from '../../../../i18n';

export const Controls = ({
  goBack,
  setIsControls,
  title,
  isShown,
  playFromBeginning,
  resumePlaying,
}) => {
  return (
    <ControlsContainer isShown={isShown}>
      <ControlsHeader>
        <ControlsHeaderButtons>
          <IconButton name="back" lg onPress={goBack} round shadow />

          <IconButton
            name="close"
            lg
            onPress={() => setIsControls(false)}
            round
            shadow
          />
        </ControlsHeaderButtons>

        <AppText fontSize="30">{title}</AppText>
      </ControlsHeader>

      <ControlsMainContainer>
        <ControlsButtonWrapper>
          <IconButton
            name="pause"
            size={36}
            xl
            onPress={resumePlaying}
            text={translate('buttons.resume')}
            round
            shadow
          />
        </ControlsButtonWrapper>

        <ControlsButtonWrapper>
          <IconButton
            name="reload1"
            size={36}
            xl
            onPress={playFromBeginning}
            text={translate('buttons.replay')}
            round
            shadow
          />
        </ControlsButtonWrapper>

        <IconButton
          name="back"
          size={36}
          xl
          onPress={goBack}
          text={translate('buttons.back')}
          round
          shadow
        />
      </ControlsMainContainer>
    </ControlsContainer>
  );
};
