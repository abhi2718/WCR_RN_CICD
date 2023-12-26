import { StyleSheet } from 'react-native';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../infrastructure/theme/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  padding16: {
    paddingHorizontal: 16,
  },
  headerText: {
    backgroundColor: colors.bg.secondary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: colors.ui.text,
  },
  itemRow: {
    marginVertical: 5,
    borderBottomColor: colors.ui.disabled,
    borderBottomWidth: 1,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
  modalSelector: {
    borderWidth: 0,
  },
  silderSubText: {
    marginRight: 8,
    color: colors.ui.text,
    fontSize: 16,
  },
  optionContainer: {
    borderRadius: 4,
  },
  optionText: {
    fontSize: 18,
    color: colors.ui.text,
  },
  cancelButton: {
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  selectedItem: {
    marginTop: 10,
    fontSize: 16,
    color: colors.ui.text,
  },
  initValueTextStyle: {
    color: '#B3B3B3',
    marginLeft: -8,
  },
  textColor: {
    color: colors.ui.text,
  },
  multiSelector: {
    marginTop: 10,
  },
  scrollSection: {
    marginBottom: 100,
  },
  optionName: {
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.text,
  },
  selectArrow: {
    width: sizes[2],
    height: sizes[2],
  },
});
