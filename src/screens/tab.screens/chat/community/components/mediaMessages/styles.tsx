import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../../infrastructure/theme/sizes';
import { theme } from '../../../../../../infrastructure/theme';

export const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor: theme.colors.ui.white,
  },

  galleryContainer: {
    paddingHorizontal: sizes[3],
    paddingTop: sizes[3],
  },

  galleryImage: {
    width: '31.33%',
    height: 120,
  },

  galleryWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
});
