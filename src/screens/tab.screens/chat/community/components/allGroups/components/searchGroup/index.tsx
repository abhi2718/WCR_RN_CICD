import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { SearchGroupProps } from '../../../../../../../../types/screen.type/communityChat';
import { styles } from './style';
import { Row } from '../../../../../../../../components/tools';

const SearchGroup = (props: SearchGroupProps) => {
  const { handleTextChange } = props;
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
      <Image
        style={styles.crossIcon}
        resizeMode="contain"
        source={require('../../../../../../../../assets/images/icons/crossIcon.png')}
      />
    </Row>
  );
};

export default SearchGroup;
