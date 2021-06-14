import React from 'react';
import { Center } from '../../components/Center';
import { Text, TouchableOpacity } from 'react-native';

export const NotFoundScreen = ({ navigation }) => (
  <Center>
    <Text>This screen doesn't exist.</Text>
    <TouchableOpacity onPress={() => navigation.replace('Root')}>
      <Text>Go to home screen!</Text>
    </TouchableOpacity>
  </Center>
);
