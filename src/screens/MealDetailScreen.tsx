import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

interface MealDetailScreenProps {
  id: string;
  title: string;
}

export const MealDetailScreen: React.FC<MealDetailScreenProps> = (props) => {
  const {title} = props;
  return (
    <View style={Styles.screen}>
      <Text>{title}</Text>
      <Button
        title={'Home'}
        onPress={() => {
          Actions.reset('categories');
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
