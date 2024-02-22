import { StyleSheet, Platform } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { fontSizes, fonts } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';
import { dimensions } from '../../../../../components/tools';
import { theme } from '../../../../../infrastructure/theme';

export const addPicture = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: '700',
    color: colors.ui.text,
    marginTop: sizes[6],
    fontFamily: fonts.body,
  },
  text: {
    fontSize: fontSizes.text,
    color: colors.ui.text,
    marginTop: sizes[0],
    fontFamily: fonts.body,
  },
  row: {
    width: '100%',
    marginTop: sizes[5],
  },
  imageViewProfile: {
    borderRadius: sizes[4],
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.ui.primary,
    width: dimensions.width / 1.7,
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.width / 1.65,
  },
  profilePic: {
    borderRadius: sizes[4],
    paddingTop: sizes[4],
    width: dimensions.width / 1.65,
    height: dimensions.width / 1.65,
  },
  imageView: {
    borderRadius: sizes[4],
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.ui.primary,
    height: dimensions.width / 3.5,
    width: dimensions.width / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    borderRadius: sizes[4],
    paddingTop: sizes[4],
    width: dimensions.width / 3.5,
    height: dimensions.width / 3.5,
  },
  imageIcon: {
    width: sizes[8],
    height: sizes[6],
  },

  columnOne: {
    gap: sizes[3],
  },
  deletImg: {
    position: 'absolute',
    top: -sizes[7],
    backgroundColor: '#fff',
    right: sizes[3],
    width: sizes[4],
    height: sizes[4],
    padding: sizes[0],
    borderRadius: sizes[2],
  },
  profilePicText: {
    position: 'absolute',
    bottom: sizes[1],
    backgroundColor: colors.ui.primary,
    color: colors.ui.white,
    left: sizes[1],
    paddingHorizontal: sizes[1],
    paddingVertical: sizes[0],
    fontSize: sizes[3],
    borderRadius: sizes[3],
    overflow: 'hidden',
    borderColor: colors.ui.white,
    borderWidth: 1,
    fontFamily: fonts.body,
  },
});

export const modalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  backButtonWrapper: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    marginLeft: -40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowContainer: {
    height: sizes[11],
    width: sizes[11],
    justifyContent: 'center',
  },
  arrow: {
    height: sizes[4],
    width: sizes[4],
  },
  logo: {
    marginLeft: -25,
    width: sizes[11],
    height: sizes[8],
    overflow: 'visible',
  },
  modalContent: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    padding: sizes[4],
    borderRadius: sizes[1],
  },
  backButtonWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    ...Platform.select({
      ios: {
        marginTop: sizes[9] + sizes[4],
      },
    }),
  },
  content: {
    flex: 1,
    width: '100%',
    marginTop: sizes[4],
    gap: sizes[3],
    justifyContent: 'space-between',
  },
  subText: {
    textAlign: 'center',
    color: colors.ui.text,
    fontSize: fontSizes.text,
    marginBottom: sizes[1],
    fontWeight: theme.fontWeights.medium,
  },
  subTextImg: {
    textAlign: 'center',
    color: colors.ui.text,
    fontSize: fontSizes.text,
    paddingHorizontal: sizes[5],
    marginTop: sizes[5],
    fontWeight: theme.fontWeights.medium,
  },
  verificationStepTwoSelfieImg: {
    width: '100%',
    height: 400,
  },
  subTextInner: {
    color: theme.colors.ui.primary,
    fontWeight: theme.fontWeights.bold,
  },
  picture: {
    flex: 1,
    borderRadius: sizes[4],
    width: '100%',
  },
  button: {
    marginBottom: sizes[1],
  },
});
