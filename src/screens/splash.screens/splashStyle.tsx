import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { fontWeights, fonts } from '../../infrastructure/theme/fonts';
import { dimensions } from '../../components/tools';

export const splashstyles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.ui.white,
  },
});
