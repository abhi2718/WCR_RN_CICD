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
      <HeaderDeck count={count} goToNotification={goToNotification} />
      <CometChatConversationsWithMessages
        isUserWindow={true}
      />
    </View>
    </ScreenWrapper>
  );
};
