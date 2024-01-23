import { StyleSheet } from 'react-native';
import { colors } from '../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../infrastructure/theme/fonts';
import { sizes } from '../../../infrastructure/theme/sizes';

export const pendingStyle = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.ui.white,
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    width: '100%',
    padding: 16,
    justifyContent: 'space-around',
  },
  subHeading: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },
  text: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    fontFamily: fonts.body,
    fontSize: fontSizes.button,
  },
  pendingIcon: {
    width: 100,
    height: 90,
  },
  primaryButton: {
    width: '80%',
    fontFamily: fonts.body,
  },

  mainContainerDeclined: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.ui.white,
    alignItems: 'center',
    width: '100%',
  },
  contentDeclined: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    width: '100%',
    padding: 16,
    justifyContent: 'space-around',
    marginTop: 50,
  },
  subHeadingDeclined: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },
  textDeclined: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    fontFamily: fonts.body,
    fontSize: fontSizes.button,
  },
  pendingIconDeclined: {
    width: 100,
    height: 90,
  },
  redBox: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.bg.secondary,
    alignItems: 'center',
    borderRadius: sizes[3],
  },
  redBoxSubText: {
    color: colors.ui.text,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.text,
    marginBottom: sizes[2],
    fontFamily: fonts.body,
  },
  redBoxText: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.button,
    textAlign: 'center',
    fontFamily: fonts.body,
  },
});
