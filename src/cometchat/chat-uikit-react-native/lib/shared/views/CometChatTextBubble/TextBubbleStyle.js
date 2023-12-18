import { BaseStyle, BorderStyle, FontStyle } from "../../base";
export class TextBubbleStyle extends BaseStyle {
    textColor;
    textFont;
    linkTextFont;
    linkTextColor;
    constructor({ width = "auto", height = "auto", backgroundColor = "rgba(20,20,20,0.04)", border = new BorderStyle({}), borderRadius = 0, textColor = "rgb(20, 20, 20)", textFont = new FontStyle({ fontSize: 17, fontWeight: "400" }), linkTextColor = "blue", linkTextFont = new FontStyle({ fontSize: 17, fontWeight: "400" }), }) {
        super({
            width,
            height,
            backgroundColor,
            border,
            borderRadius
        });
        this.textColor = textColor;
        this.textFont = new FontStyle({ ...textFont });
        this.linkTextColor = linkTextColor;
        this.linkTextFont = new FontStyle({ ...linkTextFont });
    }
}
//# sourceMappingURL=TextBubbleStyle.js.map