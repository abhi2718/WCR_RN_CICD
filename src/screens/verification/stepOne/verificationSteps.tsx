import { StyleSheet } from 'react-native';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';
import { colors } from '../../../infrastructure/theme/colors';
import { sizes } from '../../../infrastructure/theme/sizes';
import { dimensions } from '../../../components/tools';

export const verificationStyle = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: fontWeights.bold,
    color: colors.ui.text,
    marginVertical: sizes[6],
    fontFamily: 'Urbanist-Regular',
  },
  text: {
    fontSize: fontSizes.text,
    color: colors.ui.text,
    marginTop: sizes[5],
    fontFamily: 'Urbanist-Regular',
  },
  btnText: {
    marginLeft: sizes[3],
    fontSize: sizes[3],
    fontWeight: fontWeights.semiBold,
    color: colors.ui.text,
    fontFamily: 'Urbanist-Regular',
  },
  rowView: {
    marginBottom: sizes[1],
  },
  textBox: {
    marginBottom: sizes[2],
    fontFamily: 'Urbanist-Regular',
  },
  footerDiv: {
    paddingBottom: 20,
    paddingTop: 8,
    marginHorizontal: -16,
    paddingHorizontal: 16,
    gap: 15,
    flex: 1,
    justifyContent: 'flex-end',
  },
  subText: {
    fontSize: fontSizes.text,
    marginBottom: sizes[4],
    color: colors.ui.text,
    fontFamily: 'Urbanist-Regular',
  },
  redDot: {
    color: colors.ui.primary,
    fontSize: 8,
    fontFamily: 'Urbanist-Regular',
  },
  optionalText: {
    color: colors.ui.primary,
    fontSize: fontSizes.text,
    fontFamily: 'Urbanist-Regular',
  },
  pointsRow: {
    marginBottom: sizes[2],
  },
  pointText: {
    color: colors.ui.text,
    fontSize: fontSizes.text,
    marginLeft: sizes[3],
    fontFamily: 'Urbanist-Regular',
  },
  footerText: {
    color: colors.ui.text,
    fontSize: fontSizes.text,
    marginVertical: sizes[5],
    fontFamily: 'Urbanist-Regular',
  },
  imageViewProfile: {
    borderRadius: sizes[4],
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.ui.primary,
    // width: dimensions.width,
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
    fontFamily: 'Urbanist-Regular',
  },
});

export const firstModalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.ui.opacity,
    // borderColor: 'red',
    // borderWidth: 2,
  },

  modalView: {
    position: 'relative',
    margin: 0,
    borderRadius: sizes[4],
    paddingTop: sizes[4],
    paddingBottom: sizes[4],
    shadowColor: colors.ui.black,
    width: dimensions.width - sizes[3],
    marginBottom: 14,
    backgroundColor: 'rgba(245, 245, 245, 0.8)',
  },
  modalViewTwo: {
    backgroundColor: colors.ui.white,
  },
  // absolute: {
  //   position: 'absolute',
  //   borderRadius: sizes[4],
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  // },
  text: {
    textAlign: 'center',
    fontSize: sizes[4],
    color: '#000',
    paddingVertical: sizes[2],
    fontFamily: 'Urbanist-Regular',
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
    fontFamily: 'Urbanist-Regular',
  },
});
