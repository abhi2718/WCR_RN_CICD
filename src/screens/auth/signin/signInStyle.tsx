import {Dimensions, StyleSheet} from 'react-native';
import {dimensions} from '../../../components/tools';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
    paddingLeft: 15,
  },
  countStyle: {
    fontSize: 26,
    color: 'red',
  },

  headingText: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto-BlackItalic',
    fontStyle: 'normal',
  },
  emptyText: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    paddingBottom: 5,
    width: 10,
  },
  socialLogin: {
    // flex: 1,
    alignSelf: 'stretch',
    gap: 50,
    marginTop: 20,
  },
  continueText: {
    fontSize: 24,
  },
});
