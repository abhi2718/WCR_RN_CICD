import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';
import { colors } from '../../../../../infrastructure/theme/colors';
import { fontSizes } from '../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../infrastructure/theme/sizes';

export const profileStyles = StyleSheet.create({
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
    marginTop: sizes[0],
  },

  datePickerContainer: {
    flex: 1,
    position: 'relative',
    width: '100%',
  },
  openButton: {
    position: 'absolute',
    right: sizes[1],
    top: sizes[2],
    zIndex: 1,
  },
});
