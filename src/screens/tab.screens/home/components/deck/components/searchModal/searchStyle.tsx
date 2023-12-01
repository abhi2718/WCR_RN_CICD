import { StyleSheet } from 'react-native';
import { fontSizes } from '../../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../../infrastructure/theme/colors';

export const searchStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchBox: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: fontSizes.title,
  },
  crossImg: {
    width: 20,
    height: 20,
    marginBottom: 10,
  },
  row: {
    marginBottom: 10,
  },
  firstName: {
    fontSize: fontSizes.title,
  },
  ctiy: {
    fontSize: fontSizes.text,
    color: colors.ui.placeholder,
  },
});
