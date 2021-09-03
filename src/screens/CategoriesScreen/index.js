import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../graphql/requests';

import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';
import { Categories } from '../../components/Categories';

export const CategoriesScreen = ({ navigation }) => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <Categories categories={data.categories} navigation={navigation} />;
};
