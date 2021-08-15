import React from 'react';
import { Text, Pressable } from 'react-native';
import { Center } from '../../../Center';
import { useNavigation } from '@react-navigation/native';
import { GoToButton } from '../../../GoToButton';

export const EmptySlider = () => {
  return (
    <Center>
      <Text>No Images</Text>
      <GoToButton screenName="Category" />
    </Center>
  );
};
