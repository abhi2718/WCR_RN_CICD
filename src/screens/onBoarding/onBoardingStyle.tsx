import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { fontWeights, fonts } from '../../infrastructure/theme/fonts';
import { dimensions } from '../../components/tools';

export const styles = StyleSheet.create({
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
  },
  heading: {
    color: colors.ui.text,
    textAlign: 'center',
    fontSize: sizes[6],
    fontWeight: fontWeights.bold,
    marginTop: sizes[3],
    fontFamily: fonts.body,
  },
  subHeading: {
    color: colors.ui.text,
    textAlign: 'center',
    fontSize: sizes[4],
    fontWeight: fontWeights.regular,
    marginTop: sizes[2],
  },
  scrollImg: {
    height: sizes[1],
  },
});
