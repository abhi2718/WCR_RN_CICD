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
  footerText: {
    fontSize: 16,
  },
  linkText: {
    fontSize: 16,
    color: '#FA5672',
    marginLeft: 5,
    fontWeight: 'bold',
  },


  emailInputBox: {
    flex: 1,
    color: '#333',
  },

  emailIconStyle: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(35, 35, 35, 0.03)', // Grey background color
    borderRadius: 62,
    paddingHorizontal: 16,
    marginVertical: 10,
    width: '100%',
    marginTop: 100,
  },
});


 
  
