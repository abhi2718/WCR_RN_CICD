/// <reference types="react" />
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { DetailsConfigurationInterface } from "../CometChatDetails";
import { MessageComposerConfigurationInterface } from "../CometChatMessageComposer";
import { MessageHeaderConfigurationInterface } from "../CometChatMessageHeader";
import { MessageListConfigurationInterface } from "../CometChatMessageList/MessageListConfiguration";
import { ThreadedMessagesConfigurationInterface } from "../CometChatThreadedMessages/ThreadedMessagesConfiguration";
import { MessageStyleInterface } from "./MessageStyle";
export interface MessagesConfigurationInterface {
    disableTyping?: boolean;
    hideMessageComposer?: boolean;
    messageHeaderConfiguration?: MessageHeaderConfigurationInterface;
    messageListConfiguration?: MessageListConfigurationInterface;
    messageComposerConfiguration?: MessageComposerConfigurationInterface;
    threadedMessageConfiguration?: ThreadedMessagesConfigurationInterface;
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
    disableSoundForMessages?: boolean;
    customSoundForIncomingMessage?: string;
    customSoundForOutgoingMessage?: string;
    messageStyle?: MessageStyleInterface;
    AuxilaryAppBarOptions?: (props: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
}
export declare class MessagesConfiguration implements MessagesConfigurationInterface {
    disableTyping?: boolean;
    hideMessageComposer?: boolean;
    messageHeaderConfiguration?: MessageHeaderConfigurationInterface;
    messageListConfiguration?: MessageListConfigurationInterface;
    messageComposerConfiguration?: MessageComposerConfigurationInterface;
    threadedMessageConfiguration?: ThreadedMessagesConfigurationInterface;
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
    disableSoundForMessages?: boolean;
    customSoundForIncomingMessage?: string;
    customSoundForOutgoingMessage?: string;
    messageStyle?: MessageStyleInterface;
    AuxilaryAppBarOptions?: (props: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    constructor(props: MessagesConfigurationInterface);
}
