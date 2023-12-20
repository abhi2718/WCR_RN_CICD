import { BorderStyleInterface, FontStyleInterface } from '../../base';
import { BaseStyle, BaseStyleInterface } from '../../base/BaseStyle';
export declare class AvatarStyle extends BaseStyle {
    nameTextFont?: FontStyleInterface;
    nameTextColor?: string;
    outerView?: BorderStyleInterface;
    outerViewSpacing?: number;
    /**
     *
     * @param {Object} param0
     * @field height
     * @field width
     * @field border
     * @field borderRadius
     * @field backgroundColor
     * @field nameTextColor
     * @field nameTextFont
     * @field outerView
     * @field outerViewSpacing
     */
    constructor({ height, width, border, borderRadius, backgroundColor, nameTextColor, nameTextFont, outerView, outerViewSpacing, }: AvatarStyleInterface);
}
export interface AvatarStyleInterface extends BaseStyleInterface {
    nameTextFont?: FontStyleInterface;
    nameTextColor?: string;
    outerView?: BorderStyleInterface;
    outerViewSpacing?: number;
}
