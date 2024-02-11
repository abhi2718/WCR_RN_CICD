import React from 'react';
import { View, Text, Image } from 'react-native';
import { FullLoader, Column } from '../../../../../../components/tools';
import GroupsList from './components/groupList';
import SearchGroup from './components/searchGroup';
import { styles, searchStyle } from './styles';
import { useViewModal } from './useViewModal';
import { WelocmeGroupModal } from '../../../../../../components/modal/welocmeGroupModal';
export type AllGroupsProps = {
};
const AllGroups = (props: AllGroupsProps) => {
  const {
    groups,
    handleTextChange,
    loading,
    handleJoinGroup,
    closeModal,
    isModalVisible,
  } = useViewModal();
  const {} = props;
  if (loading) {
    return <FullLoader />;
  }
  return (
    <View style={styles.container}>
        <WelocmeGroupModal isVisible={!isModalVisible} onClose={closeModal} />
      <View style={styles.container}>
        <SearchGroup
          handleTextChange={handleTextChange}
        />
        {groups?.length > 0 ? (
          <GroupsList groups={groups} handleJoinGroup={handleJoinGroup} />
        ) : (
          <View style={searchStyle.content}>
            <Column gap={25} alignItems="center">
              <Text style={searchStyle.subHeading}>No results found</Text>
              <Image
                style={searchStyle.pendingIcon}
                resizeMode="contain"
                source={require('../../../../../../assets/images/icons/noSearchResultIcon.png')}
              />
              <Text style={searchStyle.text}>
                We could not find what you {`\n`} were searching for. Please try
                again.
              </Text>
            </Column>
          </View>
        )}
      </View>
    </View>
  );
};

export default AllGroups;
