import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 140,
    height: 200,
    marginRight: 10,
    borderRadius: 20,
  },
  imageLeft: {
    transform: [{ rotate: '-10deg' }],
  },
  imageRight: {
    transform: [{ rotate: '10deg' }],
  },
});
