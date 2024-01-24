import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { fontSizes, fonts } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';

export const uploadedPic = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  arrow: {
    height: sizes[4],
  },
  logo: {
    marginLeft: -sizes[13],
    width: sizes[11],
    height: sizes[8],
    overflow: 'visible',
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: '700',
    color: colors.ui.text,
    marginTop: sizes[6],
    fontFamily: fonts.body,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizes[5],
  },
  profilePic: {
    width: sizes[12] * 6,
    height: sizes[12] * 6,
    borderRadius: (sizes[12] * 6) / 2,
  },
  editIcon: {
    width: sizes[12],
    height: sizes[12],
    backgroundColor: '#fff5f7',
    borderRadius: sizes[12] / 2,
    position: 'absolute',
    bottom: sizes[9],
    right: sizes[7],
  },
  userDetails: {
    alignItems: 'center',
    gap: sizes[1],
    marginTop: sizes[2],
  },
  name: {
    fontWeight: '700',
    fontSize: fontSizes.h5,
    color: colors.ui.text,
    fontFamily: fonts.body,
  },
  degree: {
    fontWeight: '500',
    fontSize: fontSizes.title,
    color: colors.ui.text,
    fontFamily: fonts.body,
  },
  loaction: {
    fontWeight: '600',
    fontSize: fontSizes.button,
    color: colors.ui.text,
    fontFamily: fonts.body,
  },
});
