import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../../infrastructure/theme/sizes';
import { dimensions } from '../../../../../../components/tools';

export const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor:'#fff'
  },

  galleryContainer: {
    paddingHorizontal: sizes[3],
    paddingTop: sizes[3],
  },

  galleryImage: {
    width: (dimensions.width - 48) / 2,
    height: 140,
  },
});
