import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { InlineLoader, FullLoader } from '../../../../../../components/tools';
import { theme } from '../../../../../../infrastructure/theme';
import GroupsList from './components/groupList';
import SearchGroup from './components/searchGroup';
import { styles } from './styles';
import { useViewModal } from './useViewModal';

const AllGroups = ({ showToggleSearchInput, toggleSearchInput }: any) => {
  const { groups, handleTextChange, loading, handleJoinGroup } = useViewModal();
  if (loading) {
    return <FullLoader />;
  }
  return (
    <View style={styles.container}>
      {showToggleSearchInput && (
        <SearchGroup
          toggleSearchInput={toggleSearchInput}
          handleTextChange={handleTextChange}
        />
      )}
      <GroupsList groups={groups} handleJoinGroup={handleJoinGroup} />
    </View>
  );
};

export default AllGroups;
