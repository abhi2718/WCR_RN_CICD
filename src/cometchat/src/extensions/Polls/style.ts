import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15 },
  textInput: {
    marginTop: 32,
    padding: 8,
    borderBottomWidth: 1,
    fontFamily: 'Urbanist-Regular',
  },
  textInputAnswers: {
    marginTop: 32,
    padding: 8,
    borderBottomWidth: 1,
    fontFamily: 'Urbanist-Regular',
  },
  errorContainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 5,
  },
  errorImageContainer: {
    padding: 8,
    borderRadius: 100,
  },
  errorImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  errorTextTitle: {
    marginStart: 8,
    fontFamily: 'Urbanist-Regular',
  },
  errorTextContainer: { flex: 1 },
  errorText: {
    marginStart: 8,
    fontFamily: 'Urbanist-Regular',
  },
  addAnswerButtonContainer: { marginTop: 30, marginBottom: 10 },
});
