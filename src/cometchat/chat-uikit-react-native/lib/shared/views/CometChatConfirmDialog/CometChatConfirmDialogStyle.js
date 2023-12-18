export class CometChatConfirmDialogStyle {
    messageTextColor;
    titleTextStyle;
    // messageTextFont?: FontStyleInterface;
    messageTextStyle;
    cancelBackground;
    cancelButtonTextColor;
    cancelButtonTextFont;
    confirmBackground;
    confirmButtonTextColor;
    confirmButtonTextFont;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=CometChatConfirmDialogStyle.js.map