/**
 * *
 * @class BorderStyle
 * @description BorderStyle class is used for defining the border.
 * @param  {number} borderWidth
 * @param  {string} borderStyle
 * @param  {string} borderColor
 */
export declare class BorderStyle {
    borderWidth?: number;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
    borderColor?: string;
    constructor({ borderWidth, borderStyle, borderColor, }: BorderStyleInterface);
}
export interface BorderStyleInterface {
    borderWidth?: number;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
    borderColor?: string;
}
