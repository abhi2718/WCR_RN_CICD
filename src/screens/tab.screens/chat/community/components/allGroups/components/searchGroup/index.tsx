import React from 'react';
import {View,TextInput} from 'react-native';
import {SearchGroupProps} from '../../../../../../../../types/screen.type/communityChat';
import { styles } from './style';

const SearchGroup = (props: SearchGroupProps) => {
  const {handleTextChange} = props;
  return (
    <View>
      <TextInput placeholder="Search" onChangeText={handleTextChange} />
    </View>
  );
};

export default SearchGroup;

