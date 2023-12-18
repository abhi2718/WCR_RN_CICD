/// <reference types="react" />
import { AvatarStyleInterface, CometChatDetailsTemplate, ImageType, ListItemStyleInterface } from "../../shared";
import { StatusIndicatorStyleInterface } from "../../shared/views/CometChatStatusIndicator/StatusIndicatorStyle";
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CallDetailsStyleInterface } from "./CallDetailsStyle";
export interface CallDetailsConfigurationInterface {
    showCloseButton?: boolean;
    closeButtonIconImage?: ImageType;
    hideProfile?: boolean;
    SubtitleView?: (props: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    CustomProfileView?: (props: {
        user?: CometChat.User;
    }) => JSX.Element;
    data?: (props: {
        message: CometChat.BaseMessage;
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => CometChatDetailsTemplate[];
    disableUsersPresence?: boolean;
    onError?: (e: CometChat.CometChatException) => void;
    onBack?: () => void;
    avatarStyle?: AvatarStyleInterface;
    statusIndicatorStyle?: StatusIndicatorStyleInterface;
    listItemStyle?: ListItemStyleInterface;
    callDetailsStyle?: CallDetailsStyleInterface;
}
export declare class CallDetailsConfiguration implements CallDetailsConfigurationInterface {
    showCloseButton?: boolean;
    closeButtonIconImage?: ImageType;
    hideProfile: boolean;
    SubtitleView: (props: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    CustomProfileView: (props: {
        user?: CometChat.User;
    }) => JSX.Element;
    data: (props: {
        message: CometChat.BaseMessage;
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => CometChatDetailsTemplate[];
    disableUsersPresence: boolean;
    onError: (e: CometChat.CometChatException) => void;
    onBack: () => void;
    avatarStyle: AvatarStyleInterface;
    statusIndicatorStyle: StatusIndicatorStyleInterface;
    listItemStyle: ListItemStyleInterface;
    callDetailsStyle: CallDetailsStyleInterface;
    constructor({ showCloseButton, closeButtonIconImage, hideProfile, SubtitleView, CustomProfileView, data, disableUsersPresence, onError, onBack, avatarStyle, statusIndicatorStyle, listItemStyle, callDetailsStyle, }: CallDetailsConfigurationInterface);
}
