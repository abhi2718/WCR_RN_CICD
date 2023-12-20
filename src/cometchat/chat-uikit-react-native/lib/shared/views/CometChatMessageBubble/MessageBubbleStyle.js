import { BaseStyle, BorderStyle } from "../../base";
export class MessageBubbleStyle extends BaseStyle {
    constructor({ backgroundColor = "rgba(20,20,20,0.4)", border = new BorderStyle({}), borderRadius = 8, height = "auto", width = "auto", }) {
        super({
            backgroundColor,
            border,
            borderRadius,
            height,
            width
        });
    }
}
//# sourceMappingURL=MessageBubbleStyle.js.map