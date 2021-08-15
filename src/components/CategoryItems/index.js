import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { styles } from './styles';
import { CategoryItem } from '../CategoryItem';

export const CategoryItems = ({ navigation, emotions }) => {
  const _renderEmotion = useCallback(
    ({ item: emotion }) => {
      return (
        <CategoryItem
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
      numColumns={3}
      contentContainerStyle={styles.list}
    />
  );
};
