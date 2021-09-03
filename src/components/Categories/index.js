import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import { Category } from '../Category';
import { AppText } from '../AppText';

import { styles } from '../../stylesGlobal';

export const Categories = ({ navigation, categories }) => {
  const _renderCategory = useCallback(
    ({ item: category }) => {
      return (
        <Category
          category={category}
          title={category.title}
          onPress={() =>
            navigation.navigate('Category', {
              categoryId: category.id,
            })
          }
        />
      );
    },
    [navigation],
  );

  const _keyExtractor = useCallback(item => item.id.toString(), []);

  console.log('categories -->', categories);

  const ListHeaderComponent = () => {
    return (
      <AppText fontSize={24} marginBottom={5}>
        CATEGORIES
      </AppText>
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={_renderCategory}
      keyExtractor={_keyExtractor}
      contentContainerStyle={styles.flatList}
      numColumns={2}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
