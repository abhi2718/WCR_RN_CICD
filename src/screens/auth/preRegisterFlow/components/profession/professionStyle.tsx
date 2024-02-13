import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';
import { colors } from '../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fonts,
} from '../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../infrastructure/theme/sizes';

export const profession = StyleSheet.create({
  placeHolderStyle:{
    color: 'black',
    fontSize: 16,
    fontWeight:'400'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  arrow: {
    height: sizes[4],
  },
  logo: {
    marginLeft: -5,
    width: sizes[11],
    height: sizes[8],
    overflow: 'visible',
  },
  skipBtn: {
    fontSize: 20,
    color: colors.ui.text,
    fontFamily: fonts.body,
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: '700',
    color: colors.ui.text,
    marginVertical: sizes[6],
    fontFamily: fonts.body,
  },
  text: {
    fontSize: fontSizes.text,
    color: colors.ui.text,
    marginTop: sizes[5],
    fontFamily: fonts.body,
  },
  innerView: {
    flex: 1,
  },
  inputField: {
    borderColor: 'red',
    borderWidth: 2,
    background: 'white',
    fontFamily: fonts.body,
  },
  rowHeader: {
    width: dimensions.width,
    maxWidth: '100%',
    fontFamily: fonts.body,
  },
  label: {
    backgroundColor: 'white',
    left: 3,
    top: 20,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingRight: 6,
    paddingLeft: 16,
    width: dimensions.width - 26,
  },
});
