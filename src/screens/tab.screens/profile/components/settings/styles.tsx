import { StyleSheet } from 'react-native';
import { fontSizes, fonts } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';
import { dimensions } from '../../../../../components/tools';

export const styles = StyleSheet.create({
  wrapper: { height: dimensions.height, width: dimensions.width },
  webViewWrapper:{
    height: dimensions.height - 100,
    width: dimensions.width,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  iconStyle: {
    width: 40,
    height: 30,
  },
  arrowStyle: {
    width: 18,
  },
  text: {
    fontSize: fontSizes.text,
    color: colors.ui.text,
    fontFamily: fonts.body,
  },
});
