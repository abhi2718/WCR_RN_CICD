import React from 'react';
import {View, FlatList, Text, Image, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Column, Row, Spacer} from '../../../../../../../../components/tools';
import {
  GroupProps,
  GroupsListProps,
} from '../../../../../../../../types/screen.type/communityChat';
import {styles} from './styles';

const GroupsList = (props: GroupsListProps) => {
  const {groups, handleJoinGroup} = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        renderItem={({item}) => (
          <Group group={item} handleJoinGroup={handleJoinGroup} />
        )}
        keyExtractor={(item) => item.getGuid()}
      />
    </View>
  );
};

const Group = (props: GroupProps) => {
  const {group, handleJoinGroup} = props;
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
          {group.getHasJoined() && (
            <>
              <Text style={styles.joinedBtn}>Joined</Text>
            </>
          )}
          {!group.getHasJoined() && (
            <>
              <Pressable onPress={() => handleJoinGroup(group.getGuid())}>
                <Text style={styles.joinBtn}>Join</Text>
              </Pressable>
            </>
          )}
        </Column>
      </Row>
    </View>
  );
};
export default GroupsList;
