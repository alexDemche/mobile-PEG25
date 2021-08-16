import React from 'react';
import { Center } from '../../components/Center';
import { Text, TouchableOpacity } from 'react-native';
import { AppText } from '../../components/AppText';

export const NotFoundScreen = ({ navigation }) => (
  <Center>
    <Text>This screen doesn't exist.</Text>
    <TouchableOpacity onPress={() => navigation.replace('Root')}>
      <AppText>Go to home screen!</AppText>
    </TouchableOpacity>
  </Center>
);
