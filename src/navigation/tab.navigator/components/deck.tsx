import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { sizes } from '../../../infrastructure/theme/sizes';

export default function SolidDeckImage() {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={styles.iconStyle}
        source={require('../../../assets/images/logo.png')}
      />
    </View>
  );
}
export function VectorDeckImage() {
  return (
    <View>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/images/tabBarIcons/logo-vector.png')}
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
