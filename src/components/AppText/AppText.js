import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BASE_FONT = 'sans-serif';

export const AppText = props => {
  return (
    <Text {...props} style={[styles.myAppText, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  myAppText: {
    fontFamily: BASE_FONT,
    fontSize: 16,
  },
});
