import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GET_PRODUCTS } from '../graphql/requests';
import { useQuery } from '@apollo/client';

export const HomeScreen = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error :</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!</Text>
      <Text>{data.products.map(product => product.name)}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
