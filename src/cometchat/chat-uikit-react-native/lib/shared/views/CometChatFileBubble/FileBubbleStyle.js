import { BaseStyle, BorderStyle, FontStyle } from "../../base";
export class FileBubbleStyle extends BaseStyle {
    iconTint;
    subtitleColor;
    subtitleFont;
    titleColor;
    titleFont;
    constructor({ height = "auto", width = "auto", backgroundColor = "rgba(20, 20, 20, 0.04)", border = new BorderStyle({}), borderRadius = 8, iconTint = "rgb(51, 153, 255)", subtitleColor = "rgba(20, 20, 20, 0.58)", subtitleFont = new FontStyle({}), titleColor, titleFont = new FontStyle({ fontSize: 17, fontWeight: "500" }), }) {
        super({
            backgroundColor,
            border,
            borderRadius,
            height,
            width
        });
        this.iconTint = iconTint;
        this.subtitleColor = subtitleColor;
        this.subtitleFont = subtitleFont;
        this.titleColor = titleColor;
        this.titleFont = titleFont;
    }
}
//# sourceMappingURL=FileBubbleStyle.js.map