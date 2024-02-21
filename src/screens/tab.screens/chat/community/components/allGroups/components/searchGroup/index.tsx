import React from 'react';
import { TextInput } from 'react-native';
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
        placeholder="Group Search"
        placeholderTextColor="#999"
        onChangeText={handleTextChange}
      />
    </Row>
  );
};

export default SearchGroup;
