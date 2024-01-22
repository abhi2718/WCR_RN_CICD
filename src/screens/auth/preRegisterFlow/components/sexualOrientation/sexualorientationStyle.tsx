import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
} from '../../../../../infrastructure/theme/fonts';
export const SexualOrientationStyle = StyleSheet.create({
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
    fontFamily: 'Urbanist-Regular',
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: '700',
    color: colors.ui.text,
    marginVertical: sizes[6],
    fontFamily: 'Urbanist-Regular',
  },
  text: {
    fontSize: fontSizes.text,
    color: colors.ui.text,
    marginTop: sizes[5],
    fontFamily: 'Urbanist-Regular',
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
    fontSize: fontSizes.text,
    fontWeight: fontWeights.medium,
    color: colors.ui.text,
    fontFamily: 'Urbanist-Regular',
  },
  rowView: {
    marginBottom: sizes[1],
  },
});
