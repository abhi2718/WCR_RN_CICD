import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { colors } from '../../../../../infrastructure/theme/colors';
import { fontSizes } from '../../../../../infrastructure/theme/fonts';
export const SexualOrientationStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerView: {
    flex: 1,
  },

  rowHeader: {
    width: dimensions.width,
    maxWidth: '100%',
  },
  subHeader: {
    color: colors.ui.text,
    fontWeight: '700',
    fontSize: fontSizes.h6,
    marginTop: sizes[1],
  },
  radioButtonContainer: {
    // borderColor: 'red',
    // borderWidth: 2,
    marginTop: sizes[5],
  },
  btnText: {
    marginLeft: sizes[3],
    fontSize: fontSizes.text,
    fontWeight: '500',
  },
  rowView: {
    marginBottom: sizes[1],
  },
});
