import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../../infrastructure/theme/sizes';
import { theme } from '../../../../../../infrastructure/theme';
import { dimensions } from '../../../../../../components/tools';

export const styles = StyleSheet.create({
  wrapper:{ height: 400 },
  container: {
    height: 500,
    backgroundColor: theme.colors.ui.white,
  },

  galleryContainer: {
    paddingHorizontal: sizes[3],
    paddingTop: sizes[3],
  },

  galleryImage: {
    width: (dimensions.width - 32) / 3,
    height: 120,
  },

  galleryWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginVertical: 4,
  },
});
