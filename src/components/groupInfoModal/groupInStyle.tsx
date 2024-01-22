import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { dimensions } from '../tools';
import { fontSizes, fontWeights } from '../../infrastructure/theme/fonts';

export const modalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ui.opacity,
  },
  modalView: {
    justifyContent: 'space-between',
    backgroundColor: colors.bg.primary,
    borderRadius: sizes[4],
    paddingBottom: sizes[4],
    paddingHorizontal: sizes[3],
    shadowColor: colors.ui.black,
    height: dimensions.height,
    width: dimensions.width,
    paddingTop: 50,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: sizes[0],
    elevation: sizes[0],
  },
  logo: {
    width: 55,
  },
  closeIcon: {
    width: 20,
  },
  flex: {
    flex: 1,
  },
  header: {
    color: colors.ui.textHead,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
    fontFamily: 'Urbanist-Regular',
  },
  subHeader: {
    color: colors.ui.text,
    fontSize: fontSizes.button,
    fontWeight: fontWeights.regular,
    fontFamily: 'Urbanist-Regular',
  },
  contentHeader: {
    color: colors.ui.textHead,
    fontSize: fontSizes.text,
    fontFamily: 'Urbanist-Regular',
    fontWeight: fontWeights.semiBold,
  },
  contentText: {
    color: colors.ui.text,
    fontSize: fontSizes.text,
    fontWeight: fontWeights.regular,
    marginBottom: 12,
    fontFamily: 'Urbanist-Regular',
  },
  footerView: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    color: colors.ui.textHead,
    fontSize: fontSizes.text,
    fontWeight: fontWeights.semiBold,
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
  },
  footerRedText: {
    color: colors.ui.primary,
    fontSize: fontSizes.h6 + 2,
    fontWeight: fontWeights.bold,
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
  },
});
