import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <Text>{`Go to ${screenName}`}</Text>
    </TouchableOpacity>
  );
}
