import { View, StyleSheet, Platform } from 'react-native';
import { sizes } from '../../../../../../infrastructure/theme/sizes';
import { fontWeights } from '../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../infrastructure/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: sizes[3],
    width: sizes[3],
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
    fontSize: sizes[3] + 1,
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
    ...Platform.select({
      ios: {
        shadowColor: '#808080',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
      android: {
        elevation: 1.25,
      },
    }),
  },
});
