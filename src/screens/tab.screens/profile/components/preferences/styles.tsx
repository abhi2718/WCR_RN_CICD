import { StyleSheet } from 'react-native';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { dimensions } from '../../../../../components/tools';
import { theme } from '../../../../../infrastructure/theme';

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
    paddingVertical: 0,
    color: colors.ui.textHead,
    // marginHorizontal: -16,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.text,
    marginVertical: 10,
    fontFamily: fonts.body,
  },
  headerText: {
    color: colors.ui.textHead,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.text,
    fontFamily: fonts.body,
    paddingHorizontal: 16,
  },
  questionMarkIcon: {
    width: 25,
    marginRight: 16,
  },
  itemRow: {
    marginVertical: 5,
    borderBottomColor: colors.ui.disabled,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
    fontFamily: fonts.body,
  },
  modalSelector: {
    borderWidth: 0,
    width: '100%',
  },
  silderSubText: {
    marginRight: 8,
    color: colors.ui.text,
    fontSize: 16,
    fontFamily: fonts.body,
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
  degreeTypeWrapper: {
    marginTop: 10,
    marginBottom: 8,
    width: dimensions.width - 32,
  },
  degreeTypeFont: {
    color: '#676161',
    marginLeft: -8,
    textAlign: 'left',
    height: 20,
    fontFamily: fonts.body,
    fontSize: theme.fontSizes.text,
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
  textColor: {
    color: colors.ui.text,
    fontFamily: fonts.body,
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
    fontFamily: fonts.body,
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
  optionStyle: {
    borderBottomWidth: 0,
    borderColor: 'transparent',
    padding: 0,
    width: dimensions.width,
    marginLeft: -10,
  },
  cancelTextStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontFamily: fonts.body,
  },
  overlayStyle: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 40,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
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
