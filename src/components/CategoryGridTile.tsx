import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

interface CategoryGridTileProps {
  itemData: any;
}

export const CategoryGridTile: React.FC<CategoryGridTileProps> = (props) => {
  const {itemData} = props;

  let TouchableCmp: any = TouchableNativeFeedback;

  if (Platform.OS !== 'android' && Platform.Version < 21) {
    TouchableCmp = TouchableOpacity;
  }

  return (
    <View
      style={{...Styles.gridStyle, ...{backgroundColor: itemData.item.color}}}>
      <TouchableCmp onPress={() => Actions.meals(itemData.item)}>
        <View style={Styles.gridItem}>
          <Text style={Styles.title}>{itemData.item.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const Styles = StyleSheet.create({
  gridStyle: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 16,
    elevation: 8,
    overflow: 'hidden',
  },
  gridItem: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  title: {
    fontSize: 22,
    textAlign: 'right',
    fontFamily: 'BalsamiqSans-Bold',
    color: '#fff',
  },
});
