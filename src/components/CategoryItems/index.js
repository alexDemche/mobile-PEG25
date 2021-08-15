import React, { useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
