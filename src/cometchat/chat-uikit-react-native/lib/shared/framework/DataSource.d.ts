/// <reference types="react" />
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { MessageBubbleAlignmentType } from "../constants/UIKitConstants";
import { CometChatMessageOption } from "../modals/CometChatMessageOption";
import { CometChatMessageTemplate } from "../modals/CometChatMessageTemplate";
import { CometChatTheme } from "../resources/CometChatTheme";
import { AudioBubbleStyleInterface } from "../views/CometChatAudioBubble";
import { FileBubbleStyleInterface } from "../views/CometChatFileBubble";
import { ImageBubbleStyleInterface } from "../views/CometChatImageBubble";
import { VideoBubbleStyleInterface } from "../views/CometChatVideoBubble";
export interface DataSource {
    getTextMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): Array<CometChatMessageOption>;
    getAudioMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): Array<CometChatMessageOption>;
    getVideoMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): Array<CometChatMessageOption>;
    getImageMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): Array<CometChatMessageOption>;
    getFileMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): Array<CometChatMessageOption>;
    getMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): Array<CometChatMessageOption>;
    getCommonOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): Array<CometChatMessageOption>;
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
    getAllMessageTemplates(theme: CometChatTheme): Array<CometChatMessageTemplate>;
    getMessageTemplate(messageType: string, MessageCategory: string, theme: CometChatTheme): CometChatMessageTemplate | null;
    getGroupActionTemplate(theme: CometChatTheme): CometChatMessageTemplate;
    getAllMessageTypes(): Array<string>;
    getAllMessageCategories(): Array<string>;
    getAuxiliaryOptions(user: CometChat.User, group: CometChat.Group, id: Map<string, any>): JSX.Element;
    getId(): string;
    getMessageTypeToSubtitle(messageType: string): string;
    getAttachmentOptions: (user?: any, group?: any, composerId?: any) => any;
    getAuxiliaryButtonOptions: () => any;
    getLastConversationMessage(conversation: CometChat.Conversation): string;
    getAuxiliaryHeaderAppbarOptions(user?: CometChat.User, group?: CometChat.Group, theme?: CometChatTheme): JSX.Element;
}
