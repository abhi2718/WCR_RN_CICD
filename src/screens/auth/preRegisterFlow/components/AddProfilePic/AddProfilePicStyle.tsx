import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { fontSizes, fonts } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';
import { dimensions } from '../../../../../components/tools';

export const addPicture = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
    marginTop: sizes[0],
  },
  row: {
    width: '100%',
    marginTop: sizes[5],
  },
  imageViewProfile: {
    borderRadius: sizes[4],
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.ui.primary,
    width: dimensions.width / 1.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    borderRadius: sizes[4],
    paddingTop: 20,
    width: dimensions.width / 1.65,
    height: dimensions.width / 1.65,
  },
  imageView: {
    borderRadius: sizes[4],
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.ui.primary,
    height: sizes[6] * 4,
    width: dimensions.width / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    borderRadius: sizes[4],
    paddingTop: 20,
    width: dimensions.width / 3.5,
    height: dimensions.width / 3.5,
  },
  imageIcon: {
    width: 35,
    height: 26,
  },

  columnOne: {
    gap: 15,
  },
});
