import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    height: dimensions.height / 2 - 100,
  },
  customHobbyConatiner: {
    flex: 1,
  },
});
