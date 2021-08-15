import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Error = ({ error, style }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    paddingVertical: 8,
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});
