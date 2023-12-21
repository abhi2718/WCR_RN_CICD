import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CometChat from '../../../../../cometchat/sdk/CometChat';
import { CometChatMessages } from '../../../../../cometchat/src';
import { MessageContext } from '../../../../../contexts/cometChatMessage.context';

export const MessageList = () => {
  const { selectedUser, selectedConversation, selectedGroup, _messagesConfig } =
    useContext(MessageContext);
  return (
    <SafeAreaView style={styles.containerStyle}>
      <CometChatMessages
        user={
          selectedUser.current ||
          selectedConversation.current?.['conversationType'] == 'user'
            ? selectedUser.current ||
              (selectedConversation.current?.[
                'conversationWith'
              ] as CometChat.User)
            : undefined
        }
        group={
          selectedGroup.current ||
          selectedConversation.current?.['conversationType'] == 'group'
            ? selectedGroup.current ||
              (selectedConversation.current?.[
                'conversationWith'
              ] as CometChat.Group)
            : undefined
        }
        {..._messagesConfig.current}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
        flex: 1,
      backgroundColor:'#fff'
  },
});
