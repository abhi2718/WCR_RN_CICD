//@ts-ignore
import { StyleSheet } from 'react-native';
import { fonts } from '../../../../../infrastructure/theme/fonts';

export const Styles = StyleSheet.create({
  containerStyle: {
    overflow: 'hidden',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerViewStyle: {
    position: 'absolute',
  },
  avatarStyle: {
    height: '100%',
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
  },
  textStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: fonts.body,
  },
});
