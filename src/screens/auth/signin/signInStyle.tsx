import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../../infrastructure/theme';
import {sizes} from '../../../infrastructure/theme/sizes';
import {colors} from '../../../infrastructure/theme/colors';

export const ErrorText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  font-family: ${(props) => props.theme.fontFamily.roboto};
`;
export const styles = StyleSheet.create({
  scrollDiv: {
    flex: 1,
    paddingBottom: sizes[6],
  },

  emailInputBox: {
    flex: 1,
    color: colors.ui.text,
  },
  emailIconStyle: {
    width: sizes[5],
    height: sizes[5],
    marginRight: sizes[2],
  },
  inputContainerr: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.ui.tertiary,
    borderRadius: sizes[9],
    paddingHorizontal: sizes[3],
    marginVertical: sizes[2],
  },
});
