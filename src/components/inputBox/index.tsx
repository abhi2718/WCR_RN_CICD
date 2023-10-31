import React from 'react';
import styled from 'styled-components/native'; // Import from styled-components/native
import { InputProps } from '../../types/components/input.type';
import { TextInput } from 'react-native-paper';
import { colors } from '../../infrastructure/theme/colors';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';
import { inputBoxStyle } from './inputBoxStyle';
const ChildContainer = styled(TextInput)<InputProps>``;

export const FlatInput: React.FC<InputProps> = (props) => {
  return (
    <ChildContainer
      underlineColor="#49454F"
      activeUnderlineColor="#000"
      backgroundColor="#fff"
      textColor="#000"
      {...props}
    />
  );
};

const DropdownChildContainer = styled(Dropdown)<InputProps>`
  margin-top: ${({ marginTop = 10 }) => `${marginTop}px`};
`;

export const DropdownInput: React.FC<InputProps> = (props) => {
  return (
    <DropdownChildContainer
      {...props}
      selectedTextStyle={inputBoxStyle.selectedTextStyle}
      style={inputBoxStyle.dropdown}
      placeholderStyle={inputBoxStyle.placeholderStyle}
      iconStyle={inputBoxStyle.iconStyle}
    />
  );
};
