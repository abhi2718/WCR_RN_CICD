/// <reference types="react" />
import { DataSource, DataSourceDecorator } from "../../shared/framework";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { MessageBubbleAlignmentType } from "../../shared/constants/UIKitConstants";
import { CometChatTheme } from "../../shared/resources/CometChatTheme";
import { TextModerationConfigurationInterface } from "./TextModerationConfiguration";
export declare class TextModerationExtensionDecorator extends DataSourceDecorator {
    textModerationConfiguration?: TextModerationConfigurationInterface;
    constructor(dataSource: DataSource, textModerationConfiguration?: TextModerationConfigurationInterface);
    getTextMessageBubble(messageText: string, message: CometChat.TextMessage, alignment: MessageBubbleAlignmentType, theme: CometChatTheme): JSX.Element;
    checkModeration(messageObject: CometChat.TextMessage): string;
    getId(): string;
    getLastConversationMessage(conversation: CometChat.Conversation): string;
}
