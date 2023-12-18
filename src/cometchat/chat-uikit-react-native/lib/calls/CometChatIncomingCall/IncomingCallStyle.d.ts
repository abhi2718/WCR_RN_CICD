import { BaseStyle, BaseStyleInterface, BorderStyleInterface, FontStyleInterface } from "../../shared";
export interface IncomingCallStyleInterface extends BaseStyleInterface {
    titleFont?: FontStyleInterface;
    titleColor?: string;
    subtitleFont?: FontStyleInterface;
    subtitleColor?: string;
    onlineStatusColor?: string;
    declineButtonTextColor?: string;
    declineButtonTextFont?: FontStyleInterface;
    declineButtonBackgroundColor?: string;
    declineButtonBorder?: BorderStyleInterface;
    acceptButtonTextColor?: string;
    acceptButtontextFont?: FontStyleInterface;
    acceptButtonBackgroundColor?: string;
    acceptButtonBorder?: BorderStyleInterface;
}
export declare class IncomingCallStyle extends BaseStyle implements IncomingCallStyle {
    titleFont?: FontStyleInterface;
    titleColor?: string;
    subtitleFont?: FontStyleInterface;
    subtitleColor?: string;
    onlineStatusColor?: string;
    declineButtonTextColor?: string;
    declineButtonTextFont?: FontStyleInterface;
    declineButtonBackgroundColor?: string;
    declineButtonBorder?: BorderStyleInterface;
    acceptButtonTextColor?: string;
    acceptButtontextFont?: FontStyleInterface;
    acceptButtonBackgroundColor?: string;
    acceptButtonBorder?: BorderStyleInterface;
    constructor({ width, height, backgroundColor, border, borderRadius, titleFont, titleColor, subtitleFont, subtitleColor, onlineStatusColor, declineButtonTextColor, declineButtonTextFont, declineButtonBackgroundColor, declineButtonBorder, acceptButtonTextColor, acceptButtontextFont, acceptButtonBackgroundColor, acceptButtonBorder }: IncomingCallStyleInterface);
}
