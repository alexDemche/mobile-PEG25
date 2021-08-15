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

export const Controls = ({
  navigation,
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
          <IconButton name="back" lg onPress={navigation.goBack} round shadow />

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
            text="Resume"
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
            text="Replay"
            round
            shadow
          />
        </ControlsButtonWrapper>

        <IconButton
          name="back"
          size={36}
          xl
          onPress={navigation.goBack}
          text="Back"
          round
          shadow
        />
      </ControlsMainContainer>
    </ControlsContainer>
  );
};
