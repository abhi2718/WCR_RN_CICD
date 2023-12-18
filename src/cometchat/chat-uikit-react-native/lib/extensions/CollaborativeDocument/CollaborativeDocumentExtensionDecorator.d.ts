import { DataSource, DataSourceDecorator } from "../../shared/framework";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { MessageBubbleAlignmentType } from "../../shared/constants/UIKitConstants";
import { CometChatTheme } from "../../shared/resources/CometChatTheme";
import { CollaborativeDocumentConfigurationInterface } from "./CollaborativeDocumentConfiguration";
import { CometChatMessageComposerActionInterface } from "../../shared/helper/types";
import { CometChatMessageTemplate } from "../../shared/modals";
import React from 'react';
export declare class CollaborativeDocumentExtensionDecorator extends DataSourceDecorator {
    documentConfiguration?: CollaborativeDocumentConfigurationInterface;
    documentUrl: string;
    constructor(dataSource: DataSource, docConfiguration?: CollaborativeDocumentConfigurationInterface);
    isDeletedMessage(message: CometChat.BaseMessage): boolean;
    getId(): string;
    getLastConversationMessage(conversation: CometChat.Conversation): string;
    getAllMessageCategories(): string[];
    getAllMessageTypes(): string[];
    getAttachmentOptions(user?: any, group?: any, composerId?: any): CometChatMessageComposerActionInterface[];
    shareCollaborativedocument(user?: CometChat.User, group?: CometChat.Group): void;
    getAllMessageTemplates(theme: CometChatTheme): CometChatMessageTemplate[];
    getCollaborativeBubble(message: CometChat.BaseMessage, _alignment: MessageBubbleAlignmentType): React.JSX.Element;
}
