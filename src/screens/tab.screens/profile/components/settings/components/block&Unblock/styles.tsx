import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
} from '../../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { theme } from '../../../../../../../infrastructure/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  rowOne: {
    // borderColor: 'red',
    // borderWidth: 1,
  },
  text: {
    fontWeight: fontWeights.semiBold,
    color: colors.ui.text,
    fontSize: fontSizes.text,
  },
  chip: {
    borderColor: colors.ui.primary,
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },

  chipText: {
    marginRight: 10,
    fontWeight: fontWeights.semiBold,
    color: colors.ui.text,
    fontSize: fontSizes.button,
  },
  chipImage: {
    width: 10,
    height: 10,
  },
  rowWrap: {
    flexWrap: 'wrap',
  },
  blockUserWrapper: {
    paddingVertical: 8,
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 0.5,
  },
  blockUserAvatar: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  blockUserText: {
    fontSize: 16,
    fontWeight: theme.fontWeights.bold,
    textTransform: 'capitalize',
    color: theme.colors.ui.text,
  },
  blockedText: {
    fontSize: 12,
    fontWeight: theme.fontWeights.regular,
    lineHeight: 16,
    color: theme.colors.ui.textAccent,
  },
  blockedButton: {
    backgroundColor: theme.colors.ui.primary,
    color: theme.colors.ui.white,
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  blockButtonText: {
    fontSize: 12,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.ui.white,
    textTransform: 'uppercase',
  },
  blockedListText: {
    fontSize: 16,
    lineHeight: 27,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.ui.text,
    marginTop: 16,
    marginBottom: 6,
  },
});
