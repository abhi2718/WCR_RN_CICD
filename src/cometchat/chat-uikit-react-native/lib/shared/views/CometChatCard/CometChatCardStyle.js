import { BaseStyle } from "../../base";
export class CometChatCardStyle extends BaseStyle {
    titleColor;
    titleFont;
    constructor({ backgroundColor, border, borderRadius, height, titleColor, titleFont, width }) {
        super({
            height,
            backgroundColor,
            border,
            borderRadius,
            width
        });
        this.titleColor = titleColor;
        this.titleFont = titleFont;
    }
}
//# sourceMappingURL=CometChatCardStyle.js.map