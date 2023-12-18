import { BaseStyle, BaseStyleInterface, FontStyleInterface } from "../../shared/base";
/**
 * @class WhiteboardStyle
 * @description Class to create style object for collaborative white board message compoment.
 */
export interface CollaborativeBubbleStyleInterface extends BaseStyleInterface {
    /**
     * color for text
     */
    iconTint?: string;
    /**
     * titleColor for text
     */
    titleColor?: string;
    /**
     * titleFont for special text
     */
    titleFont?: FontStyleInterface;
    /**
     * color for special text
     */
    subTitleFont?: FontStyleInterface;
    /**
    * subTitleColor for special text
    */
    subTitleColor?: string;
    /**
     * buttonBackgroundColor for special text
     */
    buttonBackgroundColor?: string;
    /**
     * buttonTextColor for special text
     */
    buttonTextColor?: string;
    /**
     * buttonTextFont for special text
     */
    buttonTextFont?: FontStyleInterface;
    /**
     * dividerTint for special text
     */
    dividerTint?: string;
}
export declare class CollaborativeBubbleStyle extends BaseStyle {
    iconTint: string;
    titleColor: string;
    titleFont: FontStyleInterface;
    subTitleFont: FontStyleInterface;
    subTitleColor: string;
    buttonBackgroundColor: string;
    buttonTextColor: string;
    buttonTextFont: FontStyleInterface;
    dividerTint: string;
    constructor({ width, height, iconTint, titleFont, titleColor, backgroundColor, subTitleFont, subTitleColor, borderRadius, buttonTextColor, buttonTextFont, buttonBackgroundColor, dividerTint, }: CollaborativeBubbleStyleInterface);
}
