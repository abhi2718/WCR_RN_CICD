import { BaseStyle, BaseStyleInterface, FontStyle } from "../../base";
export interface AudioBubbleStyleInterface extends BaseStyleInterface {
    iconTint?: string;
    titleFont?: FontStyle;
    titleColor?: string;
    subtitleFont?: FontStyle;
    subtitleColor?: string;
}
export declare class AudioBubbleStyle extends BaseStyle {
    iconTint: string;
    titleFont: FontStyle;
    titleColor: string;
    subtitleFont: FontStyle;
    subtitleColor: string;
    constructor({ height, width, backgroundColor, border, borderRadius, iconTint, titleFont, titleColor, subtitleFont, subtitleColor, }: AudioBubbleStyleInterface);
}
