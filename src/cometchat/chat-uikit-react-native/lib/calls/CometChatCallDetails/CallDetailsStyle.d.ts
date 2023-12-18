import { BaseStyle, BaseStyleInterface, FontStyleInterface } from "../../shared";
export interface CallDetailsStyleInterface extends BaseStyleInterface {
    titleFont?: FontStyleInterface;
    titleColor?: string;
    backIconTint?: string;
    closeIconTint?: string;
    onlineStatusColor?: string;
    privateGroupIconBackground?: string;
    protectedGroupIconBackground?: string;
}
export declare class CallDetailsStyle extends BaseStyle {
    titleFont?: FontStyleInterface;
    titleColor?: string;
    backIconTint?: string;
    closeIconTint?: string;
    onlineStatusColor?: string;
    privateGroupIconBackground?: string;
    protectedGroupIconBackground?: string;
    constructor({ titleFont, titleColor, backIconTint, closeIconTint, onlineStatusColor, privateGroupIconBackground, protectedGroupIconBackground, backgroundColor, border, borderRadius, height, width, }: CallDetailsStyleInterface);
}
