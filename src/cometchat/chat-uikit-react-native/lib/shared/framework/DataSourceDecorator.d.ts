/// <reference types="react" />
import { MessageBubbleAlignmentType } from "../constants/UIKitConstants";
import { CometChatMessageComposerActionInterface } from "../helper/types";
import { CometChatMessageOption, CometChatMessageTemplate } from "../modals";
import { CometChatTheme } from "../resources/CometChatTheme";
import { VideoBubbleStyleInterface, ImageBubbleStyleInterface, AudioBubbleStyleInterface, FileBubbleStyleInterface } from "../views";
import { DataSource } from "./DataSource";
import { CometChat } from "@cometchat/chat-sdk-react-native";
export declare class DataSourceDecorator implements DataSource {
    dataSource: DataSource;
    constructor(dataSource: DataSource);
    getId(): string;
    getTextMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): CometChatMessageOption[];
    getAudioMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): CometChatMessageOption[];
    getVideoMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): CometChatMessageOption[];
    getImageMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): CometChatMessageOption[];
    getFileMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): CometChatMessageOption[];
    getMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): CometChatMessageOption[];
    getCommonOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): CometChatMessageOption[];
    getBottomView(message: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType): JSX.Element;
    getDeleteMessageBubble(message: CometChat.BaseMessage, theme: CometChatTheme): JSX.Element;
    getVideoMessageBubble(videoUrl: string, thumbnailUrl: string, message: CometChat.MediaMessage, theme: CometChatTheme, videoBubbleStyle: VideoBubbleStyleInterface): any;
    getTextMessageBubble(messageText: string, message: CometChat.TextMessage, alignment: MessageBubbleAlignmentType, theme: CometChatTheme): JSX.Element;
    getImageMessageBubble(imageUrl: string, caption: string, style: ImageBubbleStyleInterface, message: CometChat.MediaMessage, theme: CometChatTheme): JSX.Element;
    getAudioMessageBubble(audioUrl: string, title: string, style: AudioBubbleStyleInterface, message: CometChat.MediaMessage, theme: CometChatTheme): JSX.Element;
    getFileMessageBubble(fileUrl: string, title: string, style: FileBubbleStyleInterface, message: CometChat.MediaMessage, theme: CometChatTheme): JSX.Element;
    getGroupActionBubble(message: CometChat.BaseMessage, theme: CometChatTheme): JSX.Element;
    getTextMessageContentView(message: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType, theme: CometChatTheme): JSX.Element;
    getAudioMessageContentView(message: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType, theme: CometChatTheme): JSX.Element;
    getVideoMessageContentView(message: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType, theme: CometChatTheme): JSX.Element;
    getImageMessageContentView(message: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType, theme: CometChatTheme): JSX.Element;
    getFileMessageContentView(message: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType, theme: CometChatTheme): JSX.Element;
    getTextMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getAudioMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getVideoMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getImageMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getFileMessageTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getAllMessageTemplates(theme: CometChatTheme): CometChatMessageTemplate[];
    getMessageTemplate(messageType: string, MessageCategory: string, theme: CometChatTheme): CometChatMessageTemplate;
    getGroupActionTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getAllMessageTypes(): string[];
    getAllMessageCategories(): string[];
    getAuxiliaryOptions(user: CometChat.User, group: CometChat.Group, id: Map<string, any>): JSX.Element;
    getMessageTypeToSubtitle(messageType: string): string;
    getAttachmentOptions(user?: any, group?: any, composerId?: any): CometChatMessageComposerActionInterface[];
    getAuxiliaryButtonOptions(): any;
    getLastConversationMessage(conversation: CometChat.Conversation): string;
    getAuxiliaryHeaderAppbarOptions(user?: CometChat.User, group?: CometChat.Group, theme?: CometChatTheme): JSX.Element;
}