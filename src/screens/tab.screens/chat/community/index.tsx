import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CometChat} from '@cometchat/chat-sdk-react-native';
import {CometChatConversations} from '../../../../cometChat/src';
import {useViewModal} from './useViewModal';
export default function CommunityChat({navigation}) {
  const {onItemPress} = useViewModal(navigation);
  return (
    <View style={styles.container}>
      <CometChatConversations title="" onItemPress={onItemPress} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
