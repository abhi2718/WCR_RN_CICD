import React from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { ImageType } from "../shared";
import { MessageBubbleStyleInterface } from "../shared/views/CometChatMessageBubble/MessageBubbleStyle";
import { AvatarStyleInterface } from "../shared";
import { MessageListStyleInterface } from "./MessageListStyle";
import { MessageListAlignmentType, MessageTimeAlignmentType } from "../shared/constants/UIKitConstants";
import { CometChatMessageTemplate } from "../shared/modals/CometChatMessageTemplate";
import { DateStyleInterface } from "../shared/views/CometChatDate/DateStyle";
import { ActionSheetStylesInterface } from "../shared/views/CometChatActionSheet/ActionSheetStyle";
import { MessageInformationConfigurationInterface } from "../CometChatMessageInformation";
export interface CometChatMessageListProps {
    parentMessageId?: string;
    user?: CometChat.User;
    group?: CometChat.Group;
    EmptyStateView?: () => JSX.Element;
    emptyStateText?: String;
    ErrorStateView?: (e: CometChat.CometChatException) => JSX.Element;
    errorStateText?: String;
    LoadingStateView?: () => JSX.Element;
    disableReceipt?: boolean;
    disableSoundForMessages?: boolean;
    customSoundForMessages?: string;
    readIcon?: ImageType;
    deliveredIcon?: ImageType;
    sentIcon?: ImageType;
    waitIcon?: ImageType;
    errorIcon?: ImageType;
    alignment?: MessageListAlignmentType;
    showAvatar?: boolean;
    datePattern?: (message: CometChat.BaseMessage) => "timeFormat" | "dayDateFormat" | "dayDateTimeFormat";
    timeStampAlignment?: MessageTimeAlignmentType;
    dateSeperatorPattern?: (date: number) => string;
    templates?: Array<CometChatMessageTemplate>;
    messageRequestBuilder?: CometChat.MessagesRequestBuilder;
    newMessageIndicatorText?: string;
    scrollToBottomOnNewMessages?: boolean;
    onThreadRepliesPress?: (messageObject: CometChat.BaseMessage, messageBubbleView: () => JSX.Element) => void;
    HeaderView?: ({ user, group, id }: {
        user?: CometChat.User;
        group?: CometChat.Group;
        id?: {
            uid?: string;
            guid?: string;
            parentMessageId?: string;
        };
    }) => JSX.Element;
    FooterView?: ({ user, group, id }: {
        user?: CometChat.User;
        group?: CometChat.Group;
        id?: {
            uid?: string;
            guid?: string;
            parentMessageId?: string;
        };
    }) => JSX.Element;
    wrapperMessageBubbleStyle?: MessageBubbleStyleInterface;
    avatarStyle?: AvatarStyleInterface;
    dateSeperatorStyle?: DateStyleInterface;
    actionSheetStyle?: ActionSheetStylesInterface;
    messageListStyle?: MessageListStyleInterface;
    onError?: (e: CometChat.CometChatException) => void;
    onBack?: () => void;
    messageInformationConfiguration?: MessageInformationConfigurationInterface;
}
export interface CometChatMessageListActionsInterface {
    addMessage: (messageObject: object) => void;
    updateMessage: (messageObject: CometChat.BaseMessage, withMuid: boolean) => void;
    removeMessage: (messageObject: CometChat.BaseMessage) => void;
    deleteMessage: (messageObject: CometChat.BaseMessage) => void;
    scrollToBottom: () => void;
    createActionMessage: () => void;
    updateMessageReceipt: (message: CometChat.BaseMessage) => void;
}
export declare const CometChatMessageList: React.ForwardRefExoticComponent<CometChatMessageListProps & React.RefAttributes<CometChatMessageListActionsInterface>>;
