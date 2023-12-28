import { StyleSheet } from 'react-native';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { dimensions } from '../../../../../components/tools';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  padding16: {
    paddingHorizontal: 16,
  },
  heading: {
    height: 40,
    backgroundColor: colors.bg.secondary,
    paddingHorizontal: 16,
    paddingVertical: 0,
    color: colors.ui.textHead,
    marginHorizontal: -16,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.text,
    marginVertical: 10,
  },
  headerText: {
    color: colors.ui.textHead,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.text,
  },
  questionMarkIcon: {
    width: 25,
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
    width: '100%',
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
    width: '100%',
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
    textAlign: 'left',
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
  selectRow: {
    width: '100%',
  },
  selectArrow: {
    position: 'absolute',
    right: 0,
    width: sizes[2],
    height: sizes[2],
  },
});
