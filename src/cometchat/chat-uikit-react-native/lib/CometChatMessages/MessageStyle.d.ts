import { BaseStyleInterface, BorderStyleInterface, FontStyleInterface } from "../shared";
export interface MessageStyleInterface extends BaseStyleInterface {
    messageTextColor?: string;
    messageTextFont?: FontStyleInterface;
}
export declare class MessageStyle implements MessageStyleInterface {
    messageTextColor?: string;
    messageTextFont?: FontStyleInterface;
    height?: string | number;
    width?: string | number;
    backgroundColor?: string;
    border?: BorderStyleInterface;
    borderRadius?: number;
    constructor({ messageTextColor, messageTextFont, backgroundColor, border, borderRadius, height, width, }: MessageStyleInterface);
}
