import React from 'react';
import { BorderStyleInterface, FontStyleInterface, ImageType } from '../shared';
import { MessageComposerConfigurationInterface } from '../CometChatMessageComposer';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { MessageListConfigurationInterface } from '../CometChatMessageList/MessageListConfiguration';
export interface CometChatThreadedMessagesInterface {
    /**
     *
     *
     * @type {CometChat.BaseMessage}
     * @description CometChat SDK’s message object
     */
    parentMessage: CometChat.BaseMessage;
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
     * @description Icon for the close icon
     */
    closeIcon?: ImageType;
    /**
     *
     *
     * @description callback(messageObject) —> bubble view (combination of header+content+footer)
     */
    BubbleView: (messageObject: CometChat.BaseMessage) => JSX.Element;
    /**
     *
     *
     * @description callback(messageObject) —> reply count + (share, forward) view
     */
    MessageActionView?: (messageObject: CometChat.BaseMessage) => JSX.Element;
    /**
     *
     *
     * @type {MessageListConfigurationInterface}
     * @description Configurable properties of MessageList Component
     */
    messageListConfiguration?: MessageListConfigurationInterface;
    /**
     *
     *
     * @type {MessageComposerConfigurationInterface}
     * @description Configurable properties of MessageComposer Component
     */
    messageComposerConfiguration?: MessageComposerConfigurationInterface;
    /**
     *
     *
     * @description callBack invoked upon clicking the close button
     */
    onClose?: () => void;
    /**
     *
     *
     * @description callBack invoked upon encountering an error in the component
     */
    onError?: (error: CometChat.CometChatException) => void;
    /**
     *
     *
     * @type {ThreadedMessagesStyleInterface}
     * @description Styling properties of the compone
     */
    threadedMessagesStyle: ThreadedMessagesStyleInterface;
}
export interface ThreadedMessagesStyleInterface {
    width?: number | string;
    height?: number | string;
    background?: number | string;
    border?: BorderStyleInterface;
    borderRadius?: number;
    titleStyle: FontStyleInterface;
    closeIconTint: string;
}
export declare const CometChatThreadedMessages: {
    (props: CometChatThreadedMessagesInterface): React.JSX.Element;
    defaultProps: {
        title: any;
        threadedMessagesStyle: {};
        parentMessage: {};
    };
};
