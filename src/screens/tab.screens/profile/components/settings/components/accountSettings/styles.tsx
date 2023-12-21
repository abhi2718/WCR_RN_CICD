import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';
import {
  fontSizes,
  fontWeights,
} from '../../../../../../../infrastructure/theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  row: {
    borderBottomWidth: 2,
    borderBottomColor: colors.ui.chatBorder,
    paddingBottom: sizes[1],
  },
  text: {
    color: colors.ui.text,
    fontSize: fontSizes.text,
  },
  deletBtn: {
    color: colors.ui.primary,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.title,
  },
});
