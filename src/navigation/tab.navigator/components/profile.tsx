import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { sizes } from '../../../infrastructure/theme/sizes';

export default function SolidProfileImageImage() {
  return (
    <View>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/images/tabBarIcons/profileImage.png')}
      />
    </View>
  );
}
export function VectorProfileImageImage() {
  return (
    <View>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/images/tabBarIcons/profileImage.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    width: sizes[7],
    height: sizes[7],
    borderRadius: sizes[3],
  },
});
