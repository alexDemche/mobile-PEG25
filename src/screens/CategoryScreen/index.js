import React from 'react';
import { Button, FlatList, Text } from 'react-native';

import { useQuery } from '@apollo/client';

import { ViewStyled, Title } from './styles';
import { GET_CATEGORY } from '../../graphql/requests';
import { Category } from '../../components/Category/Category';
import { AppText } from '../../components/AppText';
import { Emotions } from '../../containers/Emotions';
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
    <ViewStyled>
      <Title>{category.title}</Title>
      <AppText>{category.description}</AppText>

      {/*<Emotions navigation={navigation} emotions={emotions} />*/}
      <CategoryItems navigation={navigation} emotions={emotions} />

      {/*<Button*/}
      {/*  title="Go to Categories"*/}
      {/*  onPress={() => navigation.navigate('Categories')}*/}
      {/*/>*/}
    </ViewStyled>
  );
};
