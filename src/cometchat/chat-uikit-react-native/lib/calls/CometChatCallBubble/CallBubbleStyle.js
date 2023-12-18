import { BaseStyle } from "../../shared/base";
export class CallBubbleStyle extends BaseStyle {
    titleColor;
    titleFont;
    iconTint;
    buttonBackgroundColor;
    buttonTextColor;
    buttonTextFont;
    constructor({ backgroundColor, border, borderRadius, buttonBackgroundColor, buttonTextColor, buttonTextFont, iconTint, titleColor, titleFont = { fontSize: 18 }, height, width }) {
        super({
            height,
            width,
            backgroundColor,
            border,
            borderRadius
        });
        this.buttonBackgroundColor = buttonBackgroundColor;
        this.buttonTextColor = buttonTextColor;
        this.buttonTextFont = buttonTextFont;
        this.iconTint = iconTint;
        this.titleColor = titleColor;
        this.titleFont = titleFont;
    }
}
//# sourceMappingURL=CallBubbleStyle.js.map