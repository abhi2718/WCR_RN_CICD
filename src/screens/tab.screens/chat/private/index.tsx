import React from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import { CometChatConversationsWithMessages } from '../../../../cometchat/src';
//import { CometChatConversationsWithMessages } from '../../../../cometChat/chat-uikit-react-native/src';
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
