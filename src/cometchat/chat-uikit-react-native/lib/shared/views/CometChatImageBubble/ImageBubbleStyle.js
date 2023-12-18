import { BaseStyle } from "../../base";
export class ImageBubbleStyle extends BaseStyle {
    constructor({ backgroundColor = "transparent", border = { borderWidth: 0, borderColor: "rgb(0,0,0)" }, borderRadius, height = "auto", width = "auto" }) {
        super({
            backgroundColor,
            border,
            borderRadius,
            height,
            width
        });
    }
}
//# sourceMappingURL=ImageBubbleStyle.js.map