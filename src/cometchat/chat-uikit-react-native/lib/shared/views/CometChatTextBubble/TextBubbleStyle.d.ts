import { BaseStyle, BaseStyleInterface, FontStyle } from "../../base";
export interface TextBubbleStyleInterface extends BaseStyleInterface {
    /**
     * color for text
     */
    textColor?: string;
    /**
     * font style for text
     */
    textFont?: FontStyle;
    /**
     * font syle for special text
     */
    linkTextFont?: FontStyle;
    /**
     * color for special text
     */
    linkTextColor?: string;
}
export declare class TextBubbleStyle extends BaseStyle {
    textColor: string;
    textFont: FontStyle;
    linkTextFont: FontStyle;
    linkTextColor: string;
    constructor({ width, height, backgroundColor, border, borderRadius, textColor, textFont, linkTextColor, linkTextFont, }: TextBubbleStyleInterface);
}
