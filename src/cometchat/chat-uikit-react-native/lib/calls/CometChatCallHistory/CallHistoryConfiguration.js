export class CallHistoryConfiguration {
    SubtitleView;
    ListItemView;
    AppBarOptions;
    options;
    messageRequestBuilder;
    hideSeperator;
    BackButton;
    showBackButton;
    selectionMode;
    onSelection;
    EmptyStateView;
    emptyStateText;
    ErrorStateView;
    errorStateText;
    loadingIcon;
    LoadingStateView;
    hideError;
    onItemPress;
    onItemLongPress;
    onError;
    onBack;
    onInfoIconPress;
    avatarStyle;
    statusIndicatorStyle;
    listItemStyle;
    callHistoryStyle;
    headViewContainerStyle;
    bodyViewContainerStyle;
    tailViewContainerStyle;
    constructor(props) {
        if (props) {
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
        }
    }
}
//# sourceMappingURL=CallHistoryConfiguration.js.map