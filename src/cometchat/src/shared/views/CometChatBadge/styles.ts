//@ts-ignore
import { StyleSheet } from 'react-native';
import { fonts } from '../../../../../infrastructure/theme/fonts';

const styles = StyleSheet.create({
  badgeStyle: {
    aspectRatio: 1,
    padding: 1,
    opacity: 1,
    justifyContent: 'center',
    fontFamily: fonts.body,
  },
  textStyle: {
    overflow: 'hidden',
    textAlign: 'center',
    opacity: 1,
    fontFamily: fonts.body,
  },
});
export default styles;
