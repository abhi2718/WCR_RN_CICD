import {StyleSheet} from 'react-native';
import {sizes} from '../../../../../infrastructure/theme/sizes';
import {colors} from '../../../../../infrastructure/theme/colors';

export const styles = StyleSheet.create({
  scrollDiv: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBox: {
    width: '100%',
  },
  inputBox: {
    borderRadius: sizes[9],
    backgroundColor: colors.ui.inputBg,
    marginTop: sizes[4],
    marginBottom: sizes[4],
  },
});
