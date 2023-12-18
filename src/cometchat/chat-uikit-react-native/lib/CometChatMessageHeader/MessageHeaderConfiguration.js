export class MessageHeaderConfiguration {
    SubtitleView;
    disableUsersPresence;
    disableTyping;
    protectedGroupIcon;
    privateGroupIcon;
    AppBarOptions;
    style;
    backButtonIcon;
    hideBackIcon;
    ListItemView;
    onBack;
    listItemStyle;
    avatarStyle;
    statusIndicatorStyle;
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
//# sourceMappingURL=MessageHeaderConfiguration.js.map