//@ts-ignore
import { View } from 'react-native';
import React, { useRef, useEffect } from 'react';
//@ts-ignore
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatList, } from '../shared';
import { CometChatUIEventHandler } from '../shared/events/CometChatUIEventHandler/CometChatUIEventHandler';
export const CometChatUsers = React.forwardRef((props, ref) => {
    const userListenerId = 'userStatus_' + new Date().getTime();
    const ccUserBlockedId = 'ccUserBlocked_' + new Date().getTime();
    const ccUserUnBlockedId = 'ccUserBlocked_' + new Date().getTime();
    const { usersRequestBuilder, usersStyle, ...newProps } = props;
    const userRef = useRef(null);
    useEffect(() => {
        CometChat.addUserListener(userListenerId, new CometChat.UserListener({
            onUserOnline: (onlineUser) => {
                /* when someuser/friend comes online, user will be received here */
                userRef.current.updateList(onlineUser);
            },
            onUserOffline: (offlineUser) => {
                /* when someuser/friend went offline, user will be received here */
                userRef.current.updateList(offlineUser);
            },
        }));
        return CometChat.removeUserListener(userListenerId);
    }, []);
    const handleccUserBlocked = ({ user }) => {
        userRef.current.updateList({
            ...user,
            blockedByMe: true,
            hasBlockedMe: true,
        });
    };
    const handleccUserUnBlocked = ({ user }) => {
        userRef.current.updateList({
            ...user,
            blockedByMe: false,
            hasBlockedMe: false,
        });
    };
    useEffect(() => {
        CometChatUIEventHandler.addUserListener(userListenerId, {
            ccUserBlocked: (item) => handleccUserBlocked(item),
            ccUserUnBlocked: (item) => handleccUserUnBlocked(item),
        });
        return () => {
            CometChatUIEventHandler.removeUserListener(userListenerId);
        };
    }, []);
    return (<View style={{ flex: 1, width: '100%', height: '100%' }}>
      <CometChatList listItemKey="uid" ref={ref} title={'Users'} requestBuilder={usersRequestBuilder} listStyle={usersStyle} {...newProps}/>
    </View>);
});
CometChatUsers.defaultProps = {
    usersRequestBuilder: new CometChat.UsersRequestBuilder()
        .setLimit(30)
        .hideBlockedUsers(true)
        .setRoles([])
        .friendsOnly(false)
        .setStatus('')
        .setTags([])
        .setUIDs([]),
};
//# sourceMappingURL=CometChatUsers.js.map