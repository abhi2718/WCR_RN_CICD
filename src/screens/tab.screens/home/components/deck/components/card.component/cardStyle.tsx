import { StyleSheet } from 'react-native';
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
    fontweight: fontWeights.bold,
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
    marginTop: sizes[2],
  },
  userInfoRow: {
    marginTop: sizes[1] / 2,
  },
  userInfoIcon: {
    height: sizes[5],
    width: sizes[5],
    overflow: 'visible',
    resizeMode: 'contain',
  },
  userInfoText: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.text,
  },
  headingText: {
    marginTop: sizes[2],
    color: colors.ui.text,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.text,
  },
  vitalSignsChips: {
    marginVertical: sizes[2],
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: colors.ui.deckChipBgColor,
    paddingVertical: sizes[1],
    paddingHorizontal: sizes[2],
    borderRadius: sizes[4],
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
  inBtwnText: {
    marginVertical: sizes[1],
  },
  blockReportText: {
    textAlign: 'center',
    marginVertical: sizes[2],
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.title,
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
