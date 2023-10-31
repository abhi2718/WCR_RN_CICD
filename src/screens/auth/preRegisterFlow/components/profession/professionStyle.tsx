import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
} from '../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../infrastructure/theme/sizes';

export const profession = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerView: {
    flex: 1,
  },
  inputField: {
    borderColor: 'red',
    borderWidth: 2,
    background: 'white',
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
