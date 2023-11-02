import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';
import { colors } from '../../../../../infrastructure/theme/colors';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { fontWeights } from '../../../../../infrastructure/theme/fonts';
export const genderPronounStyle = StyleSheet.create({
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
    fontSize: sizes[4],
    marginTop: sizes[1],
  },
  radioButtonContainer: {
    marginTop: sizes[5],
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
