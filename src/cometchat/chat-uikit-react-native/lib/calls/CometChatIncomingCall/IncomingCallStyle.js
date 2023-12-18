import { BaseStyle } from "../../shared";
export class IncomingCallStyle extends BaseStyle {
    titleFont;
    titleColor;
    subtitleFont;
    subtitleColor;
    onlineStatusColor;
    declineButtonTextColor;
    declineButtonTextFont;
    declineButtonBackgroundColor;
    declineButtonBorder;
    acceptButtonTextColor;
    acceptButtontextFont;
    acceptButtonBackgroundColor;
    acceptButtonBorder;
    constructor({ width, height, backgroundColor = "rgb(50, 50, 51)", border, borderRadius, titleFont, titleColor, subtitleFont, subtitleColor, onlineStatusColor, declineButtonTextColor, declineButtonTextFont, declineButtonBackgroundColor, declineButtonBorder, acceptButtonTextColor, acceptButtontextFont, acceptButtonBackgroundColor, acceptButtonBorder }) {
        super({
            height,
            backgroundColor,
            border,
            borderRadius,
            width,
        });
        this.titleFont = titleFont;
        this.titleColor = titleColor;
        this.subtitleFont = subtitleFont;
        this.subtitleColor = subtitleColor;
        this.onlineStatusColor = onlineStatusColor;
        this.declineButtonTextColor = declineButtonTextColor;
        this.declineButtonTextFont = declineButtonTextFont;
        this.declineButtonBackgroundColor = declineButtonBackgroundColor;
        this.declineButtonBorder = declineButtonBorder;
        this.acceptButtonTextColor = acceptButtonTextColor;
        this.acceptButtontextFont = acceptButtontextFont;
        this.acceptButtonBackgroundColor = acceptButtonBackgroundColor;
        this.acceptButtonBorder = acceptButtonBorder;
    }
}
//# sourceMappingURL=IncomingCallStyle.js.map