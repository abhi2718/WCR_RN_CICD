/**
 * @class ShadowStyle
 * @description Style class creates an object, which can be applied to shadow property of component style
 */
export declare class ShadowStyle {
    elevation?: number;
    shadowOffset?: {
        width?: number;
        height?: number;
    };
    shadowColor?: string;
    shadowOpacity?: number;
    shadowRadius?: number;
    /**
     * @param {object} param0
     * @param {number} param0.elevation
     * @param {object} param0.shadowOffset
     * @param {string} param0.shadowColor
     * @param {number} param0.shadowOpacity
     * @param {number} param0.shadowRadius
     */
    constructor({ elevation, shadowOffset, shadowColor, shadowOpacity, shadowRadius, }: ShadowStyleInterface);
}
export interface ShadowStyleInterface {
    elevation?: number;
    shadowOffset?: {
        width?: number;
        height?: number;
    };
    shadowColor?: string;
    shadowOpacity?: number;
    shadowRadius?: number;
}
