import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { fontSizes, fonts } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';
import { dimensions } from '../../../../../components/tools';

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
    fontFamily: 'Urbanist-Regular',
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
    fontFamily: 'Urbanist-Regular',
  },
});
