import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../../infrastructure/theme/sizes';
import { colors } from '../../../infrastructure/theme/colors';
import { fontSizes, fonts } from '../../../infrastructure/theme/fonts';

export const ErrorText = styled.Text`
  color: ${colors.ui.primary};
`;
export const styles = StyleSheet.create({
  errorText: {
    color:colors.ui.error
  },
  wrapper: {
    flex:1
  },
  scrollDiv: {
    flex: 1,
    paddingBottom: sizes[6],
  },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emailInputBox: {
    flex: 1,
    fontSize: fontSizes.text,
    color: colors.ui.text,
    paddingVertical: sizes[3],
    fontFamily: fonts.body,
  },
  emailIconStyle: {
    height: sizes[3] + 1.5,
    width: sizes[4],
    marginRight: sizes[2],
  },
  inputContainerr: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.ui.inputBg,
    borderRadius: sizes[9],
    paddingHorizontal: sizes[3],
    marginTop: sizes[0],
    marginBottom: sizes[0],
  },
});
