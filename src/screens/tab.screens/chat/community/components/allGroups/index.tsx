import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { InlineLoader,FullLoader, NormalText } from '../../../../../../components/tools';
import { theme } from '../../../../../../infrastructure/theme';
import GroupsList from './components/groupList';
import SearchGroup from './components/searchGroup';
import { styles } from './styles';
import { useViewModal } from './useViewModal';

const AllGroups = () => {
  const { groups, handleTextChange, loading,handleJoinGroup } = useViewModal();
  if (loading) {
    return <FullLoader />
  }
  return (
    <View style= { styles.container } >
      <SearchGroup handleTextChange={handleTextChange} />
      <GroupsList groups={groups} handleJoinGroup={handleJoinGroup} />
    </View>
  );
};

export default AllGroups;
