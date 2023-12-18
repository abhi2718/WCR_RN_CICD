import React from "react";
import { CometChatOptions } from "../shared/modals/CometChatOptions";
import { AvatarStyleInterface, ListItemStyleInterface } from "../shared";
import { GroupMembersStyleInterface } from "./GroupMemberStyle";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { CometChatListProps } from "../shared";
import { GroupScopeStyleInterface } from "./GroupScopeStyle";
import { StatusIndicatorStyleInterface } from "../shared/views/CometChatStatusIndicator/StatusIndicatorStyle";
export interface CometChatGroupsMembersInterface extends Omit<CometChatListProps, "requestBuilder" | "listItemKey" | "statusIndicatorStyle" | "avatarStyle" | "listItemStyle" | "ListItemView" | "searchRequestBuilder" | "onSelection"> {
    /**
     * Custom view for subtitle
     * @param item object of CometChat.GroupMember
     * @returns JSX.Element
     */
    SubtitleView?: (item: CometChat.GroupMember) => JSX.Element;
    /**
     * Custom tail view
     * @param item object of CometChat.GroupMember
     * @returns JSX.Element
     */
    TailView?: (item: CometChat.GroupMember) => JSX.Element;
    /**
     * Custom view for empty state
     * @returns JSX.Element
     */
    EmptyStateView?: () => JSX.Element;
    /**
     * Custom view for error state
     * @returns JSX.Element
     */
    ErrorStateView?: () => JSX.Element;
    /**
     * Custom view for loading state
     * @returns JSX.Element
     */
    LoadingStateView?: () => JSX.Element;
    /**
     * callback for press on ListItem
     * @param groupMember object of CometChat.GroupMember
     * @returns void
     */
    onItemPress?: (groupMember: CometChat.GroupMember) => void;
    /**
     * callback for long press on ListItem
     * @param groupMember object of CometChat.GroupMember
     * @returns void
     */
    onItemLongPress?: (groupMember: CometChat.GroupMember) => void;
    /**
     * callback for on selection of groupmembers.
     * @param list array of selected GroupMembers
     * @returns void
     */
    onSelection?: (list: CometChat.GroupMember[]) => void;
    /**
     * pass search request builder object
     */
    searchRequestBuilder?: CometChat.GroupMembersRequestBuilder;
    /**
     * pass group member request builder object
     */
    groupMemberRequestBuilder?: CometChat.GroupMembersRequestBuilder;
    /**
     * pass CometChat SDK's group object
     */
    group: CometChat.Group;
    /**
     * style for group member
     */
    groupMemberStyle?: GroupMembersStyleInterface;
    /**
     * style for list item
     */
    listItemStyle?: ListItemStyleInterface;
    /**
     * style for avatar
     */
    avatarStyle?: AvatarStyleInterface;
    /**
     * style for status indicator
     */
    statusIndicatorStyle?: StatusIndicatorStyleInterface;
    /**
     * style for group scope change dialog
     */
    groupScopeStyle?: GroupScopeStyleInterface;
    /**
     * custom ListItem view
     */
    ListItemView?: (item: CometChat.GroupMember) => JSX.Element;
    /**
     * callback for GroupMembers options
     */
    options?: (item: CometChat.GroupMember) => CometChatOptions[];
}
export declare const CometChatGroupsMembers: (props: CometChatGroupsMembersInterface) => React.JSX.Element;
