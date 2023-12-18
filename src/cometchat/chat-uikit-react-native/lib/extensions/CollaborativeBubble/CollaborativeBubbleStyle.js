import { BaseStyle, FontStyle } from "../../shared/base";
export class CollaborativeBubbleStyle extends BaseStyle {
    iconTint;
    titleColor;
    titleFont;
    subTitleFont;
    subTitleColor;
    buttonBackgroundColor;
    buttonTextColor;
    buttonTextFont;
    dividerTint;
    constructor({ width = 228, height = 142, iconTint = "rgba(20, 20, 20, 0.69)", titleFont = new FontStyle({ fontSize: 15, fontWeight: "500" }), titleColor = "rgba(20,20,20,1)", backgroundColor = "transparent", subTitleFont = new FontStyle({ fontSize: 13, fontWeight: "400" }), subTitleColor = "rgba(20,20,20,0.58)", borderRadius = 10, buttonTextColor = "rgba(51,153,255,1)", buttonTextFont = new FontStyle({ fontSize: 16, fontWeight: "700" }), buttonBackgroundColor = 'transparent', dividerTint = "rgba(20, 20, 20, 0.1)", }) {
        super({
            height,
            width,
            backgroundColor,
            borderRadius,
        });
        this.iconTint = iconTint;
        this.titleColor = titleColor;
        this.titleFont = titleFont;
        this.subTitleFont = subTitleFont;
        this.subTitleColor = subTitleColor;
        this.buttonBackgroundColor = buttonBackgroundColor;
        this.buttonTextColor = buttonTextColor;
        this.buttonTextFont = buttonTextFont;
        this.dividerTint = dividerTint;
    }
}
//# sourceMappingURL=CollaborativeBubbleStyle.js.map