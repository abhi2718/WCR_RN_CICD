import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../../infrastructure/theme';

export const ErrorText = styled.Text`
  color: ${props => props.theme.colors.text.error};
  font-family: ${props => props.theme.fontFamily.roboto};
`;
export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.bg.primary,
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
    marginTop: theme.space[3],
    fontSize: theme.sizes[2],
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fontFamily.roboto,
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
    alignItems: 'center',
    color: theme.colors.text.error,
    fontWeight: `${theme.fontWeights.medium}`,
    fontFamily: theme.fontFamily.roboto,
  },
  emptyText: {
    paddingBottom: 5,
    width: 10,
  },
  socialLogin: {
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


 
  
