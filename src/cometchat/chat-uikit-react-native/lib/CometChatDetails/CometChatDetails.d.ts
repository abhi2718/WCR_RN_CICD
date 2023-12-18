import React from 'react';
import { ImageType } from '../shared';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatDetailsTemplate } from '../shared';
import { BorderStyleInterface, FontStyleInterface } from '../shared/base';
import { AvatarStyleInterface } from '../shared';
import { StatusIndicatorStyleInterface } from '../shared/views/CometChatStatusIndicator/StatusIndicatorStyle';
import { ListItemStyleInterface } from '../shared';
import { AddMembersConfigurationInterface } from '../CometChatAddMembers/AddMembersConfiguration';
import { BannedMembersConfigurationInterface } from '../CometChatBannedMembers/BannedMembersConfiguration';
import { GroupMemberConfigurationInterface } from '../CometChatGroupMembers/GroupMemberConfiguration';
import { CometChatTransferOwnershipInterface } from '../CometChatTransferOwnership/CometChatTransferOwnership';
export interface ModalDetailsInterface {
    title: string;
    confirmButtonText: string;
    cancelButtonText: string;
    messageText: string;
    onConfirm: Function;
    onCancel: Function;
    style: ModalDetailsStyleInterface;
}
export interface ModalDetailsStyleInterface {
    confirmButtonTextFont?: FontStyleInterface;
    confirmButtonTextColor?: string;
    cancelButtonTextFont?: FontStyleInterface;
    cancelButtonTextColor?: string;
    messageTextFont?: FontStyleInterface;
    messageTextColor?: string;
    cancelBackground?: string;
    confirmBackground?: string;
}
export interface DetailsStyleInterface {
    width: string;
    height: string;
    backgroundColor: string;
    border: BorderStyleInterface;
    borderRadius: number;
    titleFont: FontStyleInterface;
    titleColor: string;
    backIconTint: string;
    closeIconTint: string;
    onlineStatusColor: string;
    privateGroupIconBackground: string;
    protectedGroupIconBackground: string;
}
export interface CometChatDetailsInterface {
    /**
     *
     *
     * @type {CometChat.User}
     * @description CometChat SDK’s user object
     */
    user?: CometChat.User;
    /**
     *
     *
     * @type {CometChat.Group}
     * @description CometChat SDK’s group object
     */
    group?: CometChat.Group;
    /**
     *
     *
     * @type {string}
     * @description Title of the component
     */
    title?: string;
    /**
     *
     *
     * @type {boolean}
     * @description Toggle close button
     */
    showCloseButton?: boolean;
    /**
     *
     *
     * @type {ImageType}
     * @description Icon for close icon
     */
    closeButtonIcon?: ImageType;
    /**
     *
     *
     * @type {boolean}
     * @description hide user/group profile view
     */
    hideProfile?: boolean;
    /**
     *
     *
     * @description ({
          user,
          group,
        }: {
          user?: CometChat.User;
          group?: CometChat.Group;
        }) → @return {JSX.Element}
     */
    SubtitleView?: ({ user, group, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    /**
     *
     *
     *  @description ({
          user,
          group,
        }: {
          user?: CometChat.User;
          group?: CometChat.Group;
        }) → @return {JSX.Element}
     */
    CustomProfileView?: ({ user, group, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => JSX.Element;
    /**
     *
     *
     * @type {CometChatDetailsTemplate[]}
     * @description ({
          user,
          group,
        }: {
          user?: CometChat.User;
          group?: CometChat.Group;
        }) → @return {CometChatDetailsTemplate[]}
     */
    data?: ({ user, group, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => CometChatDetailsTemplate[];
    /**
     *
     *
     * @type {boolean}
     * @description Toggle to disable user presence. When set to true, status indicator component will not render in the UI
     */
    disableUsersPresence?: boolean;
    /**
     *
     *
     * @type {ImageType}
     * @description icon for protected group
     */
    protectedGroupIcon?: ImageType;
    /**
     *
     *
     * @type {ImageType}
     * @description icon for private group
     */
    privateGroupIcon?: ImageType;
    /**
     *
     *
     * @type {string}
     * @description Text to be displayed on the leave button in the confirm dialog (leave group)
     */
    leaveGroupButtonText?: string;
    /**
     *
     *
     * @type {string}
     * @description Text to be displayed on the cancel button in the confirm dialog (leave group)
     */
    leaveGroupCancelButtonText?: string;
    /**
     *
     *
     * @type {string}
     * @description Text to be displayed in the confirm dialog (leave group)
     */
    leaveGroupConfirmDialogMessage?: string;
    /**
     *
     *
     * @type {ModalDetailsStyleInterface}
     * @description Styling properties of leave group confirm dialog
     */
    leaveGroupDialogStyle?: ModalDetailsStyleInterface;
    /**
     *
     *
     * @type {string}
     * @description Text to be displayed on the leave button in the confirm dialog (delete group)
     */
    deleteGroupButtonText?: string;
    /**
     *
     *
     * @type {string}
     * @description Text to be displayed on the cancel button in the confirm dialog (delete group)
     */
    deleteGroupCancelButtonText?: string;
    /**
     *
     *
     * @type {string}
     * @description Text to be displayed in the confirm dialog (delete group)
     */
    deleteGroupConfirmDialogMessage?: string;
    /**
     *
     *
     * @type {ModalDetailsStyleInterface}
     * @description Styling properties of delete group confirm dialog
     */
    deleteGroupDialogStyle?: ModalDetailsStyleInterface;
    /**
     *
     *
     * @type {*}
     * @description Configurable properties of the group members component
     */
    groupMembersConfiguration?: GroupMemberConfigurationInterface;
    /**
     *
     *
     * @type {*}
     * @description Configurable properties of the add members component
     */
    addMembersConfiguration?: AddMembersConfigurationInterface;
    /**
     *
     *
     * @type {*}
     * @description Configurable properties of the banned members component
     */
    bannedMembersConfiguration?: BannedMembersConfigurationInterface;
    /**
     *
     *
     * @type {*}
     * @description Configurable properties of the transfer owernership component
     */
    transferOwnershipConfiguration?: CometChatTransferOwnershipInterface;
    /**
     *
     *
     * @description Callback invoked upon encountering an error in the component
     */
    onError?: (error: any) => void;
    /**
     *
     *
     * @description Callback invoked upon clicking close icon / back button
     */
    onBack?: () => void;
    /**
     *
     *
     * @type {AvatarStyleInterface}
     * @description Styling properties of the avatar component
     */
    avatarStyle?: AvatarStyleInterface;
    /**
     *
     *
     * @type {StatusIndicatorStyleInterface}
     * @description Styling properties of the status indicator component
     */
    statusIndicatorStyle?: StatusIndicatorStyleInterface;
    /**
     *
     *
     * @type {ListItemStyleInterface}
     * @description Styling properties of the list item component
     */
    listItemStyle?: ListItemStyleInterface;
    /**
     *
     *
     * @type {DetailsStyleInterface}
     * @description Styling properties of the details component
     */
    detailsStyle?: DetailsStyleInterface;
}
export declare const CometChatDetails: (props: CometChatDetailsInterface) => React.JSX.Element;
