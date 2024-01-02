import { View, Text, StyleSheet } from 'react-native';
import { sizes } from '../../../infrastructure/theme/sizes';
import { colors } from '../../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';
import { dimensions } from '../../../components/tools';
import { theme } from '../../../infrastructure/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: dimensions.width,
    padding: 8,
  },

  headerViewStyle: {
    height: 40,
    justifyContent: 'center',
  },
  padHorizontal: {
    paddingHorizontal: sizes[3],
  },

  content: {
    flex: 1,
    width: '100%',
    padding: sizes[3],
    justifyContent: 'center',
    alignItems: 'center',
    gap: sizes[12],
    backgroundColor: '#fff',
  },
  subHeading: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
  },
  noMatchIcon: {
    width: sizes[12] * 2,
    height: sizes[12] * 2 - 10,
  },
  text: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    textAlign: 'center',
    fontSize: fontSizes.button,
  },
  matchHeading: {
    color: theme.colors.ui.textHead,
    fontSize: theme.fontSizes.text,
    fontWeight: theme.fontWeights.semiBold,
    lineHeight: 26,
  },
  seeAll: {
    color: theme.colors.ui.primary,
    fontSize: theme.fontSizes.text,
    fontWeight: theme.fontWeights.medium,
    lineHeight: 26,
  },
  headerPadding: {
    paddingBottom: theme.units.sizes[10],
    paddingTop: theme.units.sizes[0],
  },
  backArrowPadding: {
    paddingBottom: theme.units.sizes[16],
    paddingTop: theme.units.sizes[2],
  },
  paddingBottom20: {
    paddingBottom: theme.units.sizes[20],
  },
  headerText: {
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.ui.textHead,
    textAlign: 'center',
    flex: 1,
    paddingRight: 21,
  },
  backArrowSize: {
    width: theme.units.sizes[21],
    height: theme.units.sizes[21],
  },
  noDataList: {
    minHeight: 170,
    padding: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataListText: {
    textAlign: 'center',
    fontSize: theme.fontSizes.button,
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.ui.secondary,
    maxWidth: dimensions.width,
  },

  paddingMatches: {
    width: dimensions.width - 60,
    maxWidth: 210,
  },
  paddingReceiveLiked: {
    width: dimensions.width - 60,
    maxWidth: 300,
  },
  paddingLiked: {
    width: dimensions.width - 60,
    maxWidth: 190,
  },
  paddingSaved: {
    width: dimensions.width - 60,
    maxWidth: 300,
  },
  likedTextBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
