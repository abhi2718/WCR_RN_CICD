import React from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { GroupsConfigurationInterface } from "../CometChatGroups";
import { MessagesConfigurationInterface } from "../CometChatMessages/MessagesConfiguration";
import { CreateGroupConfigurationInterface } from "../CometChatCreateGroup";
export interface CometChatGroupsWithMessagesInterface {
    group?: CometChat.Group;
    groupsConfiguration?: GroupsConfigurationInterface;
    messagesConfigurations?: MessagesConfigurationInterface;
    createGroupConfiguration?: CreateGroupConfigurationInterface;
    onError?: (e: CometChat.CometChatException) => void;
}
export declare const CometChatGroupsWithMessages: (props: CometChatGroupsWithMessagesInterface) => React.JSX.Element;
