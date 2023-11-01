import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function SolidCommunityImage() {
  return (
    <View>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/images/tabBarIcons/community-solid.png')}
      />
    </View>
  );
}
export function VectorCommunityImage() {
  return (
    <View>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/images/tabBarIcons/community-vector.png')}
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
