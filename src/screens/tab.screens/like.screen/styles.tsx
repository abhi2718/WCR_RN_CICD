import { View, Text, StyleSheet } from 'react-native';
import { sizes } from '../../../infrastructure/theme/sizes';
import { colors } from '../../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';
import { dimensions } from '../../../components/tools';

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
    color: '#616161',
    leadingTrim: 'both',
    textEdge: 'cap',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 26,
  },
  seeAll: {
    color: '#B00',
    leadingTrim: 'both',
    textEdge: 'cap',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 26,
  },
});
