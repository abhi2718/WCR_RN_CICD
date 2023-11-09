import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { fontSizes, fonts } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';

export const addPicture = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  arrow: {
    height: sizes[4],
  },
  logo: {
    marginLeft: -50,
    width: sizes[11],
    height: sizes[8],
    overflow: 'visible',
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: '700',
    color: colors.ui.text,
    marginTop: sizes[6],
  },
  text: {
    fontSize: fontSizes.text,
    color: colors.ui.text,
    marginTop: sizes[5],
  },
  imageContainer: {
    marginTop: sizes[5],
    borderColor: colors.ui.placeholder,
    borderRadius: sizes[4],
    borderWidth: 1,
    height: sizes[12] * 4,
    justifyContent: 'center',
    alignItemsc: 'center',
  },
});
