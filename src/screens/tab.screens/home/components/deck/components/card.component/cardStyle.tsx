import { StyleSheet, Platform } from 'react-native';
import { dimensions } from '../../../../../../../components/tools';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';

export const cardStyles = StyleSheet.create({
  deckContainer: {
    backgroundColor: '#fff',
    position: 'relative',
  },
  ph16: {
    paddingHorizontal: 16,
  },
  shadows: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 0 },
  },
  shareIconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 9999,
  },
  shareIcon: {
    width: 48,
    height: 48,
  },
  imageStyle: {
    width: dimensions.width - sizes[3],
    borderRadius: sizes[4],
  },
  nameRow: {
    flex: 1,
    position: 'absolute',
    bottom: sizes[4],
    left: sizes[4],
  },
  name: {
    fontSize: fontSizes.h6,
    color: colors.ui.white,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },
  gradient: {
    height: '100%',
    width: '100%',
  },
  badge: {
    height: sizes[8],
    width: sizes[5],
  },
  userInfo: {
    marginVertical: sizes[1],
  },
  userInfoRow: {
    marginTop: sizes[2],
  },
  userInfoIcon: {
    height: sizes[5],
    width: sizes[5],
    overflow: 'visible',
    resizeMode: 'contain',
  },
  userInfoText: {
    color: colors.ui.text,
    fontSize: fontSizes.text,
  },
  headingText: {
    marginTop: sizes[2],
    color: colors.ui.text,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.text,
    fontFamily: fonts.body,
  },
  vitalSignsChips: {
    marginVertical: sizes[2],
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: colors.ui.deckChipBgColor,
    paddingHorizontal: sizes[2],
    borderRadius: sizes[4],
    height: 35,
    marginRight: 20,
  },
  chipIcon: {
    height: sizes[5],
    width: sizes[5],
    overflow: 'visible',
    resizeMode: 'contain',
  },
  chipText: {
    color: colors.ui.text,
    fontSize: fontSizes.button,
  },
  aboutText: {
    color: colors.ui.text,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.button,
    marginTop: sizes[1],
  },
  blockReportView: {
    borderTopColor: 'rgba(29, 27, 32, 0.20)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(29, 27, 32, 0.20)',
    borderBottomWidth: 1,
  },
  blockReportText: {
    textAlign: 'center',
    paddingVertical: sizes[3],
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.title,
  },
  reportText: {
    color: colors.ui.primary,
  },
  hrLine: {
    borderTopColor: 'rgba(29, 27, 32, 0.20)',
    borderTopWidth: 1,
  },
  footerIconRow: {
    marginVertical: sizes[5],
  },
  footerIcon: {
    height: sizes[12],
    width: sizes[12],
    overflow: 'visible',
    resizeMode: 'contain',
  },
});
