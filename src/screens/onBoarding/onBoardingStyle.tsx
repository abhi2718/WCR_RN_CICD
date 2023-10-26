import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 1,
    flex: 1,
    width: '100%',
  },
  rowOne: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },
  graphicsImg: {
    width: '100%',
  },
  rowTwo: {
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    color: '#2A2827',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 20,
  },
  subHeading: {
    color: '#2A2827',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 15,
  },
  scrollImg: {
    height: 8,
  },
});
