import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { fontWeights, fonts } from '../../infrastructure/theme/fonts';
import { dimensions } from '../../components/tools';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.ui.white,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    width: '100%',
  },
  rowOne: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },
  graphicsImg: {
    height: '100%',
    width: '100%',
    overflow: 'visible',
  },
  rowTwo: {
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    color: colors.ui.text,
    textAlign: 'center',
    fontSize: sizes[6],
    fontWeight: fontWeights.bold,
    marginTop: sizes[3],
    fontFamily: 'Urbanist-Regular',
  },
  subHeading: {
    color: colors.ui.text,
    textAlign: 'center',
    fontSize: sizes[4],
    fontWeight: fontWeights.regular,
    marginTop: sizes[2],
    fontFamily: 'Urbanist-Regular',
  },
  scrollImg: {
    height: sizes[1],
    width: '100%',
    overflow: 'visible',
  },
  primaryBtn: {
    marginHorizontal: 200,
    padding: 250,
    fontSize: 25,
    marginBottom: 40,
    fontFamily: 'Urbanist-Regular',
  },
});
