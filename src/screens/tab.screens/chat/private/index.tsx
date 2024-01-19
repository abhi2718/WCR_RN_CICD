import React from 'react';
import { View } from 'react-native';
import { CometChatConversationsWithMessages } from '../../../../cometchat/src';
import { HeaderDeck } from '../../../../components/header';
import { ScreenWrapper } from '../../../../components/tools';
import { styles } from './styles';
import { useViewModal } from './useViewMdal';

export const PrivateChatScreen = () => {
  const { count, goToNotification } = useViewModal();
  return (
    <ScreenWrapper>
      <View style={styles.containerStyle}>
        <View style={styles.paddingH8}>
          <HeaderDeck count={count} goToNotification={goToNotification} />
        </View>
        <CometChatConversationsWithMessages isUserWindow={true} />
      </View>
    </ScreenWrapper>
  );
};
