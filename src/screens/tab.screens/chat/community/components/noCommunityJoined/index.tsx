import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { colors } from '../../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
} from '../../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../../infrastructure/theme/sizes';

export const NoCommunityJoined = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.subHeading}>My Groups</Text>
        <Image
          style={styles.noGroupIcon}
          resizeMode="contain"
          source={require('../../../../../../assets/images/icons/noGroupIcon.png')}
        />
        <Text style={styles.text}>
          You’re new here! {`\n`} Join groups from my groups.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    padding: sizes[3],
    justifyContent: 'center',
    alignItems: 'center',
    gap: sizes[12],
    backgroundColor: '#fff',
  },
  subHeading: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontFamily: 'Urbanist-Regular',
    fontWeight: fontWeights.bold,
  },
  noGroupIcon: {
    width: sizes[12] * 2,
    height: sizes[12] * 2 - 10,
  },
  text: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    textAlign: 'center',
    fontSize: fontSizes.button,
    fontFamily: 'Urbanist-Regular',
  },
});
