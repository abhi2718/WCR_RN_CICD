import React from 'react';
import { StyleProp, ViewStyle, ListRenderItem } from 'react-native';
import { CometChatOptions } from '../../modals';
import { ImageType } from '../../base';
import { BorderStyleInterface, FontStyleInterface } from '../../base';
import { ListItemStyleInterface } from '../CometChatListItem/ListItemStyle';
import { AvatarStyleInterface } from '../CometChatAvatar/AvatarStyle';
export interface CometChatListActionsInterface {
    updateList: (prop: any) => void;
    addItemToList: (item: any, position?: number) => void;
    removeItemFromList: (itemId: string | number) => void;
    getListItem: (itemId: string | number) => void;
    getSelectedItems: () => Array<any>;
}
export interface CometChatListStylesInterface {
    width?: number | string;
    height?: number | string;
    background?: string;
    border?: BorderStyleInterface;
    borderRadius?: number;
    titleFont?: FontStyleInterface;
    titleColor?: string;
    backIconTint?: string;
    searchBorder?: BorderStyleInterface;
    searchBorderRadius?: number;
    searchBackground?: string;
    searchTextFont?: FontStyleInterface;
    searchTextColor?: string;
    searchIconTint?: string;
    onlineStatusColor?: string;
    separatorColor?: string;
    loadingIconTint?: string;
    emptyTextColor?: string;
    emptyTextFont?: FontStyleInterface;
    errorTextColor?: string;
    errorTextFont?: FontStyleInterface;
    sectionHeaderTextFont?: FontStyleInterface;
    sectionHeaderTextColor?: string;
}
export interface CometChatListProps {
    SubtitleView?: (item: object) => JSX.Element;
    TailView?: (item: object) => JSX.Element;
    disableUsersPresence?: boolean;
    ListItemView?: ListRenderItem<any>;
    AppBarOptions?: React.FC;
    options?: (item: object) => Array<CometChatOptions>;
    hideSeparator?: boolean;
    searchPlaceholderText?: string;
    backButtonIcon?: ImageType;
    showBackButton?: boolean;
    selectionMode?: 'none' | 'single' | 'multiple';
    onSelection?: (list: any) => void;
    searchBoxIcon?: ImageType;
    hideSearch?: boolean;
    title?: string;
    EmptyStateView?: React.FC;
    emptyStateText?: string;
    errorStateText?: string;
    ErrorStateView?: React.FC;
    LoadingStateView?: React.FC;
    requestBuilder?: any;
    searchRequestBuilder?: any;
    hideError?: boolean;
    onItemPress?: (user: any) => void;
    onItemLongPress?: (user: any) => void;
    onError?: (error: any) => void;
    onBack?: Function;
    selectionIcon?: ImageType;
    listItemKey: 'uid' | 'guid' | 'conversationId';
    statusIndicatorStyle?: StyleProp<ViewStyle>;
    avatarStyle?: AvatarStyleInterface;
    listItemStyle?: ListItemStyleInterface;
    headViewContainerStyle?: StyleProp<ViewStyle>;
    bodyViewContainerStyle?: StyleProp<ViewStyle>;
    tailViewContainerStyle?: StyleProp<ViewStyle>;
    listStyle?: CometChatListStylesInterface;
    hideSubmitIcon?: boolean;
}
/**
 * @class Users is a component useful for displaying the header and users in a list
 * @description This component displays a header and list of users with subtitle,avatar,status
 * @Version 1.0.0
 * @author CometChat
 *
 */
export declare const CometChatList: React.ForwardRefExoticComponent<CometChatListProps & React.RefAttributes<CometChatListActionsInterface>>;
