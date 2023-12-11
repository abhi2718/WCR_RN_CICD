import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { sizes } from '../../../infrastructure/theme/sizes';

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
    width: sizes[7],
    height: sizes[7],
  },
});
