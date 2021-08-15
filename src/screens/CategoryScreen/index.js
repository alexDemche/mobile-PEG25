import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_CATEGORY } from '../../graphql/requests';
import { ViewStyled, Title } from './styles';

import { AppText } from '../../components/AppText';
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
      <CategoryItems navigation={navigation} emotions={emotions} />
    </ViewStyled>
  );
};
