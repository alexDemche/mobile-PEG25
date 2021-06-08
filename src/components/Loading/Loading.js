import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

export const Loading = () => {
  return <ActivityIndicator style={styles.activityIndicator} />;
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
