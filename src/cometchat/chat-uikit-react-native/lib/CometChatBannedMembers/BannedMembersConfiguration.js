export class BannedMembersConfiguration {
    AppBarOptions;
    avatarStyle;
    backButtonIcon;
    bannedMembersRequestBuilder;
    bannedMemberStyle;
    bodyViewContainerStyle;
    disableUsersPresence;
    EmptyStateView;
    ErrorStateView;
    headViewContainerStyle;
    hideError;
    hideSearch;
    hideSeparator;
    listItemStyle;
    ListItemView;
    LoadingStateView;
    onBack;
    onError;
    onItemLongPress;
    onItemPress;
    onSelection;
    options;
    searchBoxIcon;
    searchPlaceholderText;
    searchRequestBuilder;
    selectionIcon;
    selectionMode;
    showBackButton;
    statusIndicatorStyle;
    SubtitleView;
    TailView;
    tailViewContainerStyle;
    title;
    unbanIcon;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=BannedMembersConfiguration.js.map