import { StyleSheet } from 'react-native';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../infrastructure/theme/fonts';

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
  },
  initValueTextStyle: {
    color: 'black',
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
});
