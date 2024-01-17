import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: dimensions.width,
    paddingHorizontal: 8,
  },
  headerViewStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
  infoScreenContainer: {
    width: dimensions.width - 16,
  },
  infoScreen: {
    width: '100%',
    height: '100%',
  },
});
