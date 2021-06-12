import React from 'react';
import { View } from 'react-native';

export const Center = ({ children }) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: '1', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </View>
  );
};
