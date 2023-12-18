/// <reference types="react" />
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { DataSource, DataSourceDecorator } from "../../shared/framework";
import { LinkPreviewConfigurationInterface } from "./LinkPreviewConfiguration";
import { CometChatTheme } from "../../shared/resources/CometChatTheme";
import { MessageBubbleAlignmentType } from "../../shared/constants/UIKitConstants";
export declare class LinkPreviewExtentionDecorator extends DataSourceDecorator {
    linkPreviewConfiguration?: LinkPreviewConfigurationInterface;
    constructor(dataSource: DataSource, linkPreviewConfiguration?: LinkPreviewConfigurationInterface);
    isDeletedMessage(message: CometChat.BaseMessage): boolean;
    getId(): string;
    getTextMessageContentView(message: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType, theme: CometChatTheme): JSX.Element;
}
