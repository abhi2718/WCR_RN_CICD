import {StyleSheet} from 'react-native';

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
  viewDiv: {
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  headingText: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto-BlackItalic',
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
    alignItems: 'center',
  },
  emptyText: {
    paddingBottom: 5,
    width: 10,
  },
  socialLogin: {
    // flex: 1,
    alignSelf: 'stretch',
    gap: 50,
    marginTop: 20,
  },

  footerText: {
    textAlign: 'center',
    fontSize: 16,
  },
  linkText: {
    fontSize: 16,
    color: '#FA5672',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
