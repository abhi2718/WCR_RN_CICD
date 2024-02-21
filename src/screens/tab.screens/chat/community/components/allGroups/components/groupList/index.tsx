import React, { useState } from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Column, Row, Spacer } from '../../../../../../../../components/tools';
import {
  GroupProps,
  GroupsListProps,
} from '../../../../../../../../types/screen.type/communityChat';
import { styles } from './styles';
import { GroupInfoModal } from '../../../../../../../../components/groupInfoModal';
import { AlertScreen } from '../../../../../../../../components/alert';

const GroupsList = (props: GroupsListProps) => {
  const { groups, handleJoinGroup, handleLeaveGroup } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        renderItem={({ item }) => (
          <Group
            group={item}
            handleJoinGroup={handleJoinGroup}
            handleLeaveGroup={handleLeaveGroup}
          />
        )}
        keyExtractor={(item) => item.getGuid()}
      />
    </View>
  );
};

const Group = (props: GroupProps) => {
  const { group, handleJoinGroup, handleLeaveGroup } = props;
  const [isGroupInfoModalVisible, setisGroupInfoModalVisible] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const closeModal = () => {
    setisGroupInfoModalVisible(false);
    
  };
  const openAlertModal = () => {
    setShowAlertModal(true);
    setisGroupInfoModalVisible(false)
  };
  return (
    <View style={styles.singleRow}>
      <Row justifyContent="space-between">
        <Row style={styles.colOne}>
          <FastImage
            style={styles.imageStyle}
            source={{ uri: group.getIcon() }}
          />
          <Spacer position="left" size={16}>
            <Column>
              <Text style={styles.groupName}>{group.getName()}</Text>
              <Text style={styles.groupMembers}>
                {group.getMembersCount()} Members
              </Text>
            </Column>
          </Spacer>
        </Row>
        <Column justifyContent="center">
          <AlertScreen
            showModal={showAlertModal}
            setShowModal={setShowAlertModal}
            title="Leave Group"
            description={`Are you sure you want to 
                Leave the Group ?`}
            onPress={() => handleLeaveGroup(group.getGuid())}
          />
          {group.getHasJoined() && (
            <>
              <Text style={styles.joinedBtn} onPress={openAlertModal}>
                Leave
              </Text>
            </>
          )}
          {!group.getHasJoined() && (
            <>
              <Pressable onPress={() => setisGroupInfoModalVisible(true)}>
                <Text style={styles.joinBtn}>Join</Text>
              </Pressable>
              <GroupInfoModal
                isVisible={isGroupInfoModalVisible}
                onClose={closeModal}
                joinGroup={() => handleJoinGroup(group.getGuid())}
              />
            </>
          )}
        </Column>
      </Row>
    </View>
  );
};
export default GroupsList;
