import { BaseStyle, BorderStyle, FontStyle } from "../shared";
export class MessageListStyle extends BaseStyle {
    nameTextFont;
    nameTextColor;
    threadReplySeparatorColor;
    threadReplyTextFont;
    threadReplyIconTint;
    threadReplyTextColor;
    timestampTextFont;
    timestampTextColor;
    emptyStateTextFont;
    emptyStateTextColor;
    errorStateTextFont;
    errorStateTextColor;
    loadingIconTint;
    constructor({ backgroundColor = "white", border = new BorderStyle({}), borderRadius = 0, height = "100%", width = "100%", nameTextFont = new FontStyle({ fontSize: 13, fontWeight: "500" }), nameTextColor = "rgb(20, 20, 20)", threadReplySeparatorColor = "rgba(20,20,20,0.06)", threadReplyTextFont = new FontStyle({}), threadReplyIconTint = "rgba(20, 20, 20, 0.4)", threadReplyTextColor = "rgb(51, 153, 255)", timestampTextFont = new FontStyle({}), timestampTextColor = "rgba(0, 0, 0, 0.4)", emptyStateTextFont = new FontStyle({}), emptyStateTextColor = "rgba(255, 255, 255, 0.4)", errorStateTextFont = new FontStyle({}), errorStateTextColor = "rgb(255, 59, 48)", loadingIconTint = "rgba(20, 20, 20, 0.58)", }) {
        super({
            backgroundColor,
            border,
            borderRadius,
            height,
            width
        });
        this.nameTextFont = nameTextFont;
        this.nameTextColor = nameTextColor;
        this.threadReplySeparatorColor = threadReplySeparatorColor;
        this.threadReplyTextFont = threadReplyTextFont;
        this.threadReplyIconTint = threadReplyIconTint;
        this.threadReplyTextColor = threadReplyTextColor;
        this.timestampTextFont = timestampTextFont;
        this.timestampTextColor = timestampTextColor;
        this.emptyStateTextFont = emptyStateTextFont;
        this.emptyStateTextColor = emptyStateTextColor;
        this.errorStateTextFont = errorStateTextFont;
        this.errorStateTextColor = errorStateTextColor;
        this.loadingIconTint = loadingIconTint;
    }
}
//# sourceMappingURL=MessageListStyle.js.map