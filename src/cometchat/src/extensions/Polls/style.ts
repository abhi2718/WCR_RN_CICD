import React from 'react';
import { StyleSheet } from 'react-native';
import { fonts } from '../../../../infrastructure/theme/fonts';

export const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15 },
  textInput: {
    marginTop: 32,
    padding: 8,
    borderBottomWidth: 1,
    fontFamily: fonts.body,
  },
  textInputAnswers: {
    marginTop: 32,
    padding: 8,
    borderBottomWidth: 1,
    fontFamily: fonts.body,
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
    fontFamily: fonts.body,
  },
  errorTextContainer: { flex: 1 },
  errorText: {
    marginStart: 8,
    fontFamily: fonts.body,
  },
  addAnswerButtonContainer: { marginTop: 30, marginBottom: 10 },
});
