import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../../../components/tools';
import {
  fontSizes,
  fontWeights,
} from '../../../../../../../infrastructure/theme/fonts';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';
import { colors } from '../../../../../../../infrastructure/theme/colors';

export const styles = StyleSheet.create({
  lottieStyle: {
    width: dimensions.width,
    height: 310,
    position: 'absolute',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  hrLine: {
    borderBottomColor: 'rgba(35, 35, 35, 0.20)',
    borderBottomWidth: 0.5,
    width: dimensions.width,
    marginLeft: -16,
    marginTop: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    position: 'relative',
  },
  matchBgImgOne: {
    position: 'absolute',
    zIndex: 10,
    width: 50,
    height: 50,
    left: 0,
    top: -50,
  },
  matchBgImgTwo: {
    position: 'absolute',
    zIndex: 10,
    width: 50,
    height: 50,
    right: 0,
    bottom: -60,
    transform: [{ rotate: '-220deg' }],
  },
  image: {
    width: 170,
    height: 250,
    backgroundColor: 'rgba(255, 51, 51, 0.07)',
    borderRadius: 12,
  },
  imageLeft: {
    transform: [{ rotate: '-10deg' }],
  },
  imageRight: {
    transform: [{ rotate: '10deg' }],
  },
  footerContainer: {},
  itsAMatchText: {
    width: '100%',
    height: 50,
  },
  subText: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.text,
    color: 'rgba(35, 35, 35, 0.70)',
    textAlign: 'center',
    marginTop: 12,
    fontFamily: 'Urbanist-Regular',
  },
  keepSwiping: {
    backgroundColor: colors.bg.secondary,
    borderRadius: 28,
    overflow: 'hidden',
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
    borderWidth: 1,
    borderColor: colors.ui.primary,
    paddingVertical: 15,
    color: colors.ui.primary,
    fontWeight: fontWeights.bold,
  },
});
