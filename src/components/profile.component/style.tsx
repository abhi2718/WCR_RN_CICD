import { StyleSheet } from 'react-native';
import { theme } from '../../infrastructure/theme';
import { colors } from '../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../infrastructure/theme/fonts';
import { sizes } from '../../infrastructure/theme/sizes';
import { dimensions } from '../tools';

export const styles = StyleSheet.create({
  profileImage: {
    width: '100%',
    height: 600,
  },
  containerWrapperStyle: {
    flex: 1,
  },
  backButtonStyle: {
    width: 60,
  },
  userNameText: {
    position: 'absolute',
    bottom: theme.units?.sizes[20],
    left: theme.units.sizes[16],
    fontSize: theme.fontSizes.h6,
    color: theme.colors.ui.white,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fontFamily.body,
  },
  relative: {
    position: 'relative',
  },
  shareIconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 9999,
  },
  shareIconTop: {
    width: 40,
    height: 40,
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
  userInfoText: {
    color: theme.colors.ui.text,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.text,
    paddingLeft: 6,
  },
  aboutText: {
    color: theme.colors.ui.text,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.text,
  },
  bioText: {
    color: colors.ui.text,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.button,
  },
  userInfo: {
    marginTop: 16,
    marginBottom: 10,
    flexDirection: 'column',
    paddingHorizontal: 16,
    gap: 5,
  },
  gallery: {
    fontSize: 22,
    fontWeight: theme.fontWeights.semiBold,
  },
  pictures: {
    width: dimensions.width,
    height: dimensions.height - 150,
  },
  nameRow: {
    flex: 1,
    position: 'absolute',
    bottom: sizes[4],
    left: sizes[4],
  },
  badge: {
    height: sizes[8],
    width: sizes[5],
  },
  backHeaderPadding: {
    paddingTop: theme.units.sizes[0],
    paddingBottom: theme.units.sizes[10],
    paddingLeft: theme.units.sizes[10],
  },
  backArrowSize: {
    width: theme.units.sizes[23],
    height: theme.units.sizes[23],
  },
  sectionWhite: {
    backgroundColor: theme.colors.ui.white,
    position: 'relative',
  },
  marginY: {
    // marginVertical: 16,
  },
  shareIconView: {
    position: 'absolute',
    zIndex: 20,
    right: 15,
    top: 60,
  },
  shareIcon: {
    width: 48,
    height: 48,
  },
  marginBottom: {
    marginBottom: 16,
  },
  imageView: {
    padding: theme.units.sizes[10],
    flexBasis: '50%',
  },
  imageIcon: {
    height: sizes[5],
    width: sizes[5],
    overflow: 'visible',
    resizeMode: 'contain',
  },
  userGallery: {
    paddingTop: 5,
    paddingBottom: 24,
  },

  vitalSigns: {
    paddingHorizontal: 16,
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
    height: 35,
    marginRight: 0,
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
  headingText: {
    marginTop: sizes[2],
    color: colors.ui.text,
    fontWeight: fontWeights.bold,
    fontSize: 22,
    fontFamily: fonts.body,
  },
  inBtwnText: {
    marginVertical: sizes[1],
    paddingHorizontal: 16,
  },
  shareWrapper: {
    marginVertical: 20,
  },
  blockReportText: {
    textAlign: 'center',
    marginVertical: sizes[2],
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.title,
  },
});
