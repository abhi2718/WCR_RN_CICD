import { BaseStyle } from "../../shared";
export class CallHistoryStyle extends BaseStyle {
    titleFont;
    titleColor;
    loadingTint;
    emptyTextFont;
    emptyTextColor;
    constructor({ titleFont = { fontSize: 20, fontWeight: "600" }, backgroundColor = "white", border, borderRadius, height, titleColor = "#000", width }) {
        super({
            backgroundColor: backgroundColor,
            border: border,
            borderRadius: borderRadius,
            height: height,
            width: width
        });
        this.titleColor = titleColor;
        this.titleFont = titleFont;
    }
}
//# sourceMappingURL=CallHistoryStyle.js.map