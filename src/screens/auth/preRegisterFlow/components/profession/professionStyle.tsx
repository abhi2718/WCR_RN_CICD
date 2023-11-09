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
    justifyContent: 'space-between',
  },
  arrow: {
    height: sizes[4],
  },
  logo: {
    marginLeft: -5,
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
  inputField: {
    borderColor: 'red',
    borderWidth: 2,
    background: 'white',
  },
  rowHeader: {
    width: dimensions.width,
    maxWidth: '100%',
  },
});
