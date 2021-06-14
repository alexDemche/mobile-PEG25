import React from 'react';
import { Button } from 'react-native';

import { ViewStyled, Title } from './styles';

export const DetailsScreen = ({ navigation }) => {
  return (
    <ViewStyled>
      <Title>Hello from Details screen</Title>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </ViewStyled>
  );
};
