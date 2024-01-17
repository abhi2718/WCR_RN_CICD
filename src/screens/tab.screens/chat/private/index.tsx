import React from 'react';
import { View } from 'react-native';
import { CometChatConversationsWithMessages } from '../../../../cometchat/src';
import { HeaderDeck } from '../../../../components/header';
import { ScreenContainer, ScreenWrapper } from '../../../../components/tools';
import { styles } from './styles';
import { useViewModal } from './useViewMdal';

export const PrivateChatScreen = () => {
  const { count, goToNotification } = useViewModal();
  return (
    <ScreenWrapper>
      <View style={styles.containerStyle}>
        <View style={{ paddingHorizontal: 8 }}>
          <HeaderDeck count={count} goToNotification={goToNotification} />
        </View>
        <CometChatConversationsWithMessages isUserWindow={true} />
      </View>
    </ScreenWrapper>
  );
};
