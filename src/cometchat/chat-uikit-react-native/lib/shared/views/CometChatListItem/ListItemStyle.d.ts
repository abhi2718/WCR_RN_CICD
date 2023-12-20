import { BaseStyle, BaseStyleInterface, FontStyleInterface } from '../../base';
/**
 * @class ListItemStyle
 * @description ListItemStyle class is used for defining the ListItemStyle template.
 * @param {any} width
 * @param {any} height
 * @param {string} backgroundColor
 * @param {object} border
 * @param {any} borderRadius
 * @param {string} titleColor
 * @param {object} titleFont
 * @param {string} subtitleColor
 * @param {object} subtitleFont
 * @param {string} typingIndicatorTextColor
 * @param {object} typingIndicatorTextFont
 * @param {string} threadIndicatorTextColor
 * @param {object} threadIndicatorTextFont
 */
export declare class ListItemStyle extends BaseStyle {
    titleColor?: string;
    titleFont?: FontStyleInterface;
    constructor({ width, height, backgroundColor, border, borderRadius, titleColor, titleFont, }: ListItemStyleInterface);
}
export interface ListItemStyleInterface extends BaseStyleInterface {
    titleColor?: string;
    titleFont?: FontStyleInterface;
}
