import { FontStyleInterface } from '../../base';
import { BaseStyle, BaseStyleInterface } from '../../base/BaseStyle';
export declare class BadgeStyle extends BaseStyle {
    textColor?: string;
    textFont?: FontStyleInterface;
    constructor({ width, height, border, borderRadius, backgroundColor, textColor, textFont, }: BadgeStyleInterface);
}
export interface BadgeStyleInterface extends BaseStyleInterface {
    textColor?: string;
    textFont?: FontStyleInterface;
}
