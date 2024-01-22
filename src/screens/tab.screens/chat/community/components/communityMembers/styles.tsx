import { View, StyleSheet, Platform } from 'react-native';
import { sizes } from '../../../../../../infrastructure/theme/sizes';
import { fontWeights } from '../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../infrastructure/theme/colors';
import { theme } from '../../../../../../infrastructure/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    fontFamily: 'Urbanist-Regular',
  },
  nameHeading: {
    fontSize: sizes[3] + 1,
    fontWeight: fontWeights.bold,
    color: colors.ui.primary,
    fontFamily: 'Urbanist-Regular',
  },

  groupHeading: {
    fontSize: theme.units.sizes[22],
    fontWeight: theme.fontWeights.medium,
    color: colors.ui.text,
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
  },
  square: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    height: 150,
    shadowColor: 'black',
    width: 150,
  },
  headerContainer: {
    padding: sizes[3],
    backgroundColor: '#fff',
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});
