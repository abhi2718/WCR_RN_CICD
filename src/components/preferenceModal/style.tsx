import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../infrastructure/theme/fonts';
import { dimensions } from '../tools';
export const modalStylePreference = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ui.opacity,
  },
  modalView: {
    justifyContent: 'space-between',
    margin: sizes[5],
    backgroundColor: 'white',
    borderRadius: sizes[4],
    paddingTop: sizes[5],
    paddingBottom: sizes[4],
    paddingHorizontal: sizes[3],
    shadowColor: colors.ui.black,
    width: dimensions.width - 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: sizes[0],
    elevation: sizes[0],
  },
  heading: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.h5,
    color: colors.ui.text,
    marginBottom: sizes[4],
    fontFamily: fonts.body,
  },
  subHeading: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.title,
    color: colors.ui.text,
    marginBottom: sizes[4],
  },
  row: {
    gap: sizes[1],
    width: '100%',
    marginVertical: sizes[1],
  },
  text: {
    color: colors.ui.text,
    fontSize: sizes[3],
    flex: 1,
    fontFamily: fonts.body,
  },
  icon: {
    width: sizes[4],
    height: sizes[4],
    marginRight: sizes[2],
  },
  headericon: {
    width: sizes[4],
    height: sizes[4],
    marginTop: -10,
  },
});
