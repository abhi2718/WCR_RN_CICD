import {StyleSheet} from 'react-native';
import {dimensions} from '../../../../components/tools';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerView: {
    flex: 1,
  },

  rowHeader: {
    width: dimensions.width,
    maxWidth: '100%',
  },
  subHeader: {
    color: '#49454F',
    fontWeight: '700',
    fontSize: 24,
    marginTop: 10,
  },

  datePickerContainer: {
    flex: 1,
    position: 'relative',
    width: '100%',
  },
  openButton: {
    position: 'absolute',
    right: 10,
    top: 12,
    zIndex: 1,
  },
});
