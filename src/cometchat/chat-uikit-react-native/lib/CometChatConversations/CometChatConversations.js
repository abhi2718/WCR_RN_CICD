import React, { useContext } from "react";
import { View, Text } from "react-native";
//@ts-ignore
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { ChatConfigurator, CometChatConfirmDialog, CometChatContext, localize } from "../shared";
import { Style } from "./style";
import { passwordGroupIcon, privateGroupIcon, rightTickIcon, deleteIcon } from "./resources";
import { ConversationsStyle } from "./ConversationsStyle";
import { GroupTypeConstants, MessageStatusConstants, PASSWORD_GROUP_COLOR, PRIVATE_GROUP_COLOR } from "../shared/constants/UIKitConstants";
import { AvatarStyle, BadgeStyle, CometChatBadge, CometChatDate, CometChatListItem, CometChatReceipt, DateStyle, StatusIndicatorStyle } from "../shared";
import { ListItemStyle } from "../shared";
import { CometChatSoundManager } from "../shared";
import { CometChatConversationUtils } from "../shared";
import { CometChatList } from "../shared";
import { CometChatUIEventHandler } from "../shared/events/CometChatUIEventHandler/CometChatUIEventHandler";
const conversationListenerId = "chatlist_" + new Date().getTime();
const userListenerId = "chatlist_user_" + new Date().getTime();
const groupListenerId = "chatlist_group_" + new Date().getTime();
const messageListenerId = "chatlist_message_" + new Date().getTime();
const callListenerId = "call_" + new Date().getTime();
/**
 *
 * @version 1.0.0
 * @author CometChatTeam
 * @description CometChatConversations is a container component that wraps and
 * formats CometChatListBase and CometChatConversationList component, with no behavior of its own.
 *
 */
export const CometChatConversations = (props) => {
    /**
     * Props destructuring
     */
    const { disableUsersPresence = false, disableReadReceipt = false, disableReceipt = false, disableTyping = false, disableSoundForMessages = false, customSoundForMessages, datePattern, ListItemView, AppBarOption, options, hideSeparator = true, hideSubmitIcon = true, backButtonIcon, showBackButton = false, selectionMode = "multiple", onSelection, title = localize("CHATS"), emptyStateText, EmptyStateView, errorStateText, ErrorStateView, LoadingStateView, conversationsRequestBuilder, SubtitleView, hideError = false, onItemPress, onItemLongPress, onError, onBack, conversationsStyle, } = props;
    //context
    const { theme } = useContext(CometChatContext);
    const conversationListRef = React.useRef(null);
    const loggedInUser = React.useRef(null);
    const [confirmDelete, setConfirmDelete] = React.useState(undefined);
    const [selecting, setSelecting] = React.useState(false);
    const [selectedConversation, setSelectedConversations] = React.useState([]);
    const _style = new ConversationsStyle({
        backgroundColor: theme?.palette?.getBackgroundColor(),
        backIconTint: theme?.palette?.getPrimary(),
        emptyTextColor: theme?.palette?.getAccent400(),
        emptyTextFont: theme?.typography?.caption2,
        errorTextColor: theme?.palette?.getError(),
        errorTextFont: theme?.typography?.subtitle1,
        lastMessageTextColor: theme?.palette.getAccent600(),
        lastMessageTextFont: theme?.typography.subtitle1,
        loadingIconTint: theme?.palette.getAccent700(),
        separatorColor: theme?.palette.getAccent100(),
        titleColor: theme?.palette.getAccent(),
        titleFont: theme?.typography.heading,
        typingIndictorTextColor: theme?.palette.getAccent600(),
        typingIndictorTextFont: theme?.typography.subtitle1,
        threadIndicatorTextColor: theme?.palette.getAccent800(),
        threadIndicatorTextFont: theme?.typography.text1,
        ...conversationsStyle
    });
    const _statusIndicatorStyle = new StatusIndicatorStyle(props?.statusIndicatorStyle || {});
    const _avatarStyle = new AvatarStyle({
        backgroundColor: theme?.palette?.getAccent600(),
        nameTextColor: theme?.palette?.getAccent(),
        nameTextFont: theme?.typography.body,
        ...props?.avatarStyle
    });
    const _listItemStyle = new ListItemStyle({
        backgroundColor: theme?.palette?.getBackgroundColor(),
        titleColor: theme?.palette.getAccent(),
        titleFont: theme?.typography.name,
        ...props?.listItemStyle
    });
    const _badgeStyle = new BadgeStyle({
        backgroundColor: theme?.palette?.getPrimary(),
        textColor: theme?.palette?.getSecondary(),
        textFont: theme?.typography?.caption2,
        ...props?.badgeStyle
    });
    // const _receiptStyle = new ReceiptStyle(props?.receiptStyle || {});
    const _dateStyle = new DateStyle({
        textColor: theme?.palette?.getAccent600(),
        textFont: theme?.typography?.caption1,
        ...props?.dateStyle
    });
    const _confirmDialogStyle = (props?.confirmDialogStyle || {});
    const ErrorView = () => {
        return (<View style={Style.listContainer}>
                <Text style={{ ..._style?.errorTextFont, color: _style?.errorTextColor }}>
                    {errorStateText || localize("SOMETHING_WRONG")}
                </Text>
            </View>);
    };
    const EmptyView = () => {
        if (EmptyStateView)
            return EmptyStateView();
        else
            return (<View style={Style.listContainer}>
                    <Text style={{ ..._style.emptyTextFont, color: _style.emptyTextColor }}>
                        {emptyStateText || localize("NO_CHATS_FOUND")}
                    </Text>
                </View>);
    };
    const userEventHandler = (...args) => {
        const { uid, blockedByMe, status } = args[0];
        if (!blockedByMe) {
            let item = conversationListRef.current.getListItem(`${uid}_user_${loggedInUser.current.uid}`);
            if (item) {
                let updatedConversation = {
                    ...item,
                    conversationWith: {
                        ...item.conversationWith,
                        status
                    }
                };
                console.log(JSON.stringify(updatedConversation));
                conversationListRef.current.updateList(updatedConversation);
            }
        }
    };
    /**
     * Listener callback for typing event
     * @param  {...any} args
     */
    const typingEventHandler = (...args) => {
        // console.log("typing event", args[1], args[0].receiverId);
        let conversation = conversationListRef.current.getListItem(`${args[0]['receiverType']}_${args[0]['receiverId']}`);
        // console.log("typing event", conversation);
        let isTyping = args[1];
        let newConversation = conversation;
        if (isTyping) {
            newConversation['lastMessage']["typing"] = args[0].receiverType === 'group' ?
                `${args[0].sender.name} : ${localize("IS_TYPING")}` :
                localize("IS_TYPING");
        }
        else {
            delete newConversation['lastMessage']['typing'];
        }
        conversationListRef.current.updateList(conversation);
    };
    /**
     * Find conversation from state and udpate its last message object.
     * Also remove from the current location and put it to 1st location.
     *
     * @param newMessage message object
     */
    const updateLastMessage = (newMessage) => {
        CometChat.CometChatHelper.getConversationFromMessage(newMessage)
            .then(conversation => {
            const oldConversation = conversationListRef.current.getListItem(conversation['conversationId']);
            if (oldConversation == undefined) {
                CometChat.CometChatHelper.getConversationFromMessage(newMessage)
                    .then(newConversation => {
                    newConversation.setUnreadMessageCount(1);
                    conversationListRef.current.updateAndMoveToFirst(newConversation);
                })
                    .catch(err => onError && onError(err));
                return;
            }
            oldConversation['lastMessage'] = newMessage;
            if (newMessage['sender']['uid'] != loggedInUser.current?.['uid'])
                oldConversation.setUnreadMessageCount(oldConversation.getUnreadMessageCount() + 1);
            conversationListRef.current.updateAndMoveToFirst(oldConversation);
        })
            .catch(err => {
            console.log("Error", err);
        });
    };
    /**
     * play notification sound for incoming messages
     */
    const playNotificationSound = () => {
        // code for playing sound need to be added here.
        if (disableSoundForMessages)
            return;
        CometChatSoundManager.play(customSoundForMessages || CometChatSoundManager.SoundOutput.incomingMessageFromOther);
    };
    const shouldMarkAsDelivered = (message) => {
        return !disableReceipt && !message.hasOwnProperty("deliveredAt");
    };
    /**
     * marking the incoming messages as delivered
     */
    const markMessageAsDelivered = (message) => {
        if (message.hasOwnProperty('deletedAt'))
            return;
        if (shouldMarkAsDelivered(message)) {
            CometChat.markAsDelivered(message);
            playNotificationSound();
        }
    };
    /**
     *
     * When a text message / media message / custom message is received
     */
    const messageEventHandler = (...args) => {
        const message = args[0];
        !disableReadReceipt && markMessageAsDelivered(message);
        updateLastMessage(message);
    };
    /**
     * callback handler for group Add / Kicked / Banned / Scope Change
     * @param {obj} message
     */
    const groupHandler = (message) => {
        let conversation = conversationListRef.current.getListItem(message['conversationId']);
        if (conversation) {
            conversation.setLastMessage(message);
            conversationListRef.current.updateList(conversation);
        }
        else {
            CometChat.CometChatHelper.getConversationFromMessage(message)
                .then(newConversation => {
                conversationListRef.current.addItemToList(newConversation, 0);
            });
        }
    };
    const conversationClicked = (conversation) => {
        if (onItemPress) {
            onItemPress(conversation);
            return;
        }
        if (!selecting) {
            //fire event
            return;
        }
        if (selectionMode == "none")
            return;
        let index = selectedConversation.findIndex(tmpConver => tmpConver.conversationWith.conversationId == conversation.conversationWith.conversationId);
        if (index < 0) {
            if (selectionMode == "single")
                setSelectedConversations([conversation]);
            if (selectionMode == "multiple")
                setSelectedConversations([...selectedConversation, conversation]);
        }
        else {
            selectedConversation.splice(index, 1);
            setSelectedConversations([...selectedConversation]);
        }
    };
    const conversationLongPressed = (conversation) => {
        if (onItemLongPress) {
            onItemLongPress(conversation);
            return;
        }
        if (selectionMode == "none")
            return;
        setSelecting(true);
        setSelectedConversations([...selectedConversation, conversation]);
    };
    const removeItemFromSelectionList = (id) => {
        //remove from selected list if list is in selecting mode.
        if (selecting) {
            let index = selectedConversation.find(member => member['uid'] == id);
            if (index > -1) {
                let tmpSelectedConversations = [...selectedConversation];
                tmpSelectedConversations.splice(index, 1);
                setSelectedConversations(tmpSelectedConversations);
            }
        }
    };
    const removeConversation = (id) => {
        let conversation = conversationListRef.current.getListItem(id);
        const { conversationWith, conversationType } = conversation;
        let conversationWithId = conversationType == "group" ? conversationWith.guid : conversationWith.uid;
        CometChat.deleteConversation(conversationWithId, conversationType)
            .then(success => {
            conversationListRef.current.removeItemFromList(id);
            removeItemFromSelectionList(id);
        })
            .catch(err => console.log(err));
    };
    const getMessagePreview = (conversations, uid) => {
        let lastMessage = conversations['lastMessage'];
        if (!lastMessage)
            return null;
        let messageText = ChatConfigurator.getDataSource().getLastConversationMessage(conversations);
        let groupText = "";
        if (lastMessage['receiverType'] == 'group') {
            if (lastMessage['receiverId'] == uid) {
                groupText = "you: ";
            }
            else {
                groupText = lastMessage['sender']['name'] + ": ";
            }
        }
        return (<Text numberOfLines={1} ellipsizeMode={"tail"} style={[Style.subtitleTextStyle, { color: theme.palette.getAccent600() }]}>
                {groupText + messageText}
            </Text>);
    };
    const LastMessageView = (params) => {
        const lastMessage = params['conversations']['lastMessage'];
        if (!lastMessage)
            return null;
        let readReceipt;
        if (!disableTyping && params.typingText) {
            return <View style={Style.row}>
                <Text>{params.typingText}</Text>
            </View>;
        }
        if (lastMessage && !disableReadReceipt && lastMessage['sender']['uid'] == loggedInUser.current?.uid) {
            let status = "ERROR";
            if (lastMessage?.hasOwnProperty('readAt'))
                status = "READ";
            else if (lastMessage?.hasOwnProperty("deliveredAt"))
                status = "DELIVERED";
            else if (lastMessage?.hasOwnProperty("sentAt"))
                status = "SENT";
            readReceipt = disableReceipt ? null : <CometChatReceipt receipt={status} deliveredIcon={props.deliveredIcon} errorIcon={props.errorIcon} readIcon={props.readIcon} sentIcon={props.sentIcon} waitIcon={props.waitingIcon}/>;
        }
        return (<View style={Style.row}>
                {readReceipt}
                {getMessagePreview(params['conversations'], loggedInUser.current?.uid)}
            </View>);
    };
    const TailView = (params) => {
        return <View style={{ alignItems: "flex-end" }}>
            <CometChatDate timeStamp={(params.timestamp) * 1000} style={_dateStyle} customDateString={params.customPattern && params.customPattern()} pattern={"dayDateTimeFormat"}/>
            <CometChatBadge count={params.unreadCount} style={_badgeStyle}/>
        </View>;
    };
    const ConfirmDeletionDialog = () => {
        if (confirmDelete == undefined)
            return null;
        return <CometChatConfirmDialog title={localize("CONFIRM")} cancelButtonText={localize("CANCEL")} confirmButtonText={localize("DELETE")} messageText={localize("DELETE_CONFIRM_MESSAGE")} isOpen={true} onCancel={() => setConfirmDelete(undefined)} onConfirm={() => {
                {
                    removeConversation(confirmDelete);
                    setConfirmDelete(undefined);
                }
            }} style={_confirmDialogStyle}/>;
    };
    const getDefaultOptions = (conversation) => {
        let _defaultOptions = CometChatConversationUtils.getDefaultOptions();
        _defaultOptions[0].backgroundColor = theme?.palette.getError();
        _defaultOptions[0].icon = deleteIcon;
        _defaultOptions[0].title = localize("DELETE");
        _defaultOptions[0].titleStyle = { fontSize: 14, color: theme?.palette.getSecondary() };
        _defaultOptions[0].iconTint = theme?.palette.getSecondary();
        _defaultOptions[0].onPress = (id) => {
            setConfirmDelete(id);
        };
        return _defaultOptions;
    };
    React.useEffect(() => {
        CometChat.getLoggedinUser()
            .then(u => { loggedInUser.current = u; })
            .catch(err => console.log(err));
        CometChat.addUserListener(userListenerId, new CometChat.UserListener({
            onUserOnline: (onlineUser) => {
                console.log(onlineUser);
                userEventHandler(onlineUser);
            },
            onUserOffline: (offlineUser) => {
                console.log(offlineUser);
                userEventHandler(offlineUser);
            },
        }));
        CometChat.addCallListener(callListenerId, new CometChat.CallListener({
            onIncomingCallReceived: (call) => {
                CometChat.CometChatHelper.getConversationFromMessage(call)
                    .then((conversation) => {
                    conversationListRef.current.updateList(conversation);
                })
                    .catch((e) => {
                    onError && onError(e);
                });
            },
            onOutgoingCallAccepted: (call) => {
                CometChat.CometChatHelper.getConversationFromMessage(call)
                    .then((conversation) => {
                    conversationListRef.current.updateList(conversation);
                })
                    .catch((e) => {
                    onError && onError(e);
                });
            },
            onOutgoingCallRejected: (call) => {
                CometChat.CometChatHelper.getConversationFromMessage(call)
                    .then((conversation) => {
                    conversationListRef.current.updateList(conversation);
                })
                    .catch((e) => {
                    onError && onError(e);
                });
            },
            onIncomingCallCancelled: (call) => {
                CometChat.CometChatHelper.getConversationFromMessage(call)
                    .then((conversation) => {
                    conversationListRef.current.updateList(conversation);
                })
                    .catch((e) => {
                    onError && onError(e);
                });
            }
        }));
        CometChat.addGroupListener(groupListenerId, new CometChat.GroupListener({
            onGroupMemberScopeChanged: (message) => {
                groupHandler(message);
            },
            onGroupMemberKicked: (message) => {
                groupHandler(message);
            },
            onGroupMemberLeft: (message) => {
                groupHandler(message);
            },
            onGroupMemberUnbanned: (message) => {
                groupHandler(message);
            },
            onGroupMemberBanned: (message) => {
                groupHandler(message);
            },
            onMemberAddedToGroup: (message) => {
                groupHandler(message);
            },
            onGroupMemberJoined: (message) => {
                groupHandler(message);
            }
        }));
        CometChat.addMessageListener(conversationListenerId, new CometChat.MessageListener({
            onTextMessageReceived: (textMessage) => {
                messageEventHandler(textMessage);
                CometChatSoundManager.play("incomingMessage");
            },
            onMediaMessageReceived: (mediaMessage) => {
                messageEventHandler(mediaMessage);
                CometChatSoundManager.play("incomingMessage");
            },
            onCustomMessageReceived: (customMessage) => {
                messageEventHandler(customMessage);
                CometChatSoundManager.play("incomingMessage");
            },
            onMessageDeleted: (deletedMessage) => {
                messageEventHandler(deletedMessage);
            },
            onMessageEdited: (editedMessage) => {
                messageEventHandler(editedMessage);
            },
            onMessagesRead: (messageReceipt) => {
                messageEventHandler(messageReceipt);
            },
            onMessagesDelivered: (messageReveipt) => {
                messageEventHandler(messageReveipt);
            },
            onTypingStarted: (typingIndicator) => {
                typingEventHandler(typingIndicator, true);
            },
            onTypingEnded: (typingIndicator) => {
                typingEventHandler(typingIndicator, false);
            },
        }));
        CometChatUIEventHandler.addConversationListener(conversationListenerId, {
            ccConversationDeleted: ({ conversation }) => {
                CometChat.deleteConversation(conversation.getConversationId(), conversation.getConversationType())
                    .then(res => {
                    conversationListRef.current.removeItemFromList(conversation);
                    removeItemFromSelectionList(conversation.getConversationId());
                })
                    .catch(err => {
                    console.log("Error", err);
                });
            }
        });
        CometChatUIEventHandler.addMessageListener(messageListenerId, {
            ccMessageSent: ({ message, status }) => {
                if (status == MessageStatusConstants.success) {
                    updateLastMessage(message);
                }
            },
            ccMessageRead: ({ message }) => {
                CometChat.CometChatHelper.getConversationFromMessage(message)
                    .then(conversation => {
                    let conver = conversationListRef.current.getListItem(conversation.getConversationId());
                    if (!conver)
                        return;
                    let lastMessageId = conver['lastMessage']['id'];
                    if (lastMessageId == message['id']) {
                        conversationListRef.current.updateList(conversation);
                    }
                });
            },
            ccMessageDeleted: ({ message }) => {
                CometChat.CometChatHelper.getConversationFromMessage(message)
                    .then(conversation => {
                    let conver = conversationListRef.current.getListItem(conversation.getConversationId());
                    if (!conver)
                        return;
                    let lastMessageId = conver['lastMessage']['id'];
                    if (lastMessageId == message['id']) {
                        conversationListRef.current.updateList(conversation);
                    }
                });
            },
            ccMessageEdited: ({ message }) => {
                CometChat.CometChatHelper.getConversationFromMessage(message)
                    .then(conversation => {
                    let conver = conversationListRef.current.getListItem(conversation.getConversationId());
                    if (!conver)
                        return;
                    let lastMessageId = conver['lastMessage']['id'];
                    if (lastMessageId == message['id']) {
                        conversationListRef.current.updateList(conversation);
                    }
                });
            }
        });
        CometChatUIEventHandler.addGroupListener(groupListenerId, {
            ccGroupDeleted: ({ group }) => {
                conversationListRef.current?.removeItemFromList(group['conversationId']);
                removeItemFromSelectionList(group['conversationId']);
            },
            ccGroupLeft: ({ leftGroup }) => {
                conversationListRef.current?.removeItemFromList(leftGroup['conversationId']);
                removeItemFromSelectionList(leftGroup['conversationId']);
            },
            ccGroupMemberKicked: ({ message, kickedFrom }) => {
                CometChat.CometChatHelper.getConversationFromMessage(message)
                    .then(conversation => {
                    conversationListRef.current?.updateList(conversation);
                })
                    .catch(e => {
                    onError && onError(e);
                });
            },
            ccGroupMemberBanned: ({ message }) => {
                groupHandler(message);
            },
            ccGroupMemberUnBanned: ({ message }) => {
                groupHandler(message);
            },
            ccOwnershipChanged: ({ message }) => {
                CometChat.CometChatHelper.getConversationFromMessage(message)
                    .then(conversation => {
                    conversationListRef.current?.updateList(conversation);
                })
                    .catch(e => {
                    onError && onError(e);
                });
            },
            ccGroupMemberAdded: ({ message }) => {
                CometChat.CometChatHelper.getConversationFromMessage(message)
                    .then(conversation => {
                    conversationListRef.current?.updateList(conversation);
                })
                    .catch(e => onError && onError(e));
            }
        });
        CometChatUIEventHandler.addUserListener(userListenerId, {
            ccUserBlocked: ({ user }) => {
                let conversation = conversationListRef.current?.getListItem(user['conversationId']);
                conversationListRef.current?.updateList(conversation);
            }
        });
        CometChatUIEventHandler.addCallListener(callListenerId, {
            ccOutgoingCall: ({ call }) => {
                CometChat.CometChatHelper.getConversationFromMessage(call)
                    .then((conversation) => {
                    conversationListRef.current.updateList(conversation);
                })
                    .catch((e) => {
                    onError && onError(e);
                });
            },
            ccCallAccepted: ({ call }) => {
                CometChat.CometChatHelper.getConversationFromMessage(call)
                    .then((conversation) => {
                    conversationListRef.current.updateList(conversation);
                })
                    .catch((e) => {
                    onError && onError(e);
                });
            },
            ccCallRejected: ({ call }) => {
                CometChat.CometChatHelper.getConversationFromMessage(call)
                    .then((conversation) => {
                    conversationListRef.current.updateList(conversation);
                })
                    .catch((e) => {
                    onError && onError(e);
                });
            },
            ccCallEnded: ({ call }) => {
                CometChat.CometChatHelper.getConversationFromMessage(call)
                    .then((conversation) => {
                    conversationListRef.current.updateList(conversation);
                })
                    .catch((e) => {
                    onError && onError(e);
                });
            }
        });
        return () => {
            CometChat.removeMessageListener(conversationListenerId);
            CometChat.removeUserListener(userListenerId);
            CometChat.removeCallListener(callListenerId);
            CometChat.removeGroupListener(groupListenerId);
            CometChatUIEventHandler.removeMessageListener(messageListenerId);
            CometChatUIEventHandler.removeConversationListener(conversationListenerId);
            CometChatUIEventHandler.removeGroupListener(groupListenerId);
            CometChatUIEventHandler.removeUserListener(userListenerId);
        };
    }, []);
    const ConversationItemView = ({ item: conversation }) => {
        if (!conversation)
            return null;
        //custom view check
        if (ListItemView)
            return ListItemView(conversation);
        const { conversationWith, conversationType } = conversation;
        const lastMessage = CometChatConversationUtils.getLastMessage(conversation);
        const { name, type, conversationId } = conversationWith || {};
        let image, backgroundColor, avatarIcon = conversationWith[conversationType == "group" ? 'icon' : "avatar"];
        if (type == GroupTypeConstants.password) {
            image = props?.protectedGroupIcon || passwordGroupIcon;
            backgroundColor = PASSWORD_GROUP_COLOR;
        }
        if (type == GroupTypeConstants.private) {
            image = props?.privateGroupIcon || privateGroupIcon;
            backgroundColor = PRIVATE_GROUP_COLOR;
        }
        if (conversationWith.status == "online") {
            backgroundColor = theme.palette.getSuccess();
        }
        if (selecting) {
            let index = selectedConversation.findIndex((value) => value.conversationWith.conversationId == conversationId);
            if (index >= 0) {
                image = rightTickIcon;
                backgroundColor = theme?.palette.getPrimary();
            }
        }
        return <CometChatListItem id={conversation.conversationId} avatarName={name} avatarURL={avatarIcon} hideSeparator={hideSeparator} SubtitleView={(SubtitleView && SubtitleView.bind(this, conversation)) || (() => <LastMessageView conversations={conversation} typingText={conversation?.['lastMessage']?.['typing']}/>)} title={name} statusIndicatorIcon={image} statusIndicatorColor={disableUsersPresence ? "transparent" : backgroundColor} listItemStyle={_listItemStyle} TailView={() => <TailView customPattern={() => datePattern && props.datePattern(conversation)} timestamp={lastMessage && lastMessage['updatedAt'] || conversationWith['createdAt'] || conversationWith['lastActiveAt']} unreadCount={conversation.unreadMessageCount}/>} avatarStyle={_avatarStyle} statusIndicatorStyle={_statusIndicatorStyle} onPress={conversationClicked.bind(this, conversation)} onLongPress={conversationLongPressed.bind(this, conversation)} options={() => options ? options(conversation) : getDefaultOptions(conversation)}/>;
    };
    /**
     * Component template
     */
    return (<View style={Style.container}>
            <ConfirmDeletionDialog />
            <CometChatList AppBarOptions={AppBarOption} onError={onError} ref={conversationListRef} requestBuilder={conversationsRequestBuilder || new CometChat.ConversationsRequestBuilder().setLimit(30)} title={title} hideSearch={true} hideSubmitIcon={hideSubmitIcon} listItemKey={"conversationId"} LoadingStateView={LoadingStateView} ListItemView={ConversationItemView} EmptyStateView={EmptyStateView ? EmptyStateView : () => <EmptyView />} ErrorStateView={ErrorStateView ? ErrorStateView : () => <ErrorView />} onBack={onBack} backButtonIcon={backButtonIcon} showBackButton={showBackButton} onSelection={(items) => {
            onSelection && onSelection(items);
            setSelecting(false);
            setSelectedConversations([]);
        }} SubtitleView={props.SubtitleView} disableUsersPresence={disableUsersPresence} options={options} hideSeparator={hideSeparator} listStyle={{ ..._style, background: _style.backgroundColor }} selectionMode={selecting ? selectionMode : "none"} hideError={hideError}/>
        </View>);
};
//# sourceMappingURL=CometChatConversations.js.map