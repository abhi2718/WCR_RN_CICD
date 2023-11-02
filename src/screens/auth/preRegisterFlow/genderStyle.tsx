import { StyleSheet } from 'react-native';
import { dimensions } from '../../../components/tools';
import { colors } from '../../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';
import { sizes } from '../../../infrastructure/theme/sizes';
export const genderStyle = StyleSheet.create({
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
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.h5,
    marginTop: sizes[1],
  },
  radioButtonContainer: {
    marginTop: sizes[6],
  },
  btnText: {
    marginLeft: sizes[3],
    fontSize: sizes[3],
    fontWeight: fontWeights.medium,
  },
  rowView: {
    marginBottom: sizes[1],
  },
});
