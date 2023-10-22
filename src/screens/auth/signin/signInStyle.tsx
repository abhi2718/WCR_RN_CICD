import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../../infrastructure/theme';

export const ErrorText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  font-family: ${(props) => props.theme.fontFamily.roboto};
`;
export const styles = StyleSheet.create({
  scrollDiv: {
    flex: 1,
    paddingBottom: 30,
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
  inputContainerr: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(35, 35, 35, 0.03)',
    borderRadius: 62,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
});
