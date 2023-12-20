import { BaseStyle } from "../../shared/base";
export class CallButtonStyle extends BaseStyle {
    voiceCallIconTint;
    videoCallIconTint;
    buttonPadding;
    constructor({ backgroundColor, border, borderRadius, buttonPadding = 16, height = "auto", videoCallIconTint, voiceCallIconTint, width = "auto" }) {
        super({
            height,
            width,
            backgroundColor,
            border,
            borderRadius
        });
        this.voiceCallIconTint = voiceCallIconTint;
        this.videoCallIconTint = videoCallIconTint;
        this.buttonPadding = buttonPadding;
    }
}
//# sourceMappingURL=CallButtonStyle.js.map