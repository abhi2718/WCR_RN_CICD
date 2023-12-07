import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
} from '../../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';

export const searchStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header: {
    paddingHorizontal: 16,
    borderBottomColor: 'rgba(35, 35, 35, 0.20)',
    paddingBottom: 4,
    borderBottomWidth: 1,
  },
  searchBox: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: fontSizes.title,
    backgroundColor: colors.ui.inputBg,
  },
  crossImg: {
    width: 15,
    height: 15,
    marginBottom: 10,
  },
  row: {
    borderBottomColor: colors.ui.placeholder,
    borderBottomWidth: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  firstName: {
    fontSize: fontSizes.title,
    fontWeight: fontWeights.bold,
  },
  ctiy: {
    fontSize: fontSizes.text,
    color: colors.ui.placeholder,
  },
  content: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    width: '100%',
    padding: sizes[3],
    justifyContent: 'space-around',
  },
  subHeading: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
  },
  subHeadingInner: {
    color: colors.ui.text,
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.bold,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  text: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    textAlign: 'center',
    fontSize: fontSizes.button,
  },
  pendingIcon: {
    width: sizes[12] * 2,
    height: sizes[12] * 2 - 10,
  },
});
