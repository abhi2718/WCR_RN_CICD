/// <reference types="react" />
import { AvatarStyleInterface, CometChatDetailsTemplate, ImageType, ListItemStyleInterface } from '../shared';
import { StatusIndicatorStyleInterface } from '../shared/views/CometChatStatusIndicator/StatusIndicatorStyle';
import { CometChatDetailsInterface, DetailsStyleInterface, ModalDetailsStyleInterface } from './CometChatDetails';
import { CometChat } from '@cometchat/chat-sdk-react-native';
export interface DetailsConfigurationInterface extends Omit<CometChatDetailsInterface, 'user' | 'group' | 'title' | 'leaveGroupButtonText' | 'leaveGroupCancelButtonText' | 'leaveGroupConfirmDialogMessage' | 'deleteGroupButtonText' | 'deleteGroupCancelButtonText' | 'deleteGroupConfirmDialogMessage'> {
}
export declare class DetailsConfiguration {
    avatarStyle?: AvatarStyleInterface;
    closeButtonIcon?: ImageType;
    CustomProfileView?: ({ user, group, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    data?: ({ user, group, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => CometChatDetailsTemplate[];
    deleteGroupDialogStyle?: ModalDetailsStyleInterface;
    detailsStyle?: DetailsStyleInterface;
    disableUsersPresence?: boolean;
    hideProfile?: boolean;
    leaveGroupDialogStyle?: ModalDetailsStyleInterface;
    listItemStyle?: ListItemStyleInterface;
    onBack?: () => void;
    onError?: (error: CometChat.CometChatException) => void;
    privateGroupIcon?: ImageType;
    protectedGroupIcon?: ImageType;
    showCloseButton?: boolean;
    statusIndicatorStyle?: StatusIndicatorStyleInterface;
    SubtitleView?: ({ user, group, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    constructor(props: DetailsConfigurationInterface);
}
