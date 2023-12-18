export class DetailsConfiguration {
    avatarStyle;
    closeButtonIcon;
    CustomProfileView;
    data;
    deleteGroupDialogStyle;
    detailsStyle;
    disableUsersPresence;
    hideProfile;
    leaveGroupDialogStyle;
    listItemStyle;
    onBack;
    onError;
    privateGroupIcon;
    protectedGroupIcon;
    showCloseButton;
    statusIndicatorStyle;
    SubtitleView;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=DetailsConfiguration.js.map