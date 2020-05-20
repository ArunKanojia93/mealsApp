import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from 'react-native';

interface MealItemProps {
  title: string;
  duration: string;
  onSelectMeal: any;
  complexity: string;
  affordability: string;
  image: string;
}

export const MealItem: React.FC<MealItemProps> = (props) => {
  const {
    title,
    duration,
    onSelectMeal,
    complexity,
    affordability,
    image,
  } = props;

  let TouchableCmp: any = TouchableNativeFeedback;

  if (Platform.OS !== 'android' && Platform.Version < 21) {
    TouchableCmp = TouchableOpacity;
  }

  return (
    <View style={Styles.mealItem}>
      <TouchableCmp onPress={onSelectMeal}>
        <View>
          <View style={{...Styles.mealRow, ...Styles.mealHeader}}>
            <ImageBackground source={{uri: image}} style={Styles.bgImage}>
              <View style={Styles.titleContainer}>
                <Text numberOfLines={1} style={Styles.title}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...Styles.mealRow, ...Styles.mealDetail}}>
            <Text>{duration} min.</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const Styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#cccfff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'BalsamiqSans-Bold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '84%',
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
});
