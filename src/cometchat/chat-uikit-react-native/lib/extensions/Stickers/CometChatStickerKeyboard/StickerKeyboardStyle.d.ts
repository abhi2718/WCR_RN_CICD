import { BaseStyle, BaseStyleInterface, FontStyleInterface } from "../../../shared/base";
export interface StickerKeyboardStyleInterface extends BaseStyleInterface {
    categoryBackground?: string;
    emptyTextFont?: FontStyleInterface;
    emptyTextColor?: string;
    errorTextFont?: FontStyleInterface;
    errorTextColor?: string;
    loadingTextFont?: FontStyleInterface;
    loadingTextColor?: string;
}
export declare class StickerKeyboardStyle extends BaseStyle {
    categoryBackground: string;
    emptyTextFont: FontStyleInterface;
    emptyTextColor: string;
    errorTextFont: FontStyleInterface;
    errorTextColor: string;
    loadingTextFont: FontStyleInterface;
    loadingTextColor: string;
    constructor({ categoryBackground, emptyTextFont, emptyTextColor, errorTextFont, errorTextColor, loadingTextFont, loadingTextColor, width, height, backgroundColor, border, borderRadius, }: StickerKeyboardStyleInterface);
}
