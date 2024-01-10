import React from 'react';
import { View, TextInput, Image, Pressable } from 'react-native';
import { SearchGroupProps } from '../../../../../../../../types/screen.type/communityChat';
import { styles } from './style';
import { Row } from '../../../../../../../../components/tools';

const SearchGroup = (props: SearchGroupProps) => {
  const { handleTextChange, toggleSearchInput } = props;
  return (
    <Row
      style={styles.searchBarContainer}
      alignItems="center"
      justifyContent="space-between"
    >
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={handleTextChange}
      />
      {/* <Pressable
        onPress={() => {
          handleTextChange('');
          toggleSearchInput();
        }}
      >
        <Image
          style={styles.crossIcon}
          resizeMode="contain"
          source={require('../../../../../../../../assets/images/icons/crossIcon.png')}
        />
      </Pressable> */}
    </Row>
  );
};

export default SearchGroup;
