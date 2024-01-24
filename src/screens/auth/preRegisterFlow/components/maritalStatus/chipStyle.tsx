import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { fontSizes, fonts } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';
import { dimensions } from '../../../../../components/tools';

export const ChipStyle = StyleSheet.create({
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
    marginTop: sizes[5],
    marginBottom: sizes[3],
    fontFamily: fonts.body,
  },
  chipRow: {
    gap: sizes[1],
    flexWrap: 'wrap',
  },
  chip: {
    margin: 0,
    fontSize: fontSizes.text,
    width: 'auto',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: sizes[12],
    borderColor: '#a5a4a6',
    padding: 0,
    fontFamily: fonts.body,
  },
  chipSelected: {
    margin: 0,
    fontSize: fontSizes.text,
    color: colors.ui.placeholder,
    width: 'auto',
    backgroundColor: 'transparent',
    borderColor: colors.ui.primary,
    borderWidth: 2,
    borderRadius: sizes[12],
    padding: 0,
    fontFamily: fonts.body,
  },
});
