import { View, StyleSheet, Platform } from 'react-native';
import { sizes } from '../../../../../../infrastructure/theme/sizes';
import {
  fontWeights,
  fonts,
} from '../../../../../../infrastructure/theme/fonts';
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
    fontFamily: fonts.body,
  },
  nameHeading: {
    fontSize: sizes[3] + 1,
    fontWeight: fontWeights.bold,
    color: colors.ui.primary,
    fontFamily: fonts.body,
  },

  groupHeading: {
    fontSize: theme.units.sizes[22],
    fontWeight: theme.fontWeights.medium,
    color: colors.ui.text,
    textAlign: 'center',
    fontFamily: fonts.body,
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
    height: 58,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderBottomColor: theme.colors.border,
    borderBottomWidth: theme.units.borderSize.headerBorderWidth,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'black',
    //     shadowOffset: { width: 10, height: 4 },
    //     shadowOpacity: 0.01,
    //     shadowRadius: 0,
    //   },
    //   android: {
    //     elevation: 2,
    //   },
    // }),
  },
});
