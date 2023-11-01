import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function SolidPrivateChatImage() {
  return (
    <View>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/images/tabBarIcons/privateChat-solid.png')}
      />
    </View>
  );
}
export function VectorPrivateChatImage() {
  return (
    <View>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/images/tabBarIcons/privateChat-vector.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 20,
    height:20
  }
})
