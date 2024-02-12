import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../../../components/tools';
import { fontSizes } from '../../../../../../../infrastructure/theme/fonts';
import { theme } from '../../../../../../../infrastructure/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  wheelStyle: {
    width: dimensions.width / 2 - 32,
    backgroundColor: '#fff',
    height: dimensions.height / 2,
  },
  closeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '80%',
  },
  SwitchSelector: { width: 80, marginRight: 20, marginBottom: 20 },
  colOne: {
    // borderColor: 'red',
    // borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: fontSizes.h5,
    fontWeight: theme.fontWeights.semiBold,
  },
  subHeading: {
    textAlign: 'center',
    fontFamily: theme.fontFamily.body,
    fontWeight: theme.fontWeights.semiBold,
    fontSize: theme.fontSizes.h5,
  },
  hrLine: {
    borderColor: '#D9D9D9',
    borderWidth: 0.8,
    position: 'absolute',
    height: 200,
    top: 30,
  },
});
