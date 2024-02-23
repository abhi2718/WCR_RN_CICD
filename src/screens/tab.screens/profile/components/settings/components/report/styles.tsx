import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';

export const styles = StyleSheet.create({
  limitText: {
    position: "absolute",
    bottom: 20,
    right: 16,
    color: colors.ui.primary
  },
  wrapper: {
    flex:1,
  },
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
    fontFamily: fonts.body,
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
    fontFamily: fonts.body,
  },
});
