import {StyleSheet} from 'react-native';
import {dimensions} from '../../../../components/tools';

export const profileStyles = StyleSheet.create({
  container: {
    // flex: 1,
    width: dimensions.width,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputDiv: {
    alignSelf: 'stretch',
    backgroundColor: '#f8f8f9',
    borderRadius: 14,
    height: 56,
    marginTop: 24,
  },
  datePicker: {
    width: '100%',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
  },
  input: {
    alignSelf: 'stretch',
    fontSize: 18,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  spacerStyle: {
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#FEFBFD',
    fontSize: 16,
    textAlign: 'center',
  },
});
