import { localize } from "../shared";
/**
 * @class ConversationsConfiguration
 */
export class ConversationsConfiguration {
    disableUsersPresence;
    disableReceipt;
    disableTyping;
    disableSoundForMessages;
    customSoundForMessages;
    protectedGroupIcon;
    privateGroupIcon;
    readIcon;
    deliveredIcon;
    sentIcon;
    datePattern;
    ListItemView;
    AppBarOption;
    options;
    hideSeparator;
    searchPlaceholder;
    backButtonIcon;
    showBackButton;
    selectionMode;
    onSelection;
    selectedConversations;
    searchBoxIcon;
    hideSearch;
    EmptyStateView;
    ErrorStateView;
    LoadingStateView;
    conversationsRequestBuilder;
    SubtitleView;
    onItemPress;
    onItemLongPress;
    onError;
    onBack;
    statusIndicatorStyle;
    avatarStyle;
    receiptStyle;
    dateStyle;
    conversationsStyle;
    listItemStyle;
    badgeStyle;
    constructor({ disableUsersPresence = false, disableReceipt = false, disableTyping = false, disableSoundForMessages = false, customSoundForMessages = undefined, protectedGroupIcon = undefined, privateGroupIcon = undefined, readIcon = undefined, deliveredIcon = undefined, sentIcon = undefined, datePattern = undefined, ListItemView = undefined, AppBarOption = undefined, options = undefined, hideSeparator = true, searchPlaceholder = localize("SEARCH"), backButtonIcon = undefined, showBackButton = false, selectionMode = "none", onSelection = undefined, selectedConversations = undefined, searchBoxIcon = undefined, hideSearch = true, EmptyStateView = undefined, ErrorStateView = undefined, LoadingStateView = undefined, conversationsRequestBuilder = undefined, SubtitleView = undefined, onItemPress = undefined, onItemLongPress = undefined, onError = undefined, onBack = undefined, statusIndicatorStyle = undefined, avatarStyle = undefined, receiptStyle = {}, dateStyle = undefined, conversationsStyle = undefined, listItemStyle = undefined, badgeStyle = undefined, }) {
        this.disableUsersPresence = disableUsersPresence;
        this.disableReceipt = disableReceipt;
        this.disableTyping = disableTyping;
        this.disableSoundForMessages = disableSoundForMessages;
        this.customSoundForMessages = customSoundForMessages;
        this.protectedGroupIcon = protectedGroupIcon;
        this.privateGroupIcon = privateGroupIcon;
        this.readIcon = readIcon;
        this.deliveredIcon = deliveredIcon;
        this.sentIcon = sentIcon;
        this.datePattern = datePattern;
        this.ListItemView = ListItemView;
        this.AppBarOption = AppBarOption;
        this.options = options;
        this.hideSeparator = hideSeparator;
        this.searchPlaceholder = searchPlaceholder;
        this.backButtonIcon = backButtonIcon;
        this.showBackButton = showBackButton;
        this.selectionMode = selectionMode;
        this.onSelection = onSelection;
        this.selectedConversations = selectedConversations;
        this.searchBoxIcon = searchBoxIcon;
        this.hideSearch = hideSearch;
        this.EmptyStateView = EmptyStateView;
        this.ErrorStateView = ErrorStateView;
        this.LoadingStateView = LoadingStateView;
        this.conversationsRequestBuilder = conversationsRequestBuilder;
        this.SubtitleView = SubtitleView;
        this.onItemPress = onItemPress;
        this.onItemLongPress = onItemLongPress;
        this.onError = onError;
        this.onBack = onBack;
        this.statusIndicatorStyle = statusIndicatorStyle;
        this.avatarStyle = avatarStyle;
        this.receiptStyle = receiptStyle;
        this.dateStyle = dateStyle;
        this.conversationsStyle = conversationsStyle;
        this.listItemStyle = listItemStyle;
        this.badgeStyle = badgeStyle;
    }
}
//# sourceMappingURL=ConversationsConfiguration.js.map