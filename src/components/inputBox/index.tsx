import React from 'react';
import styled from 'styled-components/native'; // Import from styled-components/native
import { InputProps } from '../../types/components/input.type';
import { TextInput } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { colors } from '../../infrastructure/theme/colors';
const ChildContainer = styled(TextInput)<InputProps>`
  margin-top: ${({ marginTop = 10 }) => `${marginTop}px`};
`;

export const FlatInput: React.FC<InputProps> = (props) => {
  return (
    <ChildContainer
      underlineColor="#49454F"
      activeUnderlineColor="#000"
      backgroundColor="#fff"
      {...props}
    />
  );
};

const ChildContainerDropdown = styled(DropDown)<InputProps>`
  background-color: #fff;
`;

export const DropdownInput: React.FC<InputProps> = (props) => {
  return (
    <ChildContainerDropdown
      inputProps={{
        style: {
          backgroundColor: '#fff',
        },
      }}
      dropDownStyle={{
        style: {
          backgroundColor: '#fff',
        },
      }}
      {...props}
    />
  );
};
