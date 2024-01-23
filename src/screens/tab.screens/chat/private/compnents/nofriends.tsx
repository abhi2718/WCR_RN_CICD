import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../infrastructure/theme/fonts';

export const NoFriends = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.subHeading}>Chat</Text>
        <Image
          style={styles.noChatIcon}
          resizeMode="contain"
          source={require('../../../../../assets/images/icons/noChatIcon.png')}
        />
        <Text style={styles.text}>You’re new here! No chats yet.</Text>
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
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },
  noChatIcon: {
    width: sizes[12] * 2,
    height: sizes[12] * 2 - 10,
  },
  text: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    textAlign: 'center',
    fontSize: fontSizes.button,
    fontFamily: fonts.body,
  },
});
