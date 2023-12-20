import { BaseStyle, BaseStyleInterface } from "../../base";
export interface MessageBubbleStyleInterface extends BaseStyleInterface {
}
export declare class MessageBubbleStyle extends BaseStyle {
    constructor({ backgroundColor, border, borderRadius, height, width, }: MessageBubbleStyleInterface);
}
