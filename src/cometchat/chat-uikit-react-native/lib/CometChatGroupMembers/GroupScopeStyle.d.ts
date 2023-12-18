import { BaseStyle, BaseStyleInterface, BorderStyleInterface, FontStyleInterface } from "../shared";
export interface GroupScopeStyleInterface extends BaseStyleInterface {
    selectedOptionTextFont?: FontStyleInterface;
    selectedOptionTextColor?: string;
    selectedOptionBackgroundColor?: string;
    selectedOptionBorder?: BorderStyleInterface;
    selectedOptionBorderRadius?: number;
    arrowIconTint?: string;
    optionTextFont?: FontStyleInterface;
    optionTextColor?: string;
    optionBackgroundColor?: string;
    optionBorder?: BorderStyleInterface;
    optionBorderRadius?: number;
}
export declare class GroupScopeStyle extends BaseStyle {
    selectedOptionTextFont?: FontStyleInterface;
    selectedOptionTextColor?: string;
    selectedOptionBackgroundColor?: string;
    selectedOptionBorder?: BorderStyleInterface;
    selectedOptionBorderRadius?: number;
    arrowIconTint?: string;
    optionTextFont?: FontStyleInterface;
    optionTextColor?: string;
    optionBackgroundColor?: string;
    optionBorder?: BorderStyleInterface;
    optionBorderRadius?: number;
    constructor({ width, height, backgroundColor, border, borderRadius, selectedOptionTextFont, selectedOptionTextColor, selectedOptionBackgroundColor, selectedOptionBorder, selectedOptionBorderRadius, arrowIconTint, optionTextFont, optionTextColor, optionBackgroundColor, optionBorder, optionBorderRadius, }: GroupScopeStyleInterface);
}
