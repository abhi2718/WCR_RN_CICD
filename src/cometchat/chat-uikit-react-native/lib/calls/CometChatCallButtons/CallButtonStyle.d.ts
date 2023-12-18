import { BaseStyle, BaseStyleInterface } from "../../shared/base";
export interface CallButtonStyleInterface extends BaseStyleInterface {
    voiceCallIconTint?: string;
    videoCallIconTint?: string;
    buttonPadding?: number;
}
export declare class CallButtonStyle extends BaseStyle {
    voiceCallIconTint?: string;
    videoCallIconTint?: string;
    buttonPadding?: number;
    constructor({ backgroundColor, border, borderRadius, buttonPadding, height, videoCallIconTint, voiceCallIconTint, width }: CallButtonStyleInterface);
}
