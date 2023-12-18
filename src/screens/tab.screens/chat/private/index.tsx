//import { CometChatConversationsWithMessages } from '@cometchat/chat-uikit-react-native';
import React from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import {CometChatConversationsWithMessages, CometChatUsersWithMessages} from '../../../../cometChat/src';
import { HeaderDeck } from '../../../../components/header';
import { ScreenContainer, ScreenWrapper } from '../../../../components/tools';
import {styles} from './styles';
import {useViewModal} from './useViewMdal';

export const PrivateChatScreen = () => {
  const {count,
    goToNotification} = useViewModal();
  return (
    <ScreenWrapper>
       <View style={styles.containerStyle}>
        <View style={{paddingLeft:16}}>
        <HeaderDeck count={count} goToNotification={goToNotification} />
     </View>
      <CometChatConversationsWithMessages
       isUserWindow={true}
      />
    </View>
    </ScreenWrapper>
  );
};
