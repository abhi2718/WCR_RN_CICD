import { View, StyleSheet } from 'react-native';
import { sizes } from '../../../../../../infrastructure/theme/sizes';
import { fontWeights } from '../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../infrastructure/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes[3],
  },
  iconSize: {
    height: sizes[5],
    width: sizes[5],
  },
  iconArrow: {
    height: sizes[2],
    width: sizes[2],
  },
  memberText: {
    fontSize: sizes[3],
    fontWeight: fontWeights.semiBold,
    color: colors.ui.text,
  },
  memberTextView: {
    fontSize: sizes[3],
    fontWeight: fontWeights.medium,
    color: colors.ui.text,
  },
});
