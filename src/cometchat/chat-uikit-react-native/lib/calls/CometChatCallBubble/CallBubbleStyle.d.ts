import { BaseStyle, BaseStyleInterface, FontStyleInterface } from "../../shared/base";
export interface CallBubbleStyleInterface extends BaseStyleInterface {
    titleColor?: string;
    titleFont?: FontStyleInterface;
    iconTint?: string;
    buttonBackgroundColor?: string;
    buttonTextColor?: string;
    buttonTextFont?: FontStyleInterface;
}
export declare class CallBubbleStyle extends BaseStyle implements CallBubbleStyleInterface {
    titleColor?: string;
    titleFont?: FontStyleInterface;
    iconTint?: string;
    buttonBackgroundColor?: string;
    buttonTextColor?: string;
    buttonTextFont?: FontStyleInterface;
    constructor({ backgroundColor, border, borderRadius, buttonBackgroundColor, buttonTextColor, buttonTextFont, iconTint, titleColor, titleFont, height, width }: CallBubbleStyleInterface);
}
