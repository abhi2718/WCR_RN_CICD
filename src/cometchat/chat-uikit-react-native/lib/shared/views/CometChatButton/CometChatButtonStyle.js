import { BaseStyle } from "../../base";
export class ButtonStyle extends BaseStyle {
    iconTint;
    textFont;
    textColor;
    iconBackgroundColor;
    iconCornerRadius;
    iconBorder;
    constructor({ height, width, backgroundColor, border, borderRadius, iconTint, textFont, textColor, iconBackgroundColor, iconCornerRadius, iconBorder, }) {
        super({
            height,
            width,
            backgroundColor,
            border,
            borderRadius,
        });
        this.iconTint = iconTint;
        this.textFont = textFont;
        this.textColor = textColor;
        this.iconBackgroundColor = iconBackgroundColor;
        this.iconCornerRadius = iconCornerRadius;
        this.iconBorder = iconBorder;
    }
}
//# sourceMappingURL=CometChatButtonStyle.js.map