import { DataSource, DataSourceDecorator } from '../../shared/framework';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatMessageOption } from '../../shared/modals';
import React from 'react';
import { MessageBubbleAlignmentType } from '../../shared/constants/UIKitConstants';
import { ReactionsConfigurationInterface } from './ReactionsExtension';
export declare class ReactionsExtensionDecorator extends DataSourceDecorator {
    messageObject: CometChat.BaseMessage;
    loggedInUser: any;
    imageModerationConfiguration?: ReactionsConfigurationInterface;
    constructor(dataSource: DataSource, imageModerationConfiguration?: ReactionsConfigurationInterface);
    getId(): string;
    getBottomView(messageObject: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType): React.JSX.Element;
    getReactions(): CometChatMessageOption;
    getCommonOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): CometChatMessageOption[];
    /**
     *
     * @param {*} message
     * @param {*} emoji
     * Calls extension reaction to Messages
     */
    reactToMessages: (emoji: any, messageObj: any) => void;
}
