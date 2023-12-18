import React from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { AvatarStyleInterface, CometChatConfirmDialogStyleInterface } from "../shared";
import { ConversationsStyleInterface } from "./ConversationsStyle";
import { ImageType } from "../shared";
import { ListItemStyleInterface } from "../shared";
import { SelectionMode } from "../shared/base/Types";
import { CometChatOptions } from "../shared";
import { StatusIndicatorStyleInterface } from "../shared/views/CometChatStatusIndicator/StatusIndicatorStyle";
import { DateStyleInterface } from "../shared/views/CometChatDate/DateStyle";
import { BadgeStyleInterface } from "../shared/views/CometChatBadge";
export interface ConversationInterface {
    /**
     * hide selection icon
     */
    hideSubmitIcon?: boolean;
    /**
     * toggle user presence view
     */
    disableUsersPresence?: boolean;
    /**
     * toggle react receipt view
     */
    disableReadReceipt?: boolean;
    /**
     * disable message receipts
     */
    disableReceipt?: boolean;
    /**
     * toggle typing indicator
     */
    disableTyping?: boolean;
    /**
     * toggle sound played when message is received
     */
    disableSoundForMessages?: boolean;
    /**
     * custom sound for received messages
     */
    customSoundForMessages?: string;
    /**
     * custom icon for protected group
     */
    protectedGroupIcon?: ImageType;
    /**
     * custom icon for private group
     */
    privateGroupIcon?: ImageType;
    /**
     * custom icon for read message
     */
    readIcon?: ImageType;
    /**
     * custom icon for delivered message
     */
    deliveredIcon?: ImageType;
    /**
     * custom icon for sent message
     */
    sentIcon?: ImageType;
    /**
     * custom icon for error message
     */
    errorIcon?: ImageType;
    /**
     * custom icon for waiting message
     */
    waitingIcon?: ImageType;
    /**
     * call back function which will get an conversation as an argument and returns an string.
     */
    datePattern?: (conversation: CometChat.Conversation) => string;
    /**
     * pass the custom view for list item
     */
    ListItemView?: (item: CometChat.Conversation) => JSX.Element;
    /**
     * pass the functional component for options in app bar
     */
    AppBarOption?: () => JSX.Element;
    /**
     * Pass array of CometChatOptions type
     * Tobe shown on swipe of list item
     */
    options?: (item: CometChat.Conversation) => CometChatOptions[];
    /**
     * toggle seperator
     */
    hideSeparator?: boolean;
    /**
     * icon for back button
     */
    backButtonIcon?: ImageType;
    /**
     * toggle back button view
     */
    showBackButton?: boolean;
    /**
     * select items pass "none" | "single" | "multitple"
     */
    selectionMode?: SelectionMode;
    /**
     * call back on seleciton is done
     */
    onSelection?: (item: Array<CometChat.Conversation>) => void;
    /**
     * title to be shown default "Chats"
     */
    title?: string;
    /**
     * Text to be displayed if no conversation found.
     */
    emptyStateText?: string;
    /**
     * Custom Functional component for empty state
     */
    EmptyStateView?: () => JSX.Element;
    /**
     * Text tobe displayed if there is an error while fetching conversations.
     */
    errorStateText?: string;
    /**
     * Custom functional component for error state.
     */
    ErrorStateView?: () => JSX.Element;
    /**
     * Custom functional component for loading state.
     */
    LoadingStateView?: () => JSX.Element;
    /**
     * Request builder to fetch conversations.
     */
    conversationsRequestBuilder?: CometChat.ConversationsRequestBuilder;
    /**
     * Custom subtitle view
     */
    SubtitleView?: (item: CometChat.Conversation) => JSX.Element;
    /**
     * toogle error view
     */
    hideError?: boolean;
    /**
     * call back function for
     */
    onItemPress?: (item: CometChat.Conversation) => void;
    /**
     * callback function for long press
     */
    onItemLongPress?: (item: CometChat.Conversation) => void;
    /**
     * callback function will be called when error occured while fetching conversations
     */
    onError?: (e: CometChat.CometChatException) => void;
    /**
     * callback function for on back
     */
    onBack?: () => void;
    /**
     * style object for conversations
     */
    conversationsStyle?: ConversationsStyleInterface;
    /**
     * style object for list item
     */
    listItemStyle?: ListItemStyleInterface;
    /**
     * style object for avatar
     */
    avatarStyle?: AvatarStyleInterface;
    /**
     * style object for status indicator
     */
    statusIndicatorStyle?: StatusIndicatorStyleInterface;
    /**
     * style object for date
     */
    dateStyle?: DateStyleInterface;
    /**
     * style object for receipt
     */
    receiptStyle?: Object;
    /**
     * style object for badge
     */
    badgeStyle?: BadgeStyleInterface;
    /**
     * style object for confirm dialog
     */
    confirmDialogStyle?: CometChatConfirmDialogStyleInterface;
}
/**
 *
 * @version 1.0.0
 * @author CometChatTeam
 * @description CometChatConversations is a container component that wraps and
 * formats CometChatListBase and CometChatConversationList component, with no behavior of its own.
 *
 */
export declare const CometChatConversations: (props: ConversationInterface) => React.JSX.Element;
