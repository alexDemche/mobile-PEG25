import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { styles } from '../../stylesGlobal';
import { CategoryItem } from '../CategoryItem';
import { AppText } from '../AppText';

export const CategoryItems = ({ navigation, emotions, category }) => {
  const _renderItem = useCallback(
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

  const ListHeaderComponent = () => {
    return (
      <AppText fontSize={24} marginBottom={5}>
        {category.title}
      </AppText>
    );
  };

  return (
    <FlatList
      data={emotions}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      numColumns={3}
      contentContainerStyle={styles.flatList}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
