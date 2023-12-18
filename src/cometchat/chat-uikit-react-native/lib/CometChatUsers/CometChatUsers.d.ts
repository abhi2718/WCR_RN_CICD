import { ListRenderItem } from 'react-native';
import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatListActionsInterface, CometChatListProps, CometChatListStylesInterface, CometChatOptions } from '../shared';
export interface CometChatUsersInterface extends Omit<CometChatListProps, 'requestBuilder' | 'listStyle' | 'SubtitleView' | 'TailView' | 'disableUsersPresence' | 'ListItemView' | 'onItemPress' | 'onItemLongPress' | 'options' | 'listItemKey' | 'onSelection'> {
    /**
     *
     *
     * @description function which returns an array of CometChatOptions
     */
    options?: (user: CometChat.User) => Array<CometChatOptions>;
    /**
     *
     *
     * @description callback function when user press a list item
     */
    onItemPress?: (user: CometChat.User) => void;
    /**
     *
     *
     * @description callback function when user long press a list item
     */
    onItemLongPress?: (user: CometChat.User) => void;
    /**
     *
     *
     * @description Selected Users list
     */
    onSelection?: (list: CometChat.User[]) => void;
    /**
     *
     * @type {CometChat.UsersRequestBuilder}
     * pass user request object
     */
    usersRequestBuilder?: CometChat.UsersRequestBuilder;
    /**
     *
     * @type {CometChatListStylesInterface}
     * pass custom styling for user
     */
    usersStyle?: CometChatListStylesInterface;
    /**
     *
     * Function which have user object as prop and takes a to render in place of subtitle view in list item
     *
     */
    SubtitleView?: (item: CometChat.User) => JSX.Element;
    /**
     *
     * Function which have user object as prop and returns a JSX Element to render in place of tail view in list item
     *
     */
    TailView?: (item: CometChat.User) => JSX.Element;
    /**
     *
     * @type {boolean}
     * To disable user presence indicator
     */
    disableUsersPresence?: boolean;
    /**
     *
     * Function which have {item: userObject, index: number } as prop and returns a JSX Element to render in place of tail view in list item
     *
     */
    ListItemView?: ListRenderItem<CometChat.User>;
}
export interface CometChatUsersActionsInterface extends CometChatListActionsInterface {
}
export declare const CometChatUsers: React.ForwardRefExoticComponent<CometChatUsersInterface & React.RefAttributes<CometChatUsersActionsInterface>>;
