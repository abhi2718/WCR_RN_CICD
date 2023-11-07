import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  View,
  BackHandler,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
} from 'react-native';
import {CometChat} from '@cometchat/chat-sdk-react-native';
import {
  ConversationsConfiguration,
  ConversationsConfigurationInterface,
} from '../CometChatConversations/ConversationsConfiguration';
import {
  MessagesConfiguration,
  MessagesConfigurationInterface,
} from '../CometChatMessages/MessagesConfiguration';
import {CometChatConversations} from '../CometChatConversations/CometChatConversations';
import {CometChatMessages} from '../CometChatMessages';
import {Style} from './styles';
import {CometChatUIEventHandler} from '../shared/events/CometChatUIEventHandler/CometChatUIEventHandler';
import {CometChatContext, localize, messageStatus} from '../shared';
import {StartIcon} from './resources';
import {
  CometChatContacts,
  StartConversationConfigurationInterface,
} from '../CometChatContacts';
import {Toast} from '../shared/helper/Toast';
import { MessageContext } from '../../../contexts/cometChatMessage.context';
import { ROUTES } from '../../../navigation';

const ComponentNames = {
  ConversationList: 'conversations',
  Messages: 'messages',
  NewConversation: 'new-conversation',
};

const uiEventListener = 'uiEvents_' + new Date().getTime();

export interface CometChatConversationsWithMessagesInterface {
  user?: CometChat.User;
  group?: CometChat.Group;
  conversationsConfiguration?: ConversationsConfigurationInterface;
  messagesConfigurations?: MessagesConfigurationInterface;
  startConversationConfiguration?: StartConversationConfigurationInterface;
  onError?: (e: CometChat.CometChatException) => void;
  isUserWindow?:Boolean
}

export const CometChatConversationsWithMessages = (
  props: CometChatConversationsWithMessagesInterface,
) => {
  const {
    user,
    group,
    conversationsConfiguration,
    messagesConfigurations,
    startConversationConfiguration,
    onError,
    isUserWindow
  } = props;
  const {theme} = useContext(CometChatContext);
  const [showComponent, setShowComponent] = useState(
    ComponentNames.ConversationList,
  );
  const selectedConversation = useRef<CometChat.Conversation>(null);
  const selectedUser = useRef<CometChat.User>(user);
  const selectedGroup = useRef<CometChat.Group>(group);
  const messageContext = useContext(MessageContext)
  const navigation = useNavigation();
  const openMessagesFor = (item: CometChat.Conversation) => {
    clearSelected();
    selectedConversation.current = item;
    setShowComponent(ComponentNames.Messages);
    messageContext.selectedUser.current = selectedUser.current;
    messageContext.selectedConversation.current = selectedConversation.current;
    messageContext.selectedGroup.current = selectedGroup.current;
    messageContext._messagesConfig.current = _messagesConfig
    navigation.navigate(ROUTES.CommunityChatMessage)
  };

  const _conversationsConfig = new ConversationsConfiguration({
    onItemPress: openMessagesFor,
    onError,
    ...conversationsConfiguration,
  });

  const _messagesConfig = new MessagesConfiguration({
    ...messagesConfigurations,
    messageHeaderConfiguration: {
      onBack: () => {
        if (isUserWindow) {
          navigation.navigate(ROUTES.PrivateChatTab)
        } else {
          navigation.navigate(ROUTES.CommunityChatTab)
        }
        setShowComponent(ComponentNames.ConversationList)
      },
      ...messagesConfigurations?.messageHeaderConfiguration,
    },
    messageComposerConfiguration: {
      onError,
      ...messagesConfigurations?.messageComposerConfiguration,
    },
  });

  const handleBack = () => {
    if (showComponent == ComponentNames.Messages)
      setShowComponent(ComponentNames.ConversationList);
    else return false;
    return true;
  };

  const NewConversation = () => {
    return (
      <TouchableOpacity
        onPress= {() => {
          setShowComponent(ComponentNames.NewConversation)
        }}>
        <Image
          source={StartIcon}
          style={{height: 24, width: 24, tintColor: theme.palette.getPrimary()}}
        />
      </TouchableOpacity>
    );
  };

  const clearSelected = () => {
    selectedConversation.current = null;
    selectedGroup.current = null;
    selectedUser.current = null;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBack);
    };
  }, [showComponent]);

  useEffect(() => {
    if (user) {
      selectedUser.current = user;
      setShowComponent(ComponentNames.Messages);
    }
    if (group) {
      selectedGroup.current = group;
      setShowComponent(ComponentNames.Messages);
    }
  }, [user, group]);

  useEffect(() => {
    CometChatUIEventHandler.addUIListener(uiEventListener, {
      openChat: ({ user, group }) => {
        setShowComponent(ComponentNames.ConversationList);
        clearSelected();
        if (user != undefined) {
          selectedUser.current = user;
          setShowComponent(ComponentNames.Messages);
        }
        if (group != undefined) {
          selectedGroup.current = group;
          setShowComponent(ComponentNames.Messages);
        }
      },
    });
    // CometChatUIEventHandler.addMessageListener(
    //     uiEventListener,
    //     {
    //         ccMessageForwarded: ({users, groups, status}) =>{
    //             if (status == messageStatus.inprogress) {
    //                 setShowForwarding(true);
    //                 return;
    //             }
    //             if (status == messageStatus.success) {
    //                 let totalCount = ((users && users.length) || 0) + ((groups && groups.length) || 0)
    //                 if (totalCount == 1) {
    //                     if (users && users.length > 0) {
    //                         setShowComponent(ComponentNames.ConversationList);
    //                         clearSelected();
    //                         selectedUser.current = users[0];
    //                         setShowComponent(ComponentNames.Messages);
    //                     }
    //                     if (groups && groups.length > 0) {
    //                         setShowComponent(ComponentNames.ConversationList);
    //                         clearSelected()
    //                         selectedGroup.current = groups[0];
    //                         setShowComponent(ComponentNames.Messages);
    //                     }
    //                 }
    //                 setShowForwarding(false);
    //             }
    //         }
    //     });
    CometChatUIEventHandler.addGroupListener(uiEventListener, {
      ccGroupDeleted: ({group}) => {
        if (
          selectedConversation.current?.getConversationWith()['guid'] ==
            group['guid'] ||
          selectedGroup.current?.getGuid() == group['guid']
        )
          setShowComponent(ComponentNames.ConversationList);
      },
      ccGroupLeft: ({leftGroup}) => {
        if (
          selectedConversation.current?.getConversationId() ==
            leftGroup['conversationId'] ||
          selectedGroup.current?.getGuid() == leftGroup['guid']
        )
          setShowComponent(ComponentNames.ConversationList);
      },
    });
    return () => {
      CometChatUIEventHandler.removeGroupListener(uiEventListener);
      CometChatUIEventHandler.removeUIListener(uiEventListener);
    };
  }, []);
  return (
    <View>
      <CometChatConversations
         isUserWindow={isUserWindow}
        {..._conversationsConfig}
        AppBarOption={_conversationsConfig.AppBarOption || NewConversation}
      />
    </View>
  );
};

export const MessageList = () => {
  const {selectedUser, selectedConversation, selectedGroup,_messagesConfig } =
  useContext(MessageContext);
  return (
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
  );
};

