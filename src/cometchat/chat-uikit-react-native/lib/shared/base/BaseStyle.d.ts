import { BorderStyleInterface } from './BorderStyle';
/**
 * @class BaseStyle
 * @description BaseStyle class is the parent class used for defining the basic styling props.
 * @param {string} width
 * @param {string|number} height
 * @param {string} backgroundColor
 * @param {number} borderRadius
 * @param {object} border

 */
export declare class BaseStyle {
    height?: string | number;
    width?: string | number;
    backgroundColor?: string;
    border?: BorderStyleInterface;
    borderRadius?: number;
    constructor({ width, height, backgroundColor, border, borderRadius, }: BaseStyleInterface);
}
export interface BaseStyleInterface {
    height?: number | string;
    width?: number | string;
    backgroundColor?: string;
    border?: BorderStyleInterface;
    borderRadius?: number;
}
