import { BaseStyle, BaseStyleInterface, BorderStyleInterface, FontStyleInterface } from "../../base";
export interface ButtonStyleInterface extends BaseStyleInterface {
    iconTint?: string;
    textFont?: FontStyleInterface;
    textColor?: string;
    iconBackgroundColor?: string;
    iconCornerRadius?: number;
    iconBorder?: BorderStyleInterface;
}
export declare class ButtonStyle extends BaseStyle implements ButtonStyleInterface {
    iconTint?: string;
    textFont?: FontStyleInterface;
    textColor?: string;
    iconBackgroundColor?: string;
    iconCornerRadius?: number;
    iconBorder?: BorderStyleInterface;
    constructor({ height, width, backgroundColor, border, borderRadius, iconTint, textFont, textColor, iconBackgroundColor, iconCornerRadius, iconBorder, }: ButtonStyleInterface);
}
