import React from 'react';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
} from './screens';
import {HeaderButton} from './components/HeaderButton';

const App: React.FC = () => {
  return (
    <Router>
      <Stack
        navigationBarStyle={{
          backgroundColor: '#ff66e5',
        }}
        key={'root'}>
        <Scene
          key={'categories'}
          component={CategoriesScreen}
          title="Meal Categories"
        />
        <Scene
          navBarButtonColor="white"
          titleStyle={{
            fontFamily: 'BalsamiqSans-Bold',
            color: '#fff',
            fontSize: 32,
          }}
          key={'meals'}
          component={CategoryMealsScreen}
        />
        <Scene
          renderRightButton={HeaderButton}
          navBarButtonColor="white"
          key={'detail'}
          component={MealDetailScreen}
        />
      </Stack>
    </Router>
  );
};

const Styles = StyleSheet.create({});

export default App;
