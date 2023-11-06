import React from 'react';
import styled from 'styled-components/native'; // Import from styled-components/native
import { InputProps } from '../../types/components/input.type';
import { TextInput } from 'react-native-paper';
import { theme } from '../../infrastructure/theme';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';
import { inputBoxStyle } from './inputBoxStyle';
import { sizes } from '../../infrastructure/theme/sizes';
const ChildContainer = styled(TextInput)<InputProps>``;

export const FlatInput: React.FC<InputProps> = (props) => {
  return (
    <ChildContainer
      underlineColor={theme.colors.ui.text}
      activeUnderlineColor={theme.colors.ui.black}
      backgroundColor={theme.colors.bg.primary}
      textColor={theme.colors.ui.black}
      {...props}
    />
  );
};

const DropdownChildContainer = styled(Dropdown)<InputProps>`
  margin-top: ${({ marginTop = sizes[1] }) => `${marginTop}px`};
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
