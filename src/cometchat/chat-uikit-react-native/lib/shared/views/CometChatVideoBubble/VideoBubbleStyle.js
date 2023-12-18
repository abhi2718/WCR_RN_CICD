import { BaseStyle, BorderStyle } from "../../base";
export class VideoBubbleStyle extends BaseStyle {
    playIconTint;
    playIconBackgroundColor;
    constructor({ height = 24, width = 24, backgroundColor = "transparent", border = new BorderStyle({}), borderRadius = 0, playIconBackgroundColor = "rgba(20,20,20,0.4)", playIconTint = "white" }) {
        super({
            height,
            width,
            backgroundColor,
            border,
            borderRadius
        });
        this.playIconTint = playIconTint;
        this.playIconBackgroundColor = playIconBackgroundColor;
    }
}
//# sourceMappingURL=VideoBubbleStyle.js.map