import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
} from '../../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: fontWeights.semiBold,
    color: colors.ui.text,
    fontSize: fontSizes.text,
    fontFamily: 'Urbanist-Regular',
  },
  input: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#000',
    paddingVertical: sizes[4],
    paddingHorizontal: sizes[2],
    fontSize: sizes[3],
    letterSpacing: 0.1,
    borderRadius: sizes[4],
    height: sizes[9] * 6,
    fontFamily: 'Urbanist-Regular',
  },
});
