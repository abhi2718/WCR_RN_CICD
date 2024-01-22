import { View, Text, StyleSheet } from 'react-native';
import { sizes } from '../../../infrastructure/theme/sizes';
import { colors } from '../../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';
import { dimensions } from '../../../components/tools';
import { theme } from '../../../infrastructure/theme';

export const styles = StyleSheet.create({
  header: {
    height: 58,
    // paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomColor: theme.colors.border,
    borderBottomWidth: theme.units.borderSize.headerBorderWidth,
    marginBottom: 16,
  },
  flexContainer: {
    flex: 1,
  },
  modalBackButtonContainer: {
    width: 80,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: dimensions.width,
    paddingHorizontal: 8,
  },
  flatListWrapperStyle: {
    width: dimensions.width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerViewStyle: {
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
    marginBottom: 10,
    marginTop: 20,
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
    paddingRight: 80,
  },
  backArrowSize: {
    width: theme.units.sizes[21],
    height: theme.units.sizes[21],
  },
  noDataList: {
    minHeight: 200,
    padding: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.bg.secondary,
    borderRadius: 20,
  },
  noMatches: {
    minHeight: 350,
  },
  noDataImg: {
    width: 80,
    height: 80,
  },
  noDataListText: {
    textAlign: 'center',
    fontSize: theme.fontSizes.button,
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.ui.text,
    maxWidth: dimensions.width,
  },

  paddingMatches: {
    width: dimensions.width - 20,
    maxWidth: 250,
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
