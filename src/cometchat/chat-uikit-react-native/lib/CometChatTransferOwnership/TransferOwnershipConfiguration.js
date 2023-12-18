export class TransferOwnershipConfiguration {
    onTransferOwnership;
    transferOwnershipStyle;
    groupMembersConfiguration;
    avatarStyle;
    backButtonIcon;
    bodyViewContainerStyle;
    disableUsersPresence;
    EmptyStateView;
    ErrorStateView;
    groupMemberRequestBuilder;
    groupMemberStyle;
    headViewContainerStyle;
    hideSearch;
    hideSeparator;
    listItemStyle;
    ListItemView;
    listStyle;
    LoadingStateView;
    onBack;
    onError;
    searchBoxIcon;
    searchPlaceholderText;
    searchRequestBuilder;
    selectionIcon;
    showBackButton;
    statusIndicatorStyle;
    SubtitleView;
    tailViewContainerStyle;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=TransferOwnershipConfiguration.js.map