import { View, Text, Image, Platform, ScrollView } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Header from './Header';
import { ICONS } from './resources';
import { CometChatContext, localize, } from '../shared';
import { CometChatMessageComposer, } from '../CometChatMessageComposer';
import { CometChatMessageList } from '../CometChatMessageList';
//@ts-ignore
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { styles } from './style';
import { messageStatus } from '../shared/utils/CometChatMessageHelper';
import { useKeyboard } from '../shared/helper/useKeyboard';
import { CometChatUIEventHandler } from '../shared/events/CometChatUIEventHandler/CometChatUIEventHandler';
const uiEventId = 'ccUiEvent' + new Date().getTime();
export const CometChatThreadedMessages = (props) => {
    const { theme } = useContext(CometChatContext);
    const { parentMessage, title, closeIcon, BubbleView, MessageActionView, messageListConfiguration, messageComposerConfiguration, onClose, onError, threadedMessagesStyle } = props;
    const loggedInUser = useRef(null);
    const [group, setGroup] = useState(null);
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState(parentMessage);
    const [replyCount, setReplyCount] = useState(parentMessage.getReplyCount() || 0);
    const keyboardHeight = useKeyboard();
    let limit = 30;
    const ccMessageSentFunc = ({ message: msg, status }) => {
        if (status === messageStatus.success) {
            if (message.getId() == msg.parentMessageId)
                setReplyCount((prev) => prev + 1);
            if (message.getId() == msg.id)
                setMessage(message);
        }
    };
    const ccMessageEditedFunc = ({ message: msg, status }) => {
        if (message.getId() == msg.id && status == messageStatus.success)
            setMessage(message);
    };
    const ccMessageDeletedFunc = ({ message: msg }) => {
        if (message.getId() == msg.id)
            setMessage(message);
    };
    const ccMessageReadFunc = ({ message: msg }) => {
        if (message.getId() == msg.id)
            setMessage(message);
    };
    useEffect(() => {
        CometChatUIEventHandler.addMessageListener(uiEventId, {
            ccMessageSent: (item) => ccMessageSentFunc(item),
            ccMessageEdited: (item) => ccMessageEditedFunc(item),
            ccMessageDeleted: (item) => ccMessageDeletedFunc(item),
            ccMessageRead: (item) => ccMessageReadFunc(item),
        });
        return () => {
            CometChatUIEventHandler.removeMessageListener(uiEventId);
        };
    }, []);
    useEffect(() => {
        CometChat.getLoggedinUser().then((loggedUser) => {
            loggedInUser.current = loggedUser;
            if (message.getSender().getUid() == loggedUser.getUid()) {
                if (message.getReceiverType() == 'group') {
                    setGroup(message.getReceiver());
                }
                else {
                    setUser(message.getReceiver());
                }
            }
            else {
                if (message.getReceiverType() == 'group') {
                    setGroup(message.getReceiver());
                }
                else {
                    setUser(message.getSender());
                }
            }
        });
    }, []);
    return (<View style={[
            styles.container,
            {
                width: threadedMessagesStyle.width ?? '100%',
                height: threadedMessagesStyle.height ?? '100%',
                backgroundColor: threadedMessagesStyle.background ??
                    theme.palette.getBackgroundColor(),
                border: threadedMessagesStyle.border ?? {},
                borderRadius: threadedMessagesStyle.borderRadius ?? 0,
            },
        ]}>
      <Header title={title} showCloseButton closeButtonIcon={closeIcon ?? ICONS.CLOSE} onPress={onClose} titleStyle={threadedMessagesStyle.titleStyle ?? {
            ...theme.typography.heading,
            color: theme.palette.getAccent(),
        }} closeIconTint={threadedMessagesStyle.closeIconTint ?? theme.palette.getPrimary()}/>
      <View style={styles.msgBubbleContainer}>
        <ScrollView>
        {BubbleView && BubbleView(message)}
        </ScrollView>
      </View>
      {MessageActionView ? (MessageActionView(message)) : (<View style={[
                styles.actionViewContainer,
                {
                    borderColor: theme.palette.getAccent200(),
                },
            ]}>
          <Text style={[
                theme.typography.text1,
                {
                    color: theme.palette.getAccent600(),
                },
            ]}>
            {replyCount ?? 0} reply
          </Text>
          <Image source={ICONS.MORE} resizeMode={'contain'} style={[
                styles.actionIcon,
                { tintColor: theme.palette.getPrimary() },
            ]}/>
        </View>)}
      <View style={{ flex: 1, paddingHorizontal: 8 }}>
        {(user !== null || group !== null) && (<CometChatMessageList messageRequestBuilder={new CometChat.MessagesRequestBuilder()
                .setLimit(limit)
                .setParentMessageId(message.getId())} parentMessageId={message.getId().toString()} user={user} group={group} onError={onError && onError} {...messageListConfiguration}/>)}
      </View>

      <View style={styles.composerContainer}>
        <CometChatMessageComposer parentMessageId={message.getId()} messageComposerStyle={{
            borderRadius: 10,
            backgroundColor: theme.palette.getAccent100(),
        }} user={user} group={group} onError={onError && onError} {...messageComposerConfiguration}/>
      </View>
      {Platform.OS === 'ios' && (<View style={{
                width: '100%',
                height: keyboardHeight - 35,
            }}/>)}
    </View>);
};
CometChatThreadedMessages.defaultProps = {
    title: localize('THREAD'),
    threadedMessagesStyle: {},
    parentMessage: {},
};
//# sourceMappingURL=CometChatThreadedMessages.js.map