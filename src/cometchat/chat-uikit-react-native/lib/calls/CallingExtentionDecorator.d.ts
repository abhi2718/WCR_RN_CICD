import React from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { CometChatMessageTemplate } from "../shared/modals";
import { DataSource, DataSourceDecorator } from "../shared/framework";
import { CometChatTheme } from "../shared/resources/CometChatTheme";
import { CallingConfiguration } from "./CallingConfiguration";
export declare class CallingExtensionDecorator extends DataSourceDecorator {
    configuration: CallingConfiguration;
    loggedInUser: CometChat.User;
    constructor(props: {
        dataSource: DataSource;
        configuration: CallingConfiguration;
    });
    getId(): string;
    isDeletedMessage(message: CometChat.BaseMessage): boolean;
    getAllMessageTypes(): string[];
    getAllMessageCategories(): string[];
    UserCallBubbleView: ({ message, theme }: {
        message: any;
        theme: any;
    }) => React.JSX.Element;
    getUserAudioCallTemplate: (theme: any) => CometChatMessageTemplate;
    getUserVideoCallTemplates: (theme: any) => CometChatMessageTemplate;
    GroupCallBubbleView: (props: {
        message: CometChat.BaseMessage;
        theme: CometChatTheme;
        alignment: string;
    }) => React.JSX.Element;
    getAuxiliaryHeaderAppbarOptions(user: any, group: any, theme: CometChatTheme): React.JSX.Element;
    getGroupCallTemplate: (theme: any) => CometChatMessageTemplate;
    getAllMessageTemplates(theme: CometChatTheme): CometChatMessageTemplate[];
    getLastConversationMessage(conversation: CometChat.Conversation): string;
}
