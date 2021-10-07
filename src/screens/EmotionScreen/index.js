import React, { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';

import { useQuery } from '@apollo/client';
import { GET_EMOTION } from '../../graphql/requests';

import { CURRENT_LOCALE } from '../../i18n';

import { MySlider } from '../../components/MySlider';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

export const EmotionScreen = ({ navigation, route }) => {
  const { emotionId } = route.params;
  const { data, loading, error, refetch } = useQuery(GET_EMOTION, {
    variables: {
      emotionId,
      currLocale: CURRENT_LOCALE,
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

  const { images, title } = data.emotions[0];
  const screenTitle = title[0].toUpperCase() + title.slice(1);

  return (
    <MySlider images={images} navigation={navigation} title={screenTitle} />
  );
};
