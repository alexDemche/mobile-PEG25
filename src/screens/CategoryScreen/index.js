import React, { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';

import { useQuery } from '@apollo/client';
import { GET_CATEGORY } from '../../graphql/requests';

import { CategoryItems } from '../../components/CategoryItems';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

export const CategoryScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { data, loading, error, refetch } = useQuery(GET_CATEGORY, {
    variables: {
      categoryId: categoryId,
    },
  });

  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.isConnected && error) {
      refetch();
    }
  }, [netInfo.isConnected, refetch, error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error.message} />;
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
