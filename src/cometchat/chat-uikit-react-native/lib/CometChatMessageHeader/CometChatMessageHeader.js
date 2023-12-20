import { View, Text, TouchableOpacity, Image,
//@ts-ignore
 } from 'react-native';
import React, { useEffect, useState, useRef, useContext } from 'react';
import { CometChatContext, CometChatListItem } from '../shared';
import { localize } from '../shared';
import { ICONS } from './resources';
import { styles } from './styles';
import { listners } from './listners';
//@ts-ignore
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { PASSWORD_GROUP_COLOR, PRIVATE_GROUP_COLOR, UserStatusConstants, } from '../shared/constants/UIKitConstants';
import { CometChatUIEventHandler } from '../shared/events/CometChatUIEventHandler/CometChatUIEventHandler';
export const CometChatMessageHeader = (props) => {
    const { theme } = useContext(CometChatContext);
    const userStatusListenerId = 'user_status_' + new Date().getTime();
    const msgTypingListenerId = 'message_typing_' + new Date().getTime();
    const groupListenerId = 'head_group_' + new Date().getTime();
    const ccGroupMemberKickedId = 'ccGroupMemberKicked_' + new Date().getTime();
    const ccGroupMemberBannedId = 'ccGroupMemberBanned_' + new Date().getTime();
    const ccGroupMemberAddedId = 'ccGroupMemberAdded_' + new Date().getTime();
    const ccOwnershipChangedId = 'ccOwnershipChanged_' + new Date().getTime();
    const { SubtitleView, disableUsersPresence, disableTyping, protectedGroupIcon, privateGroupIcon, AppBarOptions, style, user, group, backButtonIcon, hideBackIcon, ListItemView, onBack, listItemStyle, avatarStyle, statusIndicatorStyle, headViewContainerStyle, bodyViewContainerStyle, tailViewContainerStyle, } = props;
    const [groupObj, setGroupObj] = useState(group);
    const [userStatus, setUserStatus] = useState(user ? user.getStatus() : '');
    const [groupMemberCount, setGroupMemberCount] = useState(group ? group.getMembersCount() : 0);
    const [typingText, setTypingText] = useState('');
    const receiverTypeRef = useRef(user
        ? CometChat.RECEIVER_TYPE.USER
        : group
            ? CometChat.RECEIVER_TYPE.GROUP
            : null);
    useEffect(() => {
        setGroupObj(group);
    }, [group]);
    useEffect(() => {
        setUserStatus(user ? user.getStatus() : '');
    }, [user]);
    const BackButton = () => {
        return (<TouchableOpacity style={styles.backButtonStyle} onPress={onBack}>
        <Image source={typeof backButtonIcon == 'string'
                ? { uri: backButtonIcon }
                : typeof backButtonIcon == 'object' ||
                    typeof backButtonIcon == 'number'
                    ? backButtonIcon
                    : ICONS.BACK} style={[
                styles.backButtonIconStyle,
                { tintColor: style.backIconTint ?? theme.palette.getPrimary() },
            ]}/>
      </TouchableOpacity>);
    };
    const SubtitleViewFnc = () => {
        if (!disableTyping && typingText !== '')
            return (<Text style={[
                    {
                        color: style.typingIndicatorTextColor ?? theme.palette.getAccent600(),
                    },
                    style.typingIndicatorTextFont ?? theme.typography.text1,
                ]}>
          {typingText}
        </Text>);
        if (disableUsersPresence)
            return null;
        return (<Text style={[
                { color: style.subtitleTextColor ?? theme.palette.getAccent600() },
                style.subtitleTextFont ?? theme.typography.text1,
            ]}>
        {receiverTypeRef.current === CometChat.RECEIVER_TYPE.GROUP &&
                (groupObj['membersCount'] || groupObj['membersCount'] === 0)
                ? `${groupObj['membersCount']} ${localize('MEMBERS')}`
                : receiverTypeRef.current === CometChat.RECEIVER_TYPE.USER
                    ? userStatus === UserStatusConstants.online
                        ? localize('ONLINE')
                        : localize('OFFLINE')
                    : ''}
      </Text>);
    };
    const handleUserStatus = (userDetails) => {
        if (userDetails.uid === user.getUid())
            setUserStatus(userDetails.status);
    };
    const msgTypingIndicator = (typist, status) => {
        if (receiverTypeRef.current === CometChat.RECEIVER_TYPE.GROUP &&
            receiverTypeRef.current === typist.receiverType &&
            groupObj?.getGuid() === typist.receiverId) {
            setTypingText(status === 'typing'
                ? `${typist.sender.name} ${localize('IS_TYPING')}`
                : '');
        }
        else if (receiverTypeRef.current === CometChat.RECEIVER_TYPE.USER &&
            receiverTypeRef.current === typist.receiverType &&
            user?.getUid() === typist.sender.uid) {
            setTypingText(status === 'typing' ? localize('TYPING') : '');
        }
    };
    const handleGroupListener = (groupDetails) => {
        if (groupDetails?.guid === groupObj.getGuid() && groupDetails.membersCount) {
            setGroupMemberCount(parseInt(groupDetails.membersCount));
        }
    };
    useEffect(() => {
        if (user) {
            listners.addListener.userListener({
                userStatusListenerId,
                handleUserStatus,
            });
            receiverTypeRef.current = CometChat.RECEIVER_TYPE.USER;
        }
        if (groupObj) {
            listners.addListener.groupListener({
                groupListenerId,
                handleGroupListener,
            });
            receiverTypeRef.current = CometChat.RECEIVER_TYPE.GROUP;
        }
        listners.addListener.messageListener({
            msgTypingListenerId,
            msgTypingIndicator,
        });
        return () => {
            if (groupObj)
                listners.removeListner.removeGroupListener({ groupListenerId });
            if (user) {
                listners.removeListner.removeUserListener({ userStatusListenerId });
            }
            listners.removeListner.removeMessageListener({ msgTypingListenerId });
        };
    }, []);
    const handleGroupMemberKicked = ({ message, kickedMember, kickedBy, kickedFrom, }) => {
        setGroupObj(kickedFrom);
    };
    const handleGroupMemberBanned = ({ message, kickedUser, kickedBy, kickedFrom, }) => {
        setGroupObj(kickedFrom);
    };
    const handleGroupMemberAdded = ({ addedBy, message, usersAdded, userAddedIn, }) => {
        setGroupObj(userAddedIn);
    };
    const handleOwnershipChanged = ({ group, newOwner, message }) => {
        setGroupObj(group);
    };
    useEffect(() => {
        CometChatUIEventHandler.addGroupListener(groupListenerId, {
            ccGroupMemberKicked: (item) => handleGroupMemberKicked(item),
            ccGroupMemberBanned: (item) => handleGroupMemberBanned(item),
            ccGroupMemberAdded: (item) => handleGroupMemberAdded(item),
            ccOwnershipChanged: (item) => handleOwnershipChanged(item),
        });
        return () => {
            CometChatUIEventHandler.removeGroupListener(groupListenerId);
        };
    }, []);
    return (<View style={[
            { flexDirection: 'row' },
            {
                width: style.width ?? 'auto',
                height: style.height ?? 'auto',
                backgroundColor: style.backgroundColor ?? theme.palette.getBackgroundColor(),
                borderRadius: style.borderRadius ?? 0,
            },
            style.border ?? {},
        ]}>
      {!hideBackIcon && <BackButton />}
      <View style={{ flex: 1 }}>
        {ListItemView ? (<ListItemView />) : (<CometChatListItem id={user ? user.getUid() : groupObj ? groupObj.getGuid() : undefined} title={user ? user.getName() : groupObj ? groupObj.getName() : ''} avatarName={user ? user.getName() : groupObj ? groupObj.getName() : ''} avatarURL={user ? user.getAvatar() ? { uri: user.getAvatar() } : undefined : groupObj ? groupObj.getIcon() ? { uri: groupObj.getIcon() } : undefined : undefined} SubtitleView={SubtitleView
                ? () => (<SubtitleView {...(user
                    ? { user }
                    : groupObj
                        ? { group: groupObj }
                        : {})}/>)
                : SubtitleViewFnc} bodyViewContainerStyle={{
                marginLeft: 8,
                ...bodyViewContainerStyle,
            }} listItemStyle={{
                titleFont: { fontWeight: '700' },
                backgroundColor: style.backgroundColor,
                ...listItemStyle,
            }} statusIndicatorColor={disableUsersPresence
                ? 'transparent'
                : user && user.getStatus() === "online"
                    ? style.onlineStatusColor || theme.palette.getSuccess()
                    : 'transparent'} statusIndicatorStyle={groupObj
                ? {
                    height: 15,
                    width: 15,
                    backgroundColor: groupObj.getType() === CometChat.GROUP_TYPE.PASSWORD
                        ? PASSWORD_GROUP_COLOR // Note: Need to add this in palette
                        : groupObj.getType() === CometChat.GROUP_TYPE.PRIVATE
                            ? PRIVATE_GROUP_COLOR // Note: Need to add this in palette
                            : '',
                    borderRadius: 15,
                    ...statusIndicatorStyle,
                }
                : { ...statusIndicatorStyle }} statusIndicatorIcon={groupObj
                ? groupObj.getType() === CometChat.GROUP_TYPE.PASSWORD
                    ? protectedGroupIcon
                        ? protectedGroupIcon
                        : ICONS.PROTECTED
                    : groupObj.getType() === CometChat.GROUP_TYPE.PRIVATE
                        ? privateGroupIcon
                            ? privateGroupIcon
                                ? privateGroupIcon
                                : ICONS.PRIVATE
                            : null
                        : null
                : null} TailView={AppBarOptions
                ? () => (<AppBarOptions {...(user
                    ? { user }
                    : groupObj
                        ? { group: groupObj }
                        : {})}/>)
                : null} headViewContainerStyle={headViewContainerStyle} tailViewContainerStyle={tailViewContainerStyle} avatarStyle={avatarStyle}/>)}
      </View>
    </View>);
};
CometChatMessageHeader.defaultProps = {
    user: null,
    group: null,
    style: {},
};
//# sourceMappingURL=CometChatMessageHeader.js.map