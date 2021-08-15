import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { Emotion } from '../../components/Emotion';

export const Emotions = ({ navigation, emotions }) => {
  const _renderEmotion = useCallback(
    ({ item: emotion }) => {
      return (
        <Emotion
          emotion={emotion}
          onPress={() =>
            navigation.navigate('Emotion', {
              emotionId: emotion.id,
            })
          }
          goBack={() => navigation.goBack()}
        />
      );
    },
    [navigation],
  );

  const _keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <FlatList
      data={emotions}
      renderItem={_renderEmotion}
      keyExtractor={_keyExtractor}
    />
  );
};
