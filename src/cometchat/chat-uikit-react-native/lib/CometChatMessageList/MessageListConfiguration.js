export class MessageListConfiguration {
    ErrorStateView;
    errorStateText;
    EmptyStateView;
    emptyStateText;
    LoadingStateView;
    readIcon;
    deliveredIcon;
    sentIcon;
    waitIcon;
    errorIcon;
    alignment;
    showAvatar;
    datePattern;
    timestampAlignment;
    templates;
    messageRequestBuilder;
    scrollToBottomOnNewMessage;
    onThreadRepliesPress;
    HeaderView;
    FooterView;
    avatarStyle;
    dateSeperatorStyle;
    wrapperMessageBubbleStyle;
    actionSheetStyle;
    messageListStyle;
    disableReceipt;
    dateSeperatorPattern;
    constructor(props) {
        if (props) {
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
        }
    }
}
//# sourceMappingURL=MessageListConfiguration.js.map