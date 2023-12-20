import { BaseStyle, BaseStyleInterface, FontStyleInterface } from "../../base";
export interface CometChatCardStyleInterface extends BaseStyleInterface {
    titleColor?: string;
    titleFont?: FontStyleInterface;
}
export declare class CometChatCardStyle extends BaseStyle {
    titleColor?: string;
    titleFont?: FontStyleInterface;
    constructor({ backgroundColor, border, borderRadius, height, titleColor, titleFont, width }: CometChatCardStyleInterface);
}
