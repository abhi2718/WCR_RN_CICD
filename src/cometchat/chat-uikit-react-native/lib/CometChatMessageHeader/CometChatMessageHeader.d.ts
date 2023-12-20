import { ViewStyle, StyleProp } from 'react-native';
import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { ImageType } from '../shared';
import { ListItemStyleInterface, AvatarStyleInterface } from '../shared';
import { StatusIndicatorStyleInterface } from '../shared/views/CometChatStatusIndicator/StatusIndicatorStyle';
import { BorderStyleInterface, FontStyleInterface } from '../shared/base';
export interface MessageHeaderStyleInterface {
    width?: string | number;
    height?: string | number;
    backgroundColor?: string;
    border?: BorderStyleInterface;
    borderRadius?: number;
    backIconTint?: string;
    onlineStatusColor?: string;
    subtitleTextColor?: string;
    subtitleTextFont?: FontStyleInterface;
    typingIndicatorTextColor?: string;
    typingIndicatorTextFont?: FontStyleInterface;
}
export interface CometChatMessageHeaderInterface {
    /**
     *
     * Function which have {user}/{group} as prop and returns a JSX Element to render in place of Subtitle View
     */
    SubtitleView?: ({ user, group, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    /**
     *
     * @type {boolean}
     * To disable user presence indicator
     */
    disableUsersPresence?: boolean;
    /**
     *
     * @type {boolean}
     * To disable typing indicator
     */
    disableTyping?: boolean;
    /**
     *
     * @type {ImageType}
     * To pass custom icon for protected group
     */
    protectedGroupIcon?: ImageType;
    /**
     *
     * @type {ImageType}
     * To pass custom icon for private group
     */
    privateGroupIcon?: ImageType;
    /**
     *
     *   Function which have {user}/{group} as prop and returns a JSX Element to render in place of AppBar/Menu
     */
    AppBarOptions?: ({ user, group, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    /**
     *
     * @type {MessageHeaderStyleInterface}
     * To pass custom styling for header
     */
    style?: MessageHeaderStyleInterface;
    /**
     *
     * @type {CometChat.User}
     *   To pass user object
     */
    user?: CometChat.User;
    /**
     *
     * @type {CometChat.Group}
     *   To pass group object
     */
    group?: CometChat.Group;
    /**
     *
     * @type {ImageType}
     *  To pass custom icon for back button
     */
    backButtonIcon?: ImageType;
    /**
     *
     * @type {boolean}
     * To gide back button
     */
    hideBackIcon?: boolean;
    /**
     *
     *Function which have user/group as prop and returns a JSX Element to render in place of ListItem View
     */
    ListItemView?: ({ user, group, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    /**
     *
     * @type {Function}
     *  Function which will trigger when user press back button
     */
    onBack?: () => void;
    /**
     *
     * @type {ListItemStyleInterface}
     * To pass custom styling for list item
     */
    listItemStyle?: ListItemStyleInterface;
    /**
     *
     * @type {AvatarStyleInterface}
     * To pass custom styling for avatar in list item
     */
    avatarStyle?: AvatarStyleInterface;
    /**
     *
     * @type {StatusIndicatorStyleInterface}
     * To pass custom styling for status indicator in list item
     */
    statusIndicatorStyle?: StatusIndicatorStyleInterface;
    /**
     *
     * @type {StyleProp<ViewStyle>}
     *  To pass custom styling for headViewContainer in list item
     */
    headViewContainerStyle?: StyleProp<ViewStyle>;
    /**
     *
     * @type {StyleProp<ViewStyle>}
     * To pass custom styling for bodyViewContainerStyle in list item
     */
    bodyViewContainerStyle?: StyleProp<ViewStyle>;
    /**
     *
     * @type {StyleProp<ViewStyle>}
     * To pass custom styling for tailViewContainerStyle in list item
     */
    tailViewContainerStyle?: StyleProp<ViewStyle>;
}
export declare const CometChatMessageHeader: {
    (props: CometChatMessageHeaderInterface): React.JSX.Element;
    defaultProps: {
        user: any;
        group: any;
        style: {};
    };
};
