import { StyleSheet } from 'react-native';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
} from '../../../../../infrastructure/theme/fonts';

export const styles = StyleSheet.create({
  editInfoContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ph16: {
    paddingHorizontal: 16,
  },
  headingText: {
    backgroundColor: colors.bg.secondary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.text,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  aboutInput: {
    padding: 16,
    color: '#B3B3B3',
    fontSize: fontSizes.text,
    paddingBottom: 30,
  },
  charCount: {
    position: 'absolute',
    bottom: 0,
    right: 16,
    color: colors.ui.primary,
    fontSize: fontSizes.text,
  },
  fieldName: {
    color: colors.ui.textHead,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.text,
  },
  fieldValue: {
    color: '#B3B3B3',
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.text,
    width: '100%',
  },
  fieldValueContainer: {
    paddingTop: 10,
    borderBottomColor: '#B3B3B3',
    borderBottomWidth: 0.4,
  },
  nextArrow: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 0,
    bottom: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
  modalSelector: {
    borderWidth: 0,
    width: '100%',
  },
  optionContainer: {
    borderRadius: 4,
  },
  optionText: {
    fontSize: 18,
    color: colors.ui.text,
    width: '100%',
  },
  cancelButton: {
    borderRadius: 4,
    backgroundColor: '#eee',
  },

  initValueTextStyle: {
    color: '#B3B3B3',
    marginLeft: -8,
    textAlign: 'left',
    height: 20,
  },
  selectedItem: {
    marginTop: 10,
    fontSize: 16,
    color: colors.ui.text,
  },
  selectRow: {
    width: '100%',
    marginTop: -10,
  },
});
