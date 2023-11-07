import React from 'react';
import {CometChat} from '@cometchat/chat-sdk-react-native';
import {View, Image, Text} from 'react-native';
import {CometChatConversationsWithMessages, CometChatUsersWithMessages} from '../../../../cometChat/src';
import {styles} from './styles';
import {useViewModal} from './useViewMdal';

export const PrivateChatScreen = () => {
  const {state} = useViewModal();
  let usersRequestBuilder = new CometChat.UsersRequestBuilder()
    .setLimit(20)
    .friendsOnly(!true);

  return (
    <View style={styles.containerStyle}>
      <CometChatConversationsWithMessages
        isUserWindow={true}
      />
    </View>
  );
};
