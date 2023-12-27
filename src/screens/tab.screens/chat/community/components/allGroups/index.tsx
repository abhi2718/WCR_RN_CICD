import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { InlineLoader, FullLoader } from '../../../../../../components/tools';
import { theme } from '../../../../../../infrastructure/theme';
import GroupsList from './components/groupList';
import SearchGroup from './components/searchGroup';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { WelocmeGroupModal } from '../../../../../../components/modal/welocmeGroupModal';

const AllGroups = ({ showToggleSearchInput, toggleSearchInput }: any) => {
  const { groups, handleTextChange, loading, handleJoinGroup } = useViewModal();
  const [isModalVisible, setisModalVisible] = useState(false);
  useEffect(() => {
    setisModalVisible(true);
  }, []);

  const closeModal = () => {
    setisModalVisible(false);
  };

  if (loading) {
    return <FullLoader />;
  }
  return (
    <>
      <WelocmeGroupModal isVisible={isModalVisible} onClose={closeModal} />
      <View style={styles.container}>
        {showToggleSearchInput && (
          <SearchGroup
            toggleSearchInput={toggleSearchInput}
            handleTextChange={handleTextChange}
          />
        )}
        <GroupsList groups={groups} handleJoinGroup={handleJoinGroup} />
      </View>
    </>
  );
};

export default AllGroups;
