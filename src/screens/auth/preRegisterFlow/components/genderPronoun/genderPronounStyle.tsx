import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';
import { colors } from '../../../../../infrastructure/theme/colors';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { fontSizes } from '../../../../../infrastructure/theme/fonts';
export const genderPronounStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  arrow: {
    height: sizes[4],
  },
  logo: {
    marginLeft: -35,
    width: sizes[11],
    height: sizes[8],
    overflow: 'visible',
  },
  skipBtn: {
    fontSize: 20,
    color: colors.ui.text,
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: '700',
    color: colors.ui.text,
    marginVertical: sizes[6],
  },
  text: {
    fontSize: fontSizes.text,
    color: colors.ui.text,
    marginTop: sizes[5],
  },

  innerView: {
    flex: 1,
  },

  rowHeader: {
    width: dimensions.width,
    maxWidth: '100%',
  },
  btnText: {
    marginLeft: sizes[3],
    fontSize: sizes[3],
    fontWeight: '500',
  },
  rowView: {
    marginBottom: sizes[1],
  },
});
