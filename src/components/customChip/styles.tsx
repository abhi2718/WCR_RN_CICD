import { StyleSheet } from 'react-native';
import { theme } from '../../infrastructure/theme';

export const styles = StyleSheet.create({
  chip: {
    borderWidth: 2,
    borderColor: theme.colors.ui.primary,
    borderRadius: theme.sizes[12],
    padding: 8,
  },
  crossIcon: {
    width: 10,
    height: 10,
  },
  text: {
    fontSize: theme.fontSizes.text,
    color: theme.colors.ui.placeholder,
  },
});
