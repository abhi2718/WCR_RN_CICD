import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';
import { fontWeights } from '../../../../../../../infrastructure/theme/fonts';

export const styles = StyleSheet.create({
  imageStyle: { width: 40, height: 40, borderRadius: 30 },

  profileAvatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },

  scopeMemberText: {
    color: '#7A7A7A',
    fontSize: sizes[2] + 1,
    fontWeight: fontWeights.regular,
  },

  memberNameText: {
    color: '#1B1B1B',
    fontSize: sizes[3] - 2,
    fontWeight: fontWeights.bold,
  },

  arrowStyle: {
    height: sizes[4],
    width: sizes[4],
  },

  memberName: {
    color: colors.ui.text,
    fontSize: sizes[4],
    fontWeight: fontWeights.bold,
  },

  viewProfileBtn: {
    width: 160,
    height: 54,
    borderColor: colors.ui.primary,
    borderWidth: 1,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.secondary,
  },
  viewBtnText: {
    color: '#D31335',
    fontSize: sizes[3],
    fontWeight: fontWeights.bold,
  },
  messageBtn: {
    width: 160,
    height: 54,
    borderColor: colors.ui.primary,
    borderWidth: 1,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ui.primary,
  },
  msgBtnText: {
    color: '#FEFBFD',
    fontSize: sizes[3],
    fontWeight: fontWeights.bold,
  },
});
