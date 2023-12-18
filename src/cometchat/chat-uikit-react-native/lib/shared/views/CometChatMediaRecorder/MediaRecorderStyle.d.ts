import { BaseStyle, FontStyle } from "../../base";
export interface MediaRecorderStyleInterface extends BaseStyle {
    pauseIconTint?: string;
    playIconTint?: string;
    closeIconTint?: string;
    timerTextFont?: FontStyle;
    timerTextColor?: FontStyle;
    submitIconTint?: string;
    startIconTint?: string;
    stopIconTint?: string;
    timerTextstyle?: string;
    audioBarTint?: string;
}
export declare class MediaRecorderStyle extends BaseStyle {
    pauseIconTint?: string;
    playIconTint?: string;
    closeIconTint?: string;
    timerTextFont?: FontStyle;
    timerTextColor?: FontStyle;
    submitIconTint?: string;
    startIconTint?: string;
    stopIconTint?: string;
    timerTextstyle?: string;
    audioBarTint?: string;
    constructor({ height, width, backgroundColor, border, borderRadius, pauseIconTint, playIconTint, closeIconTint, startIconTint, stopIconTint, submitIconTint, audioBarTint, timerTextFont, timerTextstyle, timerTextColor, }: MediaRecorderStyleInterface);
}
