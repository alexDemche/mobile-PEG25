import React from 'react';
import { View, StyleSheet } from 'react-native';

const BASE_FONT = 'Roboto';

export const AppText = props => {
  return (
    <View {...props} style={[styles.myAppText, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  myAppText: {
    fontFamily: BASE_FONT,
    fontSize: 16,
  },
});
