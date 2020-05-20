import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {MEALS} from '../components/modals';
import {MealItem} from '../components/MealItem';

interface CategoryMealsScreenProps {
  id: string;
}

export const CategoryMealsScreen: React.FC<CategoryMealsScreenProps> = (
  props,
) => {
  const {id} = props;
  const renderMealItem = (itemData: any) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          Actions.detail(itemData.item);
        }}
      />
    );
  };

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0,
  );
  return (
    <View style={Styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
