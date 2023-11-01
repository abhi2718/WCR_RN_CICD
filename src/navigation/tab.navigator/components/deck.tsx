import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function SolidDeckImage() {
  return (
    <View>
      <Image
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
    width: 20,
    height:20
  }
})
