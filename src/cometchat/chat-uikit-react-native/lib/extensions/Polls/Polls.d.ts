import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { BorderStyleInterface, FontStyleInterface, ImageType } from '../../shared/base';
export interface PollsStyleInterface {
    titleTextStyle?: FontStyleInterface;
    closeIconTint?: string;
    createIconTint?: string;
    questionPlaceholderTextStyle?: FontStyleInterface;
    answersPlaceholderTextStyle?: FontStyleInterface;
    questionInputTextStyle?: FontStyleInterface;
    answersInputTextStyle?: FontStyleInterface;
    width?: string | number;
    height?: string | number;
    backgroundColor?: string;
    border?: BorderStyleInterface;
    borderRadius?: number;
}
export interface CometChatCreatePollInterface {
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
    questionPlaceholderText?: string;
    /**
     *
     * @type {(error: CometChat.CometChatException) => void}
     * @description Method triggered when an error is encountered in the component
     */
    onError?: (error: CometChat.CometChatException) => void;
    /**
     *
     *
     * @type {PollsStyleInterface}
     * @description Styling properties of the component
     */
    createPollsStyle?: PollsStyleInterface;
    /**
     *
     *
     * @type {CometChat.User}
     * @description CometChatCreatePollInterface
     */
    user?: CometChat.User;
    /**
     *
     *
     * @type {CometChat.Group}
     * @description CometChatCreatePollInterface
     */
    group?: CometChat.Group;
    /**
     *
     *
     * @type {()=>void}
     * @description callback when click on close Icon
     */
    onClose?: () => void;
    /**
     *
     *
     * @type {string}
     * @description PlaceHolder text for answers TextInput
     */
    answerPlaceholderText?: string;
    /**
     *
     *
     * @type {string}
     * @description Error message when answers fields are empty
     */
    answerHelpText?: string;
    /**
     *
     *
     * @type {string}
     * @description Text for Add answers button
     */
    addAnswerText?: string;
    /**
     *
     *
     * @type {ImageType}
     * @description Custom Delete Icon
     */
    deleteIcon?: ImageType;
    /**
     *
     *
     * @type {ImageType}
     * @description Custom Create Poll icon
     */
    createPollIcon?: ImageType;
    /**
     *
     * @type {number}
     * @desciption Default no. of Answers
     */
    defaultAnswers?: number;
}
export declare const CometChatCreatePoll: {
    (props: CometChatCreatePollInterface): React.JSX.Element;
    defaultProps: {
        title: string;
        questionPlaceholderText: any;
        answerPlaceholderText: any;
        createPollsStyle: {};
        defaultAnswers: number;
    };
};
