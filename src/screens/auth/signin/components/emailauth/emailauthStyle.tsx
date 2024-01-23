import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { colors } from '../../../../../infrastructure/theme/colors';
import { fontSizes, fonts } from '../../../../../infrastructure/theme/fonts';
import { dimensions } from '../../../../../components/tools';

export const styles = StyleSheet.create({
  scrollDiv: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpImg: {
    width: dimensions.width,
    height: 300,
  },
  viewBox: {
    width: '100%',
  },
  inputBox: {
    borderRadius: sizes[9],
    backgroundColor: colors.ui.inputBg,
    marginTop: sizes[4],
    marginBottom: sizes[4],
    width: dimensions.width - 32,
  },
  otpText: {
    color: colors.ui.text,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: sizes[4],
    fontFamily: fonts.body,
  },
  otpEmail: {
    color: '#007AFF',
    fontSize: fontSizes.button,
    textAlign: 'center',
    marginTop: sizes[1],
    textTransform: 'lowercase',
    fontFamily: fonts.body,
  },
});
