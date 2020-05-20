import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {CATEGORIES} from '../components/modals';
import {CategoryGridTile} from '../components/CategoryGridTile';

interface CategoriesScreenProps {}

export const CategoriesScreen: React.FC<CategoriesScreenProps> = (props) => {
  const renderGridItem = (itemData: any) => {
    return <CategoryGridTile itemData={itemData} />;
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const Styles = StyleSheet.create({});
