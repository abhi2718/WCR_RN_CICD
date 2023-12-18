import { BaseStyle, BorderStyle } from "../../base";
export class MediaRecorderStyle extends BaseStyle {
    pauseIconTint;
    playIconTint;
    closeIconTint;
    timerTextFont;
    timerTextColor;
    submitIconTint;
    startIconTint;
    stopIconTint;
    timerTextstyle;
    audioBarTint;
    constructor({ height = "auto", width = "auto", backgroundColor = "rgba(20, 20, 20, 0.04)", border = new BorderStyle({}), borderRadius = 8, pauseIconTint = "rgb(51, 153, 255)", playIconTint = "rgb(51, 153, 255)", closeIconTint = "rgba(20, 20, 20, 0.58)", startIconTint = "rgb(51, 153, 255)", stopIconTint = "rgb(237, 26, 26)", submitIconTint = "rgba(237, 26, 26)", audioBarTint = "rgba(20, 20, 20, 0.58)", timerTextFont = undefined, timerTextstyle = "normal", timerTextColor, }) {
        super({
            backgroundColor,
            border,
            borderRadius,
            height,
            width
        });
        this.pauseIconTint = pauseIconTint;
        this.playIconTint = playIconTint;
        this.closeIconTint = closeIconTint;
        this.timerTextFont = timerTextFont;
        this.timerTextColor = timerTextColor;
        this.submitIconTint = submitIconTint;
        this.startIconTint = startIconTint;
        this.stopIconTint = stopIconTint;
        this.timerTextstyle = timerTextstyle;
        this.audioBarTint = audioBarTint;
    }
}
//# sourceMappingURL=MediaRecorderStyle.js.map