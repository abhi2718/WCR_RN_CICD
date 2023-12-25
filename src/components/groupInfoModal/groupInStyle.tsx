import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { dimensions } from '../tools';
import { fontSizes, fontWeights } from '../../infrastructure/theme/fonts';

export const modalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ui.opacity,
  },
  modalView: {
    justifyContent: 'space-between',
    margin: sizes[5],
    backgroundColor: 'white',
    borderRadius: sizes[4],
    paddingTop: sizes[5],
    paddingBottom: sizes[4],
    paddingHorizontal: sizes[3],
    shadowColor: colors.ui.black,
    // height: dimensions.height - 300,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: sizes[0],
    elevation: sizes[0],
  },
  heading: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.h5,
    color: colors.ui.text,
    marginBottom: sizes[4],
    textTransform: 'uppercase',
  },
  subHeading: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.title,
    color: colors.ui.text,
    marginBottom: sizes[4],
  },
  row: {
    gap: sizes[1],
    width: '100%',
    marginVertical: sizes[1],
  },
  text: {
    color: colors.ui.text,
    fontSize: sizes[3],
    flex: 1,
  },
  icon: {
    width: sizes[5],
    height: sizes[5],
    marginRight: sizes[2],
  },
  footerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: sizes[4],
    marginVertical: sizes[3],
    color: colors.ui.black,
  },
});
