import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_EMOTION } from '../../graphql/requests';

import { MySlider } from '../../components/MySlider';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

export const EmotionScreen = ({ navigation, route }) => {
  const { emotionId } = route.params;
  const { data, loading, error } = useQuery(GET_EMOTION, {
    variables: {
      emotionId,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error.message} />;
  }

  const {
    emotion: { images, title },
  } = data;
  const screenTitle = title[0].toUpperCase() + title.slice(1);

  return (
    <MySlider images={images} navigation={navigation} title={screenTitle} />
  );
};
