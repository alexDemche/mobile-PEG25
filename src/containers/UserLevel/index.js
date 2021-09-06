import React from 'react';
import { SvgUri } from 'react-native-svg';

import { translate } from '../../i18n';

import { useQuery } from '@apollo/client';
import { GET_LEVELS } from '../../graphql/requests';

import { useLevelsStore } from '../../store';

import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';
import { AppText } from '../../components/AppText';

import { BASE_URL } from '../../config';
import { getUserLevelByPoints } from '../../utils/helpers';

import { IconWrapperStyled, ViewStyled } from './styles';

export const UserLevel = () => {
  const { data, loading, error } = useQuery(GET_LEVELS);
  const points = useLevelsStore(state => state.points);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const { id, icon, toPoints } = getUserLevelByPoints(data.levels, points);

  return (
    <ViewStyled>
      <AppText fontSize={16} marginBottom={5}>
        {translate('levels.level')}: {id}
      </AppText>

      {icon && (
        <IconWrapperStyled>
          <SvgUri width="100%" height="100%" uri={`${BASE_URL}${icon.url}`} />
        </IconWrapperStyled>
      )}

      <AppText>
        {translate('levels.points')}: {points}
      </AppText>

      {points <= toPoints && (
        <AppText fontSize={14} marginBottom={5}>
          {translate('levels.to_the_next_level')}: {toPoints - points + 1}
        </AppText>
      )}
    </ViewStyled>
  );
};
