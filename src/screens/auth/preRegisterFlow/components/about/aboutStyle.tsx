import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { fontSizes, fonts } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';


export const AboutStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    height: '90%',
  },

  arrow: {
    height: sizes[4],
  },
  logo: {
    marginLeft: -5,
    width: sizes[11],
    height: sizes[8],
    overflow: 'visible',
  },

  charCount: {
    position: 'absolute',
    bottom: 0,
    right: 16,
    color: colors.ui.primary,
    fontSize: fontSizes.text,
    fontFamily: fonts.body,
  },
  skipBtn: {
    fontSize: sizes[4],
    color: colors.ui.text,
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: '700',
    color: colors.ui.text,
    marginTop: sizes[6],
    marginBottom: sizes[3],
    fontFamily: fonts.body,
  },
  input: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#000',
    paddingVertical: sizes[4],
    paddingHorizontal: sizes[2],
    fontSize: sizes[3],
    letterSpacing: 0.1,
    borderRadius: sizes[4],
    height: sizes[9] * 6,
    fontFamily: fonts.body,
  },
});
