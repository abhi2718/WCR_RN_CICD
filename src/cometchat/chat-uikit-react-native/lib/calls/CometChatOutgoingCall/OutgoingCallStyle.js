import { BaseStyle } from "../../shared/base";
export class OutgoingCallStyle extends BaseStyle {
    titleColor;
    subtitleColor;
    titleFont;
    subtitleFont;
    constructor({ backgroundColor, border, borderRadius, height, subtitleColor, subtitleFont, titleColor, titleFont, width }) {
        super({
            backgroundColor,
            border,
            borderRadius,
            height,
            width
        });
        this.subtitleColor = subtitleColor;
        this.subtitleFont = subtitleFont;
        this.titleColor = titleColor;
        this.titleFont = titleFont;
    }
}
//# sourceMappingURL=OutgoingCallStyle.js.map