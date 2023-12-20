/// <reference types="react" />
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { MessageBubbleAlignmentType } from "../constants/UIKitConstants";
import { CometChatMessageOption } from "./CometChatMessageOption";
interface MessageTemplateInterface {
    category: string;
    type: (typeof CometChat.MESSAGE_TYPE)[keyof typeof CometChat.MESSAGE_TYPE];
    ContentView?: (messageObject: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType) => JSX.Element;
    BubbleView?: (messageObject: CometChat.BaseMessage) => JSX.Element;
    HeaderView?: (messageObject: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType) => JSX.Element;
    FooterView?: (messageObject: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType) => JSX.Element;
    options?: (loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group) => CometChatMessageOption[];
}
export declare class CometChatMessageTemplate implements MessageTemplateInterface {
    category: string;
    type: (typeof CometChat.MESSAGE_TYPE)[keyof typeof CometChat.MESSAGE_TYPE];
    ContentView: (messageObject: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType) => JSX.Element;
    BubbleView: (messageObject: CometChat.BaseMessage) => JSX.Element;
    HeaderView: (messageObject: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType) => JSX.Element;
    FooterView: (messageObject: CometChat.BaseMessage, alignment: MessageBubbleAlignmentType) => JSX.Element;
    options: (loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group) => CometChatMessageOption[];
    constructor({ category, type, ContentView, BubbleView, HeaderView, FooterView, options, }: MessageTemplateInterface);
}
export {};
