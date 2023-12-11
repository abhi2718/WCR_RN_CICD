import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  picWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
  modalSelector: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
  },
  optionContainer: {
    borderRadius: 4,
  },
  optionText: {
    fontSize: 18,
    color: 'blue',
  },
  cancelButton: {
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  selectedItem: {
    marginTop: 10,
    fontSize: 16,
  },
  initValueTextStyle: {
    color: 'black',
  },
});
