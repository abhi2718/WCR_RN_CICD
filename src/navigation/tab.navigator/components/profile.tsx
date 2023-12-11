import React from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { sizes } from '../../../infrastructure/theme/sizes';

export default function SolidProfileImageImage() {
  const { user } = useSelector(({ userState }) => userState);
  return (
    <View>
      <Image
        source={{
          uri: user?.profilePicture?.url,
        }}
        style={styles.iconStyle}
      />
    </View>
  );
}
export function VectorProfileImageImage() {
  const { user } = useSelector(({ userState }) => userState);
  return (
    <View>
      <Image
        source={{
          uri: user?.profilePicture?.url,
        }}
        style={styles.iconStyle}
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
