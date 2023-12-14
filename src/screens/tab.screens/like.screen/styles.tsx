import { View, Text, StyleSheet } from 'react-native';
import { sizes } from '../../../infrastructure/theme/sizes';
import { colors } from '../../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});
