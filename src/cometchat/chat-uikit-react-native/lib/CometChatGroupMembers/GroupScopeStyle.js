import { BaseStyle, BorderStyle, FontStyle } from "../shared";
export class GroupScopeStyle extends BaseStyle {
    selectedOptionTextFont;
    selectedOptionTextColor;
    selectedOptionBackgroundColor;
    selectedOptionBorder;
    selectedOptionBorderRadius;
    arrowIconTint;
    optionTextFont;
    optionTextColor;
    optionBackgroundColor;
    optionBorder;
    optionBorderRadius;
    constructor({ width = '100%', height = '100%', backgroundColor = "rgba(0,0,0,0)", border = new BorderStyle({}), borderRadius = 8, selectedOptionTextFont = new FontStyle({ fontWeight: "bold" }), selectedOptionTextColor = "#3399FF", selectedOptionBackgroundColor = "rgba(20,20,20,0.1)", selectedOptionBorder = new BorderStyle({}), selectedOptionBorderRadius = 0, arrowIconTint = "#3399FF", optionTextFont = new FontStyle({ fontSize: 15, fontWeight: "400" }), optionTextColor = "#141414", optionBackgroundColor = "transparent", optionBorder = new BorderStyle({}), optionBorderRadius = 0, }) {
        super({
            width,
            height,
            backgroundColor,
            border,
            borderRadius,
        });
        this.selectedOptionTextFont = selectedOptionTextFont;
        this.selectedOptionTextColor = selectedOptionTextColor;
        this.selectedOptionBackgroundColor = selectedOptionBackgroundColor;
        this.selectedOptionBorder = selectedOptionBorder;
        this.selectedOptionBorderRadius = selectedOptionBorderRadius;
        this.arrowIconTint = arrowIconTint;
        this.optionTextFont = optionTextFont;
        this.optionTextColor = optionTextColor;
        this.optionBackgroundColor = optionBackgroundColor;
        this.optionBorder = optionBorder;
        this.optionBorderRadius = optionBorderRadius;
    }
}
//# sourceMappingURL=GroupScopeStyle.js.map