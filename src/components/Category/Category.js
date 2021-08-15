import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { BASE_URL } from '../../config';

export const Category = ({ category, navigation, onPress }) => {
  const { title, id, icon } = category;

  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 10,
        marginVertical: 15,
        alignItems: 'center',
        width: 150,
      }}
      onPress={onPress}>
      {icon && (
        <Image
          source={{ uri: `${BASE_URL}${icon.url}` }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
          resizeMode={'cover'}
        />
      )}
      {/*<Text>{title}</Text>*/}
      {/*<Text>{id}</Text>*/}
      <Text
        style={{
          marginTop: 10,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
