import React from 'react';
import { View, Text, Button } from 'react-native';

export const Emotion = ({ emotion, onPress }) => {
  return (
    <View>
      <Text>Hello</Text>
      <Text>{emotion.title}</Text>
      <Button title={emotion.title} onPress={onPress} />
    </View>
  );
};
