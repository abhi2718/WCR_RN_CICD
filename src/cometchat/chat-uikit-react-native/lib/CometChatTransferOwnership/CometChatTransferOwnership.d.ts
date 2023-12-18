import React from 'react';
import { CometChatGroupsMembersInterface } from '../CometChatGroupMembers';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { GroupMembersStyleInterface } from '../CometChatGroupMembers/GroupMemberStyle';
import { GroupMemberConfigurationInterface } from '../CometChatGroupMembers/GroupMemberConfiguration';
export interface CometChatTransferOwnershipInterface extends Omit<CometChatGroupsMembersInterface, 'AppBarOptions' | 'options' | 'selectionMode' | 'onSelection' | 'hideError' | 'onItemPress' | 'onItemLongPress' | 'groupScopeStyle' | 'TailView' | 'title'> {
    /**
     *
     *
     * @type {string}
     * @description Title of the component
     */
    title?: string;
    /**
     *
     *
     * @description callback(group: CometChat.Group, ownershipTransferredMember: CometChat.User) => void invoked upon clicking on the submit button
     */
    onTransferOwnership?: (group: CometChat.Group, ownershipTransferredMember: CometChat.User) => void;
    /**
     *
     *
     * @type {GroupMembersStyleInterface}
     * @description Styling properties of transferOwnership
     */
    transferOwnershipStyle?: GroupMembersStyleInterface;
    /**
     *
     *
     * @type {GroupMemberConfigurationInterface}
     * @description Configurable properties of GroupMembers Components
     */
    groupMembersConfiguration?: GroupMemberConfigurationInterface;
}
export declare const CometChatTransferOwnership: {
    (props: CometChatTransferOwnershipInterface): React.JSX.Element;
    defaultProps: {
        group: {};
        title: any;
    };
};
