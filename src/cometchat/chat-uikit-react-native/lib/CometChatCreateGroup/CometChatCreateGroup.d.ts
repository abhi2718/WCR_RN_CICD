import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { BorderStyleInterface, FontStyleInterface, ImageType } from '../shared';
export interface CreateGroupStyleInterface {
    titleTextStyle?: FontStyleInterface;
    closeIconTint?: string;
    createIconTint?: string;
    selectedTabColor?: string;
    tabColor?: string;
    selectedTabTextStyle?: FontStyleInterface;
    tabTextStyle?: FontStyleInterface;
    namePlaceholderTextStyle?: FontStyleInterface;
    passwordPlaceholderTextStyle?: FontStyleInterface;
    nameInputTextStyle?: FontStyleInterface;
    passwordInputTextStyle?: FontStyleInterface;
    width?: string | number;
    height?: string | number;
    background?: string;
    border?: BorderStyleInterface;
    borderRadius?: number;
}
export interface CometChatCreateGroupInterface {
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
     * @type {ImageType}
     * @description Close icon
     */
    closeIcon?: ImageType;
    /**
     *
     *
     * @type {ImageType}
     * @description Create icon
     */
    createIcon?: ImageType;
    /**
     *
     *
     * @type {string}
     * @description Text to appear in the input when no value is set
     */
    passwordPlaceholderText?: string;
    /**
     *
     *
     * @type {string}
     * @description Text to appear in the input when no value is set
     */
    namePlaceholderText?: string;
    /**
     *
     *
     * @type {boolean}
     * @description Whether the close button is disabled
     */
    disableCloseButton?: boolean;
    /**
     *
     * @type {(groupName:string, groupType:string, password:string) => void}
     * @description Method triggered when user clicks on the create button
     */
    onCreatePress?: (groupName: string, groupType: string, password: string) => void;
    /**
     *
     * @type {(error: CometChat.CometChatException) => void}
     * @description Method triggered when an error is encountered in the component
     */
    onError?: (error: CometChat.CometChatException) => void;
    /**
     *
     * @type {() => void}
     * @description Method triggered when user clicks on the back button
     */
    onBack?: () => void;
    /**
     *
     *
     * @type {CreateGroupStyleInterface}
     * @description Styling properties of the component
     */
    createGroupStyle?: CreateGroupStyleInterface;
}
export declare const CometChatCreateGroup: {
    (props: CometChatCreateGroupInterface): React.JSX.Element;
    defaultProps: {
        namePlaceholderText: any;
        passwordPlaceholderText: any;
        createGroupStyle: {};
    };
};
