import { StyleSheet } from 'react-native';
import { colors } from '../../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';

export const pendingStyle = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.ui.white,
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    width: '100%',
    padding: 16,
    justifyContent: 'space-around',
  },
  subHeading: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
  },
  text: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,

    fontSize: fontSizes.button,
  },
  pendingIcon: {
    width: 100,
    height: 90,
  },
  primaryButton: {
    width: '80%',
  },
});
