import { DataSource, DataSourceDecorator } from '../../shared/framework';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { MessageBubbleAlignmentType } from '../../shared/constants/UIKitConstants';
import { CometChatTheme } from '../../shared/resources/CometChatTheme';
import { PollsConfigurationInterface } from './PollsConfigurations';
import { CometChatMessageComposerActionInterface } from '../../shared/helper/types';
import { CometChatMessageTemplate } from '../../shared/modals';
import React from 'react';
export declare class PollsExtensionDecorator extends DataSourceDecorator {
    pollsConfiguration?: PollsConfigurationInterface;
    loggedInUser: CometChat.User;
    constructor(dataSource: DataSource, pollsConfiguration?: PollsConfigurationInterface);
    isDeletedMessage(message: CometChat.BaseMessage): boolean;
    getId(): string;
    getLastConversationMessage(conversation: CometChat.Conversation): string;
    getAllMessageCategories(): string[];
    getAllMessageTypes(): string[];
    getAttachmentOptions(user?: any, group?: any, composerId?: any): CometChatMessageComposerActionInterface[];
    getAllMessageTemplates(theme: CometChatTheme): CometChatMessageTemplate[];
    getPollBubble(message: CometChat.BaseMessage, _alignment: MessageBubbleAlignmentType): React.JSX.Element;
}
