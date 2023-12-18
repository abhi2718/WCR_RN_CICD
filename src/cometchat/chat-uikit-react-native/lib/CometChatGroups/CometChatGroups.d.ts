import React from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { GroupsStyleInterface } from "./GroupsStyle";
import { ListItemStyleInterface } from "../shared";
import { ImageType } from "../shared";
import { SelectionMode } from "../shared/base/Types";
import { CometChatOptions } from "../shared/modals/CometChatOptions";
import { AvatarStyleInterface } from "../shared/views/CometChatAvatar/AvatarStyle";
import { StatusIndicatorStyleInterface } from "../shared/views/CometChatStatusIndicator/StatusIndicatorStyle";
export interface CometChatGroupsInterface {
    /**
     * Custom subtitle view
     */
    SubtitleView?: (item: CometChat.Group) => JSX.Element;
    /**
     * Custom list item view
     */
    ListItemView?: (item: CometChat.Group) => JSX.Element;
    /**
     * pass compoent for menu, will be shown at top right side
     */
    AppBarOption?: () => JSX.Element;
    /**
     * Pass array of CometChatOptions type
     * Tobe shown on swipe of list item
     */
    options?: (item: CometChat.Group) => CometChatOptions[];
    /**
     * toggle the seperator
     */
    hideSeperator?: boolean;
    /**
     * hide selection icon
     */
    hideSubmitIcon?: boolean;
    /**
     * styles for groups
     */
    groupsStyle?: GroupsStyleInterface;
    /**
     * styles for list item
     */
    listItemStyle?: ListItemStyleInterface;
    /**
     * styles for avatar
     */
    avatarStyle?: AvatarStyleInterface;
    /**
     * styles for status indicator
     */
    statusIndicatorStyle?: StatusIndicatorStyleInterface;
    /**
     * search placeholder text
     */
    searchPlaceHolderText?: string;
    /**
     * back button icon
     */
    backButtonIcon?: ImageType;
    /**
     * toggle back button
     */
    showBackButton?: boolean;
    /**
     * select items pass "none" | "single" | "multitple"
     */
    selectionMode?: SelectionMode;
    /**
     * call back on seleciton is done
     */
    onSelection?: (items: Array<CometChat.Group>) => void;
    /**
     * icon for search box
     */
    searchBoxIcon?: ImageType;
    /**
     * toggle seearch box
     */
    hideSearch?: boolean;
    /**
     * title to be shown default "Groups"
     */
    title?: string;
    /**
     * Custom Functional component for empty state
     */
    EmptyStateView?: () => JSX.Element;
    /**
     * text to be shown in case no groups found.
     */
    emptyStateText?: string;
    /**
     * Custom functional component for error state.
     */
    ErrorStateView?: () => JSX.Element;
    /**
     * text to be shown in case error occured while fetching gounps for first time
     */
    errorStateText?: string;
    /**
     * Custom image for loading state.
     */
    LoadingStateView?: () => JSX.Element;
    /**
     * Request builder to fetch groups.
     */
    groupRequestBuilder?: CometChat.GroupsRequestBuilder;
    /**
     * request builder for search
     */
    searchRequestBuilder?: CometChat.GroupsRequestBuilder;
    /**
     * pass icon for private group
     */
    privateGroupIcon?: ImageType;
    /**
     * pass icon for password group
     */
    passwordGroupIcon?: ImageType;
    /**
     * toogle error visibility
     */
    hideError?: boolean;
    /**
     * function tobe called on group pressed.
     */
    onItemPress?: (item: CometChat.Group) => void;
    /**
     * function tobe called on group long pressed.
     */
    onItemLongPress?: (item: CometChat.Group) => void;
    /**
     * function will be called when error occured.
     */
    onError?: (e: CometChat.CometChatException) => void;
    /**
     * function will be called when back button pressed.
     */
    onBack?: () => void;
}
export declare const CometChatGroups: React.ForwardRefExoticComponent<CometChatGroupsInterface & React.RefAttributes<unknown>>;
