import { StyleSheet } from 'react-native';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../infrastructure/theme/fonts';
import { dimensions } from '../../../../../components/tools';
import { theme } from '../../../../../infrastructure/theme';

export const styles = StyleSheet.create({
  editInfoContainer: {
    flex: 1,
    backgroundColor: theme.colors.ui.white,
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
    fontFamily: fonts.body,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.ui.white,
  },
  aboutInput: {
    padding: 16,
    color: '#676161',
    fontSize: fontSizes.text,
    paddingBottom: 30,
    fontFamily: fonts.body,
  },
  charCount: {
    position: 'absolute',
    bottom: 0,
    right: 16,
    color: colors.ui.primary,
    fontSize: fontSizes.text,
    fontFamily: fonts.body,
  },
  fieldName: {
    color: colors.ui.textHead,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.text,
    fontFamily: fonts.body,
  },
  fieldValue: {
    color: '#676161',
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.text,
    width: '100%',
    fontFamily: fonts.body,
  },
  fieldValueContainer: {
    paddingTop: 10,
    borderBottomColor: '#676161',
    borderBottomWidth: 0.4,
  },
  nextArrow: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 0,
    bottom: 8,
  },
  fieldValueText: {
    position: 'absolute',
    right: 20,
    bottom: 6,
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
    padding: 0,
    margin: 0,
    gap: 0,
  },
  optionText: {
    fontSize: 18,
    color: colors.ui.text,
    width: '100%',
    textAlign: 'left',
    paddingHorizontal: 20,
    margin: 0,
    paddingVertical: 12,
    fontFamily: fonts.body,
  },
  cancelButton: {
    borderRadius: 23,
    paddingVertical: 16,
    backgroundColor: colors.ui.primary,
    marginHorizontal: 20,
  },

  initValueTextStyle: {
    color: '#676161',
    marginLeft: -8,
    textAlign: 'left',
    height: 20,
    fontFamily: fonts.body,
  },
  selectedItem: {
    fontSize: 16,
    color: colors.ui.text,
    backgroundColor: colors.bg.secondary,
    fontWeight: 'bold',
    fontFamily: fonts.body,
  },
  selectRow: {
    width: '100%',
    marginTop: -10,
  },

  optionStyle: {
    borderBottomWidth: 0,
    borderColor: 'transparent',
    padding: 0,
    width: dimensions.width,
    marginLeft: -10,
  },
  cancelTextStyle: {
    color: theme.colors.ui.white,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  overlayStyle: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 40,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.ui.white,
    paddingHorizontal: 0,
  },
  selectStyle: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  modalHeading: {
    textAlign: 'center',
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.h5,
    marginVertical: 10,
    fontFamily: fonts.body,
  },
});
