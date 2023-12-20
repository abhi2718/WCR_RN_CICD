import { BaseStyle, BaseStyleInterface } from '../../base/BaseStyle';
import { FontStyle, FontStyleInterface } from '../../base/FontStyle';
export declare class DateStyle extends BaseStyle {
    textColor?: string;
    textFont?: FontStyle;
    constructor({ textColor, border, backgroundColor, borderRadius, textFont, }: DateStyleInterface);
}
export interface DateStyleInterface extends BaseStyleInterface {
    textColor?: string;
    textFont?: FontStyleInterface;
}
