import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CometChatGroupsMembers, } from '../CometChatGroupMembers';
//@ts-ignore
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatUIEvents } from '../shared/events';
import { GroupMemberScope } from '../shared/constants/UIKitConstants';
import { CometChatUIEventHandler } from '../shared/events/CometChatUIEventHandler/CometChatUIEventHandler';
import { localize } from '../shared';
export const CometChatTransferOwnership = (props) => {
    const { title = localize("TRANSFER_OWNERSHIP"), group, onTransferOwnership, transferOwnershipStyle, onError, onBack, ...newProps } = props;
    const [loggedInUser, setLoggedInUser] = useState();
    const transferOwnership = (members) => {
        if (!members.length)
            return;
        let member = members[0];
        let GUID = member.guid;
        let UID = member.uid;
        CometChat.transferGroupOwnership(GUID, UID).then((ownershipTransferred) => {
            console.log('Successfully transferred ownership of the group.', ownershipTransferred);
            group['scope'] = GroupMemberScope.admin;
            group['owner'] = UID;
            onTransferOwnership && onTransferOwnership(group, member);
            //message parameter removed
            CometChatUIEventHandler.emitGroupEvent(CometChatUIEvents.ccOwnershipChanged, {
                group,
                newOwner: member,
            });
            onBack && onBack();
        }, (error) => {
            onError && onError(error);
            console.log('Could not transfer ownership of the group: ', error);
        });
    };
    useEffect(() => {
        CometChat.getLoggedinUser().then((loggedUser) => {
            setLoggedInUser(loggedUser);
        }, (error) => {
            onError && onError(error);
        });
    }, []);
    return (<View style={{ flex: 1 }}>
      <CometChatGroupsMembers title={title} group={group} TailView={(item) => {
            return (<View>
              <Text>
                {loggedInUser.getUid() === item.owner
                    ? GroupMemberScope.owner
                    : item.scope}
              </Text>
            </View>);
        }} selectionMode={'single'} onSelection={transferOwnership} onBack={onBack} {...newProps}/>
    </View>);
};
CometChatTransferOwnership.defaultProps = {
    group: {},
    title: localize("Transfer Ownership"), // Note: Update after localization is updated
};
//# sourceMappingURL=CometChatTransferOwnership.js.map