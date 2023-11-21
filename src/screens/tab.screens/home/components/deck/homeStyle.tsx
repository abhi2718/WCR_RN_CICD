import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: dimensions.width,
    padding: 8,
  },
  headerViewStyle: {
    height: 40,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
  iconStyle: {
    height: 20,
    width: 20,
  }
});
