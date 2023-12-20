import { BorderStyleInterface, FontStyleInterface } from "../../base";
/**
 * @class BadgeCoundConfiguration
 * @description BadgeConfiguration class is used for defining the BadgeCount template.
 */
export declare class BadgeConfiguration {
    width?: number | string;
    height?: number | string;
    border?: BorderStyleInterface;
    borderRadius?: number;
    backgroundColor?: string;
    textColor?: string;
    textFont?: FontStyleInterface;
    /**
     * @param {Object} param0
     * @field {number} width - width for component
     * @field {number} height - height for component
     * @field {object} border - object of {borderWidth, borderColor, borderStylw}
     * @field {string} backgroundColor - background colour for componnet
     * @field {number} borderRadius - border radius
     * @field {string} textColor - text color
     * @field {string} textFont - object of {fontFamily, fontSize, fontWeight}
     */
    constructor({ width, height, border, backgroundColor, borderRadius, textColor, textFont, }: BadgeConfigurationInterface);
}
export interface BadgeConfigurationInterface {
    width?: number | string;
    height?: number | string;
    border?: BorderStyleInterface;
    borderRadius?: number;
    backgroundColor?: string;
    textColor?: string;
    textFont?: FontStyleInterface;
}
