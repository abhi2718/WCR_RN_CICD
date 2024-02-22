import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../components/tools';
import { theme } from '../../../../../infrastructure/theme';

export const styles = StyleSheet.create({
  innerHeight:{ height: 200 },
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    height: dimensions.height / 2 - 20,
  },
  customHobbyConatiner: {
    flex: 1,
    paddingTop: 20,
  },
  inputBox: {
    borderColor: '#000000',
    borderWidth: 1,
    paddingHorizontal: 12,
    width: '100%',
    height: 50,
    borderRadius: 4,
    marginBottom: 20,
  },
  input: {
    fontSize: theme.fontSizes.text,
    width: '75%',
    height: 50,
  },
  addbutton: {
    backgroundColor: theme.colors.ui.primary,
    color: theme.colors.ui.white,
    fontSize: theme.fontSizes.text,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 18,
    overflow: 'hidden',
    fontWeight: theme.fontWeights.bold,
  },
  customChipRow: {
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
});
