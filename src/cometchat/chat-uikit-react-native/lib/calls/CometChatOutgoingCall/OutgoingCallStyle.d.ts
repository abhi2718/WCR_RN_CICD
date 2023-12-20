import { BaseStyle, BaseStyleInterface, FontStyleInterface } from "../../shared/base";
export interface OutgoingCallStyleInterface extends BaseStyleInterface {
    titleColor?: string;
    subtitleColor?: string;
    titleFont?: FontStyleInterface;
    subtitleFont?: FontStyleInterface;
}
export declare class OutgoingCallStyle extends BaseStyle implements OutgoingCallStyleInterface {
    titleColor?: string;
    subtitleColor?: string;
    titleFont?: FontStyleInterface;
    subtitleFont?: FontStyleInterface;
    constructor({ backgroundColor, border, borderRadius, height, subtitleColor, subtitleFont, titleColor, titleFont, width }: OutgoingCallStyleInterface);
}
