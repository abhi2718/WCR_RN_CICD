import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { sizes } from '../../../infrastructure/theme/sizes';

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
    width: sizes[7],
    height: sizes[7],
  },
});
