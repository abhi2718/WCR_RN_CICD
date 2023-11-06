import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';

export const inputBoxStyle = StyleSheet.create({
  dropdown: {
    paddingVertical: sizes[0],
    borderBottomColor: colors.ui.placeholder,
    borderBottomWidth: 0.5,
  },

  placeholderStyle: {
    fontSize: sizes[3],
    color: colors.ui.placeholder,
    paddingLeft: sizes[3],
  },
  selectedTextStyle: {
    fontSize: sizes[3],
    paddingLeft: sizes[3],
  },
  iconStyle: {
    width: sizes[4],
    height: sizes[4],
  },
});
