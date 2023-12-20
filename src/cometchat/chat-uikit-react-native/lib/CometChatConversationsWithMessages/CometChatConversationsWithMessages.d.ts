import React from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { ConversationsConfigurationInterface } from "../CometChatConversations/ConversationsConfiguration";
import { MessagesConfigurationInterface } from "../CometChatMessages/MessagesConfiguration";
import { StartConversationConfigurationInterface } from "../CometChatContacts";
export interface CometChatConversationsWithMessagesInterface {
    user?: CometChat.User;
    group?: CometChat.Group;
    conversationsConfiguration?: ConversationsConfigurationInterface;
    messagesConfigurations?: MessagesConfigurationInterface;
    startConversationConfiguration?: StartConversationConfigurationInterface;
    onError?: (e: CometChat.CometChatException) => void;
}
export declare const CometChatConversationsWithMessages: (props: CometChatConversationsWithMessagesInterface) => React.JSX.Element;
