import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';
import { dimensions } from '../../../../../components/tools';
import { sizes } from '../../../../../infrastructure/theme/sizes';

export const styles = StyleSheet.create({
  ph16: {
    paddingHorizontal: 16,
  },
  shareIconView: {
    position: 'absolute',
    zIndex: 20,
    right: 15,
    top: 20,
  },
  shareIcon: {
    width: 40,
    height: 40,
  },
  header: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
  headerText: {
    fontSize: fontSizes.title,
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
  },
  aboutHeading: {
    color: colors.ui.text,
    fontWeight: fontWeights.bold,
    fontSize: 22,
    fontFamily: fonts.body,
  },
  profilePic: {
    width: dimensions.width,
    height: dimensions.height - 120,
  },
  pictures: {
    width: dimensions.width,
    height: dimensions.height - 150,
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
    fontSize: 22,
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
    marginTop: sizes[0],
    paddingHorizontal: 16,
  },
  vitalSigns: {
    paddingHorizontal: 16,
    marginTop: 5,
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
    fontWeight: fontWeights.medium,
    fontFamily: fonts.body,
    flex: 1,
  },
  headingText: {
    marginTop: sizes[2],
    color: colors.ui.text,
    fontWeight: fontWeights.bold,
    fontSize: 22,
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
    fontFamily: fonts.body,
  },
  aboutText: {
    color: colors.ui.text,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.button,
    marginTop: sizes[0],
    fontFamily: fonts.body,
  },
  hobbiesChip: {
    borderRadius: sizes[4],
    overflow: 'hidden',
    height: 35,
    backgroundColor: colors.ui.deckChipBgColor,
    paddingHorizontal: sizes[2],
    marginRight: 8,
    marginBottom: 8,
    paddingVertical: 8,
    color: colors.ui.text,
    fontFamily: fonts.body,
  },

  inBtwnText: {
    marginVertical: sizes[1],
    paddingHorizontal: 16,
    fontFamily: fonts.body,
  },
  blockReportText: {
    textAlign: 'center',
    marginVertical: sizes[2],
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.title,
    fontFamily: fonts.body,
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
  mainContainer: {
    marginBottom: 75,
  },
});
