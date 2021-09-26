import React, { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';

import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../graphql/requests';

import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';
import { Categories } from '../../components/Categories';

export const CategoriesScreen = ({ navigation }) => {
  const { data, loading, error, refetch } = useQuery(GET_CATEGORIES);

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

  return <Categories categories={data.categories} navigation={navigation} />;
};
