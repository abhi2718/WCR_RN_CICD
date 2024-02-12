import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../infrastructure/theme/fonts';
import { colors } from '../../../infrastructure/theme/colors';
import { sizes } from '../../../infrastructure/theme/sizes';
import { dimensions } from '../../../components/tools';

export const verificationStyle = StyleSheet.create({
  backButtonWrapper: {
    padding:16
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: fontWeights.bold,
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
  btnText: {
    marginLeft: sizes[3],
    fontSize: sizes[3],
    fontWeight: fontWeights.semiBold,
    color: colors.ui.text,
    fontFamily: fonts.body,
  },
  rowView: {
    marginBottom: sizes[1],
  },
  textBox: {
    marginBottom: sizes[0],
    fontFamily: fonts.body,
  },
  footerDiv: {
    paddingBottom: 20,
    paddingTop: 8,
    marginHorizontal: -16,
    paddingHorizontal: 16,
    gap: 15,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  white: {
    backgroundColor: '#fff',
    paddingTop: 10
  },
  subText: {
    fontSize: fontSizes.text,
    marginBottom: sizes[4],
    color: colors.ui.text,
    fontFamily: fonts.body,
  },
  redDot: {
    color: colors.ui.primary,
    fontSize: 8,
    fontFamily: fonts.body,
  },
  optionalText: {
    color: colors.ui.primary,
    fontSize: fontSizes.text,
    fontFamily: fonts.body,
  },
  pointsRow: {
    marginBottom: sizes[2],
  },
  pointText: {
    color: colors.ui.text,
    fontSize: fontSizes.text,
    marginLeft: sizes[3],
    fontFamily: fonts.body,
  },
  footerText: {
    color: colors.ui.text,
    fontSize: fontSizes.text,
    marginVertical: sizes[5],
    fontFamily: fonts.body,
  },
  imageViewProfile: {
    borderRadius: sizes[4],
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.ui.primary,
    justifyContent: 'center',
    height: 400,
    alignItems: 'center',
  },
  imageIcon: {
    width: sizes[8],
    height: sizes[6],
  },
  uploadBtn: {
    borderColor: colors.ui.primary,
    paddingVertical: 15,
    borderWidth: 2,
    backgroundColor: colors.bg.secondary,
    borderRadius: 28,
    marginVertical: 20,
  },
  uploadBtnText: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.text,
    textAlign: 'center',
    color: colors.ui.primary,
    fontFamily: fonts.body,
  },
});

export const firstModalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.ui.opacity,
  },
  modalView: {
    position: 'relative',
    margin: 0,
    borderRadius: sizes[4],
    shadowColor: colors.ui.black,
    width: dimensions.width - sizes[3],
    marginBottom: 14,
    backgroundColor: 'rgba(245, 245, 245, 0.8)',
  },
  modalViewTwo: {
    backgroundColor: colors.ui.white,
  },
  text: {
    textAlign: 'center',
    fontSize: sizes[4],
    color: '#000',
    paddingVertical: sizes[2],
    fontFamily: fonts.body,
  },
  borderView: {
    borderBottomWidth: 0.5,
    marginVertical: 1,
    borderBottomColor: colors.ui.placeholder,
  },
  backBtnText: {
    color: colors.ui.text,
    textAlign: 'center',
    fontSize: sizes[4],
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },
});
