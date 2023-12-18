import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatUsersInterface } from '../CometChatUsers';
import { CometChatListStylesInterface } from '../shared';
export interface CometChatAddMembersInterface extends Omit<CometChatUsersInterface, 'title' | 'listItemKey' | 'listStyle'> {
    group: CometChat.Group;
    title?: string;
    addMembersStyle?: CometChatListStylesInterface;
}
export declare const CometChatAddMembers: (props: CometChatAddMembersInterface) => React.JSX.Element;
