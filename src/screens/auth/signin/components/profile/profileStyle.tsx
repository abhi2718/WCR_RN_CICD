import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../infrastructure/theme/sizes';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  arrow: {
    height: sizes[4],
  },
  logo: {
    marginLeft: -45,
    width: sizes[11],
    height: sizes[8],
    overflow: 'visible',
  },
  skipBtn: {
    fontSize: 20,
    color: colors.ui.text,
    fontFamily: fonts.body,
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: '700',
    color: colors.ui.text,
    marginVertical: sizes[6],
    lineHeight: sizes[7],
    fontFamily: fonts.body,
  },
  text: {
    fontSize: fontSizes.text,
    color: colors.ui.text,
    marginTop: sizes[5],
    fontFamily: fonts.body,
  },

  innerView: {
    flex: 1,
  },

  rowHeader: {
    width: dimensions.width,
    maxWidth: '100%',
  },

  datePickerContainer: {
    flex: 1,
    position: 'relative',
    width: '100%',
  },
  openButton: {
    position: 'absolute',
    right: 0,
    top: sizes[3],
    zIndex: 1,
  },
  openButtonImg: {
    width: sizes[7],
    height: sizes[7],
  },
});
