import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CategoriesScreen } from '../../screens/CategoriesScreen';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../graphql/requests';

export const HomeScreen = ({ navigation }) => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  console.log('data -->', data);

  if (loading || error) {
    return null;
  }

  const renderCategory = ({ item: category }) => {
    console.log('category -->', category);
    return (
      <Button
        title={category.title}
        onPress={() => navigation.navigate('Category')}
      />
    );
  };

  return (
    <View>
      <Text>Helo from Home screen</Text>
      {/*<FlatList data={data.categories} renderItem={renderCategory} />*/}

      {/*<CategoriesScreen navigation={navigation} />*/}
      <Button
        title={'details'}
        onPress={() => navigation.navigate('Category')}
      />
    </View>
  );
  // return (
  //   <View style={styles.container}>
  //     <Text>Hello</Text>
  //     <CategoriesScreen />
  //     <Button
  //       title="Go to Details"
  //       onPress={() => navigation.navigate('CategoryDetails')}
  //     />
  //     <StatusBar style="auto" />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
