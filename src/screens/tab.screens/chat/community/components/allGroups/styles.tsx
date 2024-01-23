import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../../infrastructure/theme/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export const searchStyle = StyleSheet.create({
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
    fontFamily: fonts.body,
  },

  text: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    textAlign: 'center',
    fontSize: fontSizes.button,
    fontFamily: fonts.body,
  },
  pendingIcon: {
    width: sizes[12] * 2,
    height: sizes[12] * 2 - 10,
  },
});
