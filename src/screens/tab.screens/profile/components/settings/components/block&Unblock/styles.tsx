import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
} from '../../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../../infrastructure/theme/colors';

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
});
