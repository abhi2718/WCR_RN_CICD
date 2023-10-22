import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CometChat} from '@cometchat/chat-sdk-react-native';
import {
  CometChatMessageList,
  CometChatMessages,
  CometChatMessageTemplate,
} from '../../../../../../cometChat/src';

const MessageListView = (props) => {
  const {group} = props;
  const _group = new CometChat.Group(group.guid, group.name);
  return (
    <View>
      <CometChatMessageList group={_group} />
    </View>
  );
};

export default function CommunityChatMessageList({route}) {
  const group = new CometChat.Group(route.params.gid, route.params.name);
  return (
    <View style={styles.container}>
      <CometChatMessages group={group} MessageListView={MessageListView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
