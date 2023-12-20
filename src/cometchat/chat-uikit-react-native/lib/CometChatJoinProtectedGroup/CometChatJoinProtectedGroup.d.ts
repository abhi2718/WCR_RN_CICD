import React from 'react';
import { BorderStyleInterface, FontStyleInterface, ImageType } from '../shared';
import { CometChat } from '@cometchat/chat-sdk-react-native';
export interface JoinProtectedGroupStyleInterface {
    closeIconTint?: string;
    joinIconTint?: string;
    inputBorderColor?: string;
    titleStyle?: FontStyleInterface;
    descriptionTextStyle?: FontStyleInterface;
    errorTextStyle?: FontStyleInterface;
    passwordInputTextStyle?: FontStyleInterface;
    passwordPlaceholderStyle?: FontStyleInterface;
    width?: string | number;
    height?: string | number;
    background?: string;
    border?: BorderStyleInterface;
    borderRadius?: number;
}
export interface CometChatJoinProtectedGroupInterface {
    /**
     *
     *
     * @type {CometChat.Group}
     * @description CometChat SDK’s group object
     */
    group: CometChat.Group;
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
     * @description Icon of the join icon
     */
    joinIcon?: ImageType;
    /**
     *
     *
     * @type {ImageType}
     * @description Icon of the close icon
     */
    closeIcon?: ImageType;
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
     * @description Description of the component
     */
    description?: string;
    /**
     *
     * @type {(group: CometChat.Group, password: string) => void}
     * @description Function triggered when user clicks on the join button
     */
    onJoinClick?: ({ group, password, }: {
        group: CometChat.Group;
        password: string;
    }) => void;
    /**
     *
     *
     * @type {boolean}
     * @description Whether the component has error
     */
    hasError?: boolean;
    /**
     *
     *
     * @type {string}
     * @description CometChatJoinProtectedGroupInterface
     */
    errorText?: string;
    /**
     *
     *
     * @description Text to be displayed when an error has occured
     */
    onError?: (error: CometChat.CometChatException) => void;
    /**
     *
     *
     * @description function triggered when user clicks on the back icon/button
     */
    onBack?: () => void;
    /**
     *
     *
     * @type {JoinProtectedGroupStyleInterface}
     * @description Styling properties of the component
     */
    joinProtectedGroupStyle?: JoinProtectedGroupStyleInterface;
}
export declare const CometChatJoinProtectedGroup: {
    (props: CometChatJoinProtectedGroupInterface): React.JSX.Element;
    defaultProps: {
        hasError: boolean;
        joinProtectedGroupStyle: {};
    };
};
