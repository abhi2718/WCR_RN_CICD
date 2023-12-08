import { StyleSheet } from 'react-native';
import { colors } from '../../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';
import { sizes } from '../../../infrastructure/theme/sizes';

export const notificationStyle = StyleSheet.create({
  padding: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notifications: {
    borderColor: 'red',
    borderWidth: 1,
  },
  content: {
    flex: 1,
    width: '100%',
    padding: sizes[3],
    justifyContent: 'space-around',
  },
  subHeading: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
  },
  subHeadingInner: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  text: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    textAlign: 'center',
    fontSize: fontSizes.button,
  },
  pendingIcon: {
    width: sizes[12] * 2,
    height: sizes[12] * 2 - 10,
  },
});