import { BaseStyle, FontStyleInterface, BaseStyleInterface } from "../../base";
export interface ActionSheetStylesInterface extends BaseStyleInterface {
    layoutModeIconTint?: string;
    titleFont?: FontStyleInterface;
    titleColor?: string;
    listItemIconTint?: string;
    listItemTitleFont?: FontStyleInterface;
    listItemTitleColor?: string;
    listItemIconBackground?: string;
    listItemIconBorderRadius?: number;
    actionSheetSeparatorTint?: string;
}
/**
 * @class ActionSheetStyles
 */
export declare class ActionSheetStyles extends BaseStyle {
    layoutModeIconTint: string;
    titleFont: FontStyleInterface;
    titleColor: string;
    listItemIconTint: string;
    listItemTitleFont: FontStyleInterface;
    listItemTitleColor: string;
    listItemIconBackground: string;
    listItemIconBorderRadius: number;
    actionSheetSeparatorTint: string;
    /**
     * @param {object} param0
     * @param {any} width
     * @param {any} height
     * @param {string} backgroundColor
     * @param {object} border
     * @param {number} borderRadius
     * @param {string} layoutModeIconTint
     * @param {object} titleFont
     * @param {string} titleColor
     * @param {object} listItemIconTint
     * @param {string} listItemIconBackground
     * @param {number} listItemIconBorderRadius
     * @param {object} listItemTitleFont
     * @param {string} listItemTitleColor
     */
    constructor({ width, height, backgroundColor, border, borderRadius, layoutModeIconTint, titleFont, titleColor, listItemIconTint, listItemIconBackground, listItemIconBorderRadius, listItemTitleFont, listItemTitleColor, }: ActionSheetStylesInterface);
}
