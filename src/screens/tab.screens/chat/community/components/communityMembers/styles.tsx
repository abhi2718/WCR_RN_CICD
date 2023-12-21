import { View, StyleSheet } from 'react-native';
import { sizes } from '../../../../../../infrastructure/theme/sizes';
import { fontWeights } from '../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../infrastructure/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes[3],
  },
  memberContainer: {
    paddingHorizontal: sizes[3],
    backgroundColor: colors.ui.white,
  },
  iconSize: {
    height: sizes[5],
    width: sizes[5],
  },
  iconArrow: {
    height: sizes[2],
    width: sizes[2],
  },
  iconCross: {
    height: sizes[4] - 2,
    width: sizes[4] - 2,
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
  nameHeading: {
    fontSize: sizes[3],
    fontWeight: fontWeights.bold,
    color: colors.ui.primary,
  },

  groupHeading: {
    fontSize: sizes[4],
    fontWeight: fontWeights.bold,
    color: '#302B2B',
  },

  headerContainer: {
    padding: sizes[3],
    backgroundColor: '#fff',
    shadowColor: 'red',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
});
