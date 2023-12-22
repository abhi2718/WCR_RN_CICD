import { StyleSheet } from 'react-native';
import { fontSizes } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  iconStyle: {
    width: 40,
    height: 30,
  },
  arrowStyle: {
    width: 18,
  },
  text: {
    fontSize: fontSizes.text,
    color: colors.ui.text,
  },
});
