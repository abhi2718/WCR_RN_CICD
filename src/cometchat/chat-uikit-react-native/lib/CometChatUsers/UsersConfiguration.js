export class UsersConfiguration {
    AppBarOptions;
    avatarStyle;
    backButtonIcon;
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
    onItemPress;
    onItemLongPress;
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
    usersRequestBuilder;
    usersStyle;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=UsersConfiguration.js.map