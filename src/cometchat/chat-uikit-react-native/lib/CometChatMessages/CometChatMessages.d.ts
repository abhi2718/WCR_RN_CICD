import React from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { MessageStyleInterface } from "./MessageStyle";
import { MessageComposerConfigurationInterface } from "../CometChatMessageComposer";
import { MessageHeaderConfiguration } from "../CometChatMessageHeader";
import { MessageListConfigurationInterface } from "../CometChatMessageList/MessageListConfiguration";
import { ThreadedMessagesConfigurationInterface } from "../CometChatThreadedMessages/ThreadedMessagesConfiguration";
import { DetailsConfigurationInterface } from "../CometChatDetails";
export interface CometChatMessagesInterface {
    user?: CometChat.User;
    group?: CometChat.Group;
    disableTyping?: boolean;
    hideMessageComposer?: boolean;
    messageHeaderConfiguration?: MessageHeaderConfiguration;
    messageListConfiguration?: MessageListConfigurationInterface;
    messageComposerConfiguration?: MessageComposerConfigurationInterface;
    threadedMessagesConfiguration?: ThreadedMessagesConfigurationInterface;
    detailsConfiguration?: DetailsConfigurationInterface;
    MessageHeaderView?: ({ user, group }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    MessageComposerView?: ({ user, group }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    MessageListView?: ({ user, group }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    hideMessageHeader?: boolean;
    hideDetails?: boolean;
    disableSoundForMessages?: boolean;
    customSoundForIncomingMessages?: string;
    customSoundForOutgoingMessages?: string;
    messagesStyle?: MessageStyleInterface;
    AuxilaryAppBarOptions?: ({ user, group }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
}
export declare const CometChatMessages: (props: CometChatMessagesInterface) => React.JSX.Element;
