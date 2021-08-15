import React from 'react';

import { ErrorTextWrapper } from './styles';
import { AppText } from '../AppText';
import { Center } from '../Center';

export const Error = ({ error }) => {
  return (
    <Center>
      <ErrorTextWrapper>
        <AppText color="red" fontSize={16} fontWeight="bold">
          {error}
        </AppText>
      </ErrorTextWrapper>
    </Center>
  );
};
