export class AddMembersConfiguration {
    AppBarOptions;
    avatarStyle;
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
    usersRequestBuilder;
    usersStyle;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=AddMembersConfiguration.js.map