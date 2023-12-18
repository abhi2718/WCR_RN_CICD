import { BaseStyle, FontStyle } from "../../base";
export interface FileBubbleStyleInterface extends BaseStyle {
    /**
     * tint for icon
     */
    iconTint?: string;
    /**
     * font style for title
     */
    titleFont?: FontStyle;
    /**
     * color for title
     */
    titleColor?: string;
    /**
     * font style for subtitle
     */
    subtitleFont?: FontStyle;
    /**
     * color for subtitle
     */
    subtitleColor?: string;
}
export declare class FileBubbleStyle extends BaseStyle {
    iconTint: string;
    subtitleColor: string;
    subtitleFont: FontStyle;
    titleColor: string;
    titleFont: FontStyle;
    constructor({ height, width, backgroundColor, border, borderRadius, iconTint, subtitleColor, subtitleFont, titleColor, titleFont, }: FileBubbleStyleInterface);
}
