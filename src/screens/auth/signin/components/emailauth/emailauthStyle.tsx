import React from 'react';
import {theme} from '../../../../../infrastructure/theme';
import {StyleSheet} from 'react-native';

export const EmailAuthScreenStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.bg.primary,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
    paddingLeft: 15,
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: '500',
  },

  emailInputBox: {
    flex: 1,
    color: '#333',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(35, 35, 35, 0.03)', // Grey background color
    borderRadius: 62,
    paddingHorizontal: 16,
    marginVertical: 10,
    width: '100%',
    marginTop: 100,
  },
});
