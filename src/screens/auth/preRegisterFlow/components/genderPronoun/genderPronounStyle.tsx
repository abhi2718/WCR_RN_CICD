import {StyleSheet} from 'react-native';
import {dimensions} from '../../../../../components/tools';
export const genderStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerView: {
    flex: 1,
  },

  rowHeader: {
    width: dimensions.width, 
    maxWidth: '100%',
  },
  subHeader: {
    color: '#49454F',
    fontWeight: '700',
    fontSize: 24,
    marginTop: 10,
  },
  radioButtonContainer: {
    // borderColor: 'red',
    // borderWidth: 2,
    marginTop: 25,
  },
  btnText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  rowView: {
    marginBottom: 10,
  },
});
