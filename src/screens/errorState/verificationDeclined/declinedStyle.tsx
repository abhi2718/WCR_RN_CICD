import { StyleSheet } from 'react-native';
import { colors } from '../../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';
import { sizes } from '../../../infrastructure/theme/sizes';

export const declinedStyle = StyleSheet.create({
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
    marginTop: 50,
  },
  subHeading: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
    fontFamily: 'Urbanist-Regular',
  },
  text: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    fontFamily: 'Urbanist-Regular',
    fontSize: fontSizes.button,
  },
  pendingIcon: {
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
    fontFamily: 'Urbanist-Regular',
  },
  redBoxText: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.button,
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
  },
  primaryButton: {
    width: '80%',
  },
});
