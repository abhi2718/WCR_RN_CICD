import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function SolidLikesImage() {
  return (
    <View>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/images/tabBarIcons/LikeSolid.png')}
      />
    </View>
  );
}
export function VectorLikesImage() {
  return (
    <View>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/images/tabBarIcons/solid-vector.png')}
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
