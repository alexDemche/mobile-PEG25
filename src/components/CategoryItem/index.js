import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { BASE_URL } from '../../config';

export const CategoryItem = ({ emotion, onPress }) => {
  const { icon, title } = emotion;
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 10,
        marginVertical: 15,
        alignItems: 'center',
        width: 100,
      }}
      onPress={onPress}>
      {icon && (
        <Image
          source={{ uri: `${BASE_URL}${icon.url}` }}
          style={{ width: 80, height: 80, borderRadius: 40 }}
          resizeMode={'cover'}
        />
      )}
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
