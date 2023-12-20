import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { AvatarStyleInterface, CometChatMessageTemplate, ImageType, ListItemStyleInterface, StatusIndicatorStyleInterface } from '../shared';
import { MessageInformationStyleInterface } from './MessageInformationStyle';
type Recipient = {
    sender: CometChat.User | CometChat.Group;
    deliveredAt: number;
    readAt: number;
    sentAt: number;
};
export interface CometChatMessageInformationInterface {
    title?: string;
    message: CometChat.BaseMessage;
    template?: CometChatMessageTemplate;
    backIcon?: ImageType;
    BubbleView?: (message: CometChat.BaseMessage) => JSX.Element;
    ListItemView?: (message: CometChat.BaseMessage, receipt: Recipient) => JSX.Element;
    receiptDatePattern?: (timestamp: any) => string;
    onBack?: () => void;
    onError?: (e: CometChat.CometChatException) => void;
    messageInformationStyle?: MessageInformationStyleInterface;
    readIcon?: ImageType;
    sentIcon?: ImageType;
    deliveredIcon?: ImageType;
    listItemStyle?: ListItemStyleInterface;
    avatarStyle?: AvatarStyleInterface;
    statusIndicatorStyle?: StatusIndicatorStyleInterface;
    EmptyStateView?: () => JSX.Element;
    emptyStateText?: string;
    ErrorStateView?: () => JSX.Element;
    errorStateText?: string;
    loadingIcon?: ImageType;
    LoadingStateView?: () => JSX.Element;
}
export declare const CometChatMessageInformation: (props: CometChatMessageInformationInterface) => React.JSX.Element;
export {};
