import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
} from '../../../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';

export const pausedProfileStyle = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    padding: sizes[3],
    justifyContent: 'center',
    alignItems: 'center',
    gap: sizes[12],
  },
  subHeading: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
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
  primaryButton: {
    width: '80%',
  },
});
