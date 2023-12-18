import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatListProps, CometChatListStylesInterface, CometChatOptions } from '../shared';
import { ImageType } from '../shared';
export interface CometChatBannedMembersInterface extends Omit<CometChatListProps, 'requestBuilder' | 'listStyle' | 'title' | 'listItemKey' | 'options'> {
    bannedMembersRequestBuilder?: CometChat.BannedMembersRequestBuilder;
    group: CometChat.Group;
    bannedMemberStyle?: CometChatListStylesInterface;
    unbanIcon?: ImageType;
    title?: string;
    /**
     *
     *
     * @description function which returns an array of CometChatOptions
     */
    options?: (user: CometChat.User) => Array<CometChatOptions>;
}
export declare const CometChatBannedMembers: (props: CometChatBannedMembersInterface) => React.JSX.Element;
