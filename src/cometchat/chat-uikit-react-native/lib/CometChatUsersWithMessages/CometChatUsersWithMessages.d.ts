import React from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { MessagesConfigurationInterface } from "../CometChatMessages/MessagesConfiguration";
import { UsersConfigurationInterface } from "../CometChatUsers/UsersConfiguration";
export interface CometChatUsersWithMessagesInterface {
    user?: CometChat.User;
    usersConfiguration?: UsersConfigurationInterface;
    messagesConfigurations?: MessagesConfigurationInterface;
    onError?: (e: CometChat.CometChatException) => void;
}
export declare const CometChatUsersWithMessages: (props: CometChatUsersWithMessagesInterface) => React.JSX.Element;
