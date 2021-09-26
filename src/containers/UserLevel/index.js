import React, { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { SvgUri } from 'react-native-svg';

import { translate } from '../../i18n';

import { useQuery } from '@apollo/client';
import { GET_LEVELS } from '../../graphql/requests';

import { useLevelsStore } from '../../store';

import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';
import { AppText } from '../../components/AppText';

import { getUserLevelByPoints } from '../../utils/helpers';

import { IconWrapperStyled, ViewStyled } from './styles';

export const UserLevel = () => {
  const { data, loading, error, refetch } = useQuery(GET_LEVELS);
  const points = useLevelsStore(state => state.points);

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

  const { levels = [] } = data;
  const lastLevel = levels[levels.length - 1];

  const {
    id = 0,
    number = 0,
    icon = null,
    toPoints = 0,
  } = getUserLevelByPoints(levels, points);

  const isLastLevel = id === lastLevel.id;

  return (
    <ViewStyled>
      <AppText fontSize={16} marginBottom={5}>
        {translate('levels.level')}: {number}
      </AppText>

      {icon && (
        <IconWrapperStyled>
          <SvgUri width="100%" height="100%" uri={icon.url} />
        </IconWrapperStyled>
      )}

      <AppText>
        {translate('levels.points')}: {points}
      </AppText>

      {!isLastLevel && (
        <AppText fontSize={12}>
          {translate('levels.to_the_next_level')}: {toPoints - points + 1}
        </AppText>
      )}
    </ViewStyled>
  );
};
