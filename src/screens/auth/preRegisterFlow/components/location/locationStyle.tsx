import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
} from '../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../infrastructure/theme/sizes';

export const location = StyleSheet.create({
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
    fontSize: fontSizes.h5,
    marginTop: sizes[1],
  },
});
