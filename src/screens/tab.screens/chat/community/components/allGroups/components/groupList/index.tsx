import React from 'react';
import {View, FlatList, Text, Image, Pressable} from 'react-native';
import {Column, Row, Spacer} from '../../../../../../../../components/tools';
import {
  GroupProps,
  GroupsListProps,
} from '../../../../../../../../types/screen.type/communityChat';
import { styles } from './styles';

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
    <View style={styles.container}>
      <Row justifyContent="space-between">
        <Row>
          <Image style={styles.imageStyle} source={{uri: group.getIcon()}} />
          <Spacer position="left" size={16}>
            <Column>
              <Text>{group.getName()}</Text>
              <Text>{group.getMembersCount()}</Text>
            </Column>
          </Spacer>
        </Row>
        <Column justifyContent="center">
          {group.getHasJoined() && (
            <>
              <Text>Joined</Text>
            </>
          )}
          {!group.getHasJoined() && (
            <>
              <Pressable onPress={() => handleJoinGroup(group.getGuid())}>
                <Text>Join</Text>
              </Pressable>
            </>
          )}
        </Column>
      </Row>
    </View>
  );
};
export default GroupsList;
