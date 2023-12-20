import React from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { CometChatMessageTemplate } from "../../shared/modals";
import { DataSource, DataSourceDecorator } from "../../shared/framework";
import { CometChatTheme } from "../../shared/resources/CometChatTheme";
import { MessageBubbleAlignmentType } from "../../shared/constants/UIKitConstants";
import { StickerConfigurationInterface } from "./StickerConfiguration";
export declare class StickersExtensionDecorator extends DataSourceDecorator {
    configuration: StickerConfigurationInterface;
    constructor(props: {
        dataSource: DataSource;
        configration?: StickerConfigurationInterface;
    });
    isDeletedMessage(message: CometChat.BaseMessage): boolean;
    getAllMessageTemplates(theme: CometChatTheme): CometChatMessageTemplate[];
    getStickerBubble(message: CometChat.CustomMessage, alignment: MessageBubbleAlignmentType): React.JSX.Element;
    getAuxiliaryOptions(user: CometChat.User, group: CometChat.Group, id?: Map<string, any>): React.JSX.Element;
    getAllMessageCategories(): string[];
    getAllMessageTypes(): string[];
    getId(): string;
    getLastConversationMessage(conversation: CometChat.Conversation): string;
}
