import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeContext } from 'styled-components';

import { Center } from '../Center';

export const Loading = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Center>
      <ActivityIndicator size="large" color={themeContext.accentColor} />
    </Center>
  );
};
