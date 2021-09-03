import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_CATEGORY } from '../../graphql/requests';

import { CategoryItems } from '../../components/CategoryItems';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

export const CategoryScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { data, loading, error } = useQuery(GET_CATEGORY, {
    variables: {
      categoryId: categoryId,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const {
    category,
    category: { emotions },
  } = data;

  return (
    <CategoryItems
      navigation={navigation}
      category={category}
      emotions={emotions}
    />
  );
};
