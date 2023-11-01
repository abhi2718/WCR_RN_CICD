import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

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
    width: 20,
        height: 20,
    borderRadius:10
  }
})
