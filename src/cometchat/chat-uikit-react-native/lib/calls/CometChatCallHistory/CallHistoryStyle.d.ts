import { BaseStyle, BaseStyleInterface, FontStyleInterface } from "../../shared";
export interface CallHistoryStyleInterface extends BaseStyleInterface {
    titleFont?: FontStyleInterface;
    titleColor?: string;
}
export declare class CallHistoryStyle extends BaseStyle implements CallHistoryStyleInterface {
    titleFont?: FontStyleInterface;
    titleColor?: string;
    loadingTint?: string;
    emptyTextFont?: FontStyleInterface;
    emptyTextColor?: string;
    constructor({ titleFont, backgroundColor, border, borderRadius, height, titleColor, width }: CallHistoryStyleInterface);
}
