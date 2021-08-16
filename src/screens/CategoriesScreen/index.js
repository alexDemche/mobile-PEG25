import React from 'react';
import { FlatList, View } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../graphql/requests';

import { styles } from './styles';

import { Category } from '../../components/Category';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

export const CategoriesScreen = ({ navigation }) => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const renderCategory = ({ item: category }) => {
    return (
      <Category
        category={category}
        title={category.title}
        onPress={() =>
          navigation.navigate('Category', {
            categoryId: category.id,
          })
        }
      />
    );
  };

  return (
    <FlatList
      data={data.categories}
      renderItem={renderCategory}
      contentContainerStyle={styles.list}
      numColumns={2}
    />
  );
};
