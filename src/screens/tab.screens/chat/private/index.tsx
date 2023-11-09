import React from 'react';
import {View, Image, Text} from 'react-native';
import {CometChatConversationsWithMessages, CometChatUsersWithMessages} from '../../../../cometChat/src';
import {styles} from './styles';
import {useViewModal} from './useViewMdal';

export const PrivateChatScreen = () => {
  const {state} = useViewModal();
 

  return (
    <View style={styles.containerStyle}>
      <CometChatConversationsWithMessages
        isUserWindow={true}
      />
    </View>
  );
};
