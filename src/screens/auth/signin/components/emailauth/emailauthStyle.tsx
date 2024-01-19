import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { colors } from '../../../../../infrastructure/theme/colors';
import { fontSizes } from '../../../../../infrastructure/theme/fonts';
import { dimensions } from '../../../../../components/tools';
import { theme } from '../../../../../infrastructure/theme';

export const styles = StyleSheet.create({
  vFullHeight: {
    flexGrow: 1,
  },
  colWrapper: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 24,
    backgroundColor: theme.colors.ui.white,
  },
  dFlex: {
    flex: 1,
  },
  vMargin16: {
    marginVertical: 16,
  },
  otpImg: {
    width: 255,
    height: 237,
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
  },
  otpEmail: {
    color: '#007AFF',
    fontSize: fontSizes.button,
    textAlign: 'center',
    marginTop: sizes[1],
    textTransform: 'lowercase',
  },
});
