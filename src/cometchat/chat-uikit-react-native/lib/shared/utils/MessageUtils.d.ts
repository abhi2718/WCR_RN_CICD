import React from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { MessageBubbleAlignmentType } from "../constants/UIKitConstants";
import { CometChatTheme } from "../resources";
import { CometChatMessageTemplate } from "../modals";
type MessageViewType = {
    message: CometChat.BaseMessage;
    template?: CometChatMessageTemplate;
    alignment?: MessageBubbleAlignmentType;
    theme?: CometChatTheme;
};
export declare const MessageUtils: {
    getMessageView: (params: MessageViewType) => React.JSX.Element;
};
export {};
