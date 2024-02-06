import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../../../components/tools';
import { fontSizes } from '../../../../../../../infrastructure/theme/fonts';

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
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSizes.h5,
  },
  subHeading: {
    textAlign: 'center',
  },
});
