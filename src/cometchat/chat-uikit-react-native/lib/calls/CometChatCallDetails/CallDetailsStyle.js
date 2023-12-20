import { BaseStyle } from "../../shared";
export class CallDetailsStyle extends BaseStyle {
    titleFont;
    titleColor;
    backIconTint;
    closeIconTint;
    onlineStatusColor;
    privateGroupIconBackground;
    protectedGroupIconBackground;
    constructor({ titleFont, titleColor, backIconTint, closeIconTint, onlineStatusColor, privateGroupIconBackground, protectedGroupIconBackground, backgroundColor, border, borderRadius, height, width, }) {
        super({
            backgroundColor,
            border,
            borderRadius,
            height,
            width,
        });
        this.titleFont = titleFont;
        this.titleColor = titleColor;
        this.backIconTint = backIconTint;
        this.closeIconTint = closeIconTint;
        this.onlineStatusColor = onlineStatusColor;
        this.privateGroupIconBackground = privateGroupIconBackground;
        this.protectedGroupIconBackground = protectedGroupIconBackground;
    }
}
//# sourceMappingURL=CallDetailsStyle.js.map