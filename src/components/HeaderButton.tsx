import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';

interface HeaderButtonProps {}

export const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
  return (
    <View style={{overflow: 'hidden', borderRadius: 50}}>
      <TouchableNativeFeedback style={{margin: 10}}>
        <Icon
          onPress={() => {
            Actions.categories();
          }}
          name={'star'}
          size={30}
          style={{
            color: '#ffbf00',
            textShadowColor: '#000',
            textShadowRadius: 6,
            textShadowOffset: {width: 0, height: 1},
          }}
        />
      </TouchableNativeFeedback>
    </View>
  );
};
