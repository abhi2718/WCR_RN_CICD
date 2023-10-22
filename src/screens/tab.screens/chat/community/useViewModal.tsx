import {CometChat} from '@cometchat/chat-sdk-react-native';
import {ROUTES} from '../../../../navigation';

export const useViewModal = (navigation) => {
  const onItemPress = async (item: CometChat.Conversation) => {
    const userOrGroup = item.getConversationWith();
    const name = userOrGroup.getName();
    const conversationId = item.getConversationId();
    navigation.navigate(ROUTES.CommunityChatMessageList, {
      gid: `group_${conversationId.split('group_group_')[1]}`,
      name,
    });
  };
  return {
    onItemPress,
  };
};
