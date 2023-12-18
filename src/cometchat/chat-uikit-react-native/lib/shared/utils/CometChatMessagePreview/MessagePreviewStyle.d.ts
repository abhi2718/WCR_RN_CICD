/**
 * @class MessagePreviewStyle
 * @param {String} border
 * @param {String} background
 * @param {String} messagePreviewTitleFont
 * @param {String} messagePreviewTitleColor
 * @param {String} messagePreviewSubtitleColor
 * @param {String} messagePreviewSubtitleFont
 * @param {String} closeIconTint
 */
export class MessagePreviewStyle extends BaseStyle {
    constructor({ messagePreviewTitleFont, messagePreviewTitleColor, messagePreviewSubtitleColor, messagePreviewSubtitleFont, closeIconTint, width, height, backgroundColor, border, borderRadius, }: {
        messagePreviewTitleFont?: {};
        messagePreviewTitleColor?: string;
        messagePreviewSubtitleColor?: string;
        messagePreviewSubtitleFont?: {};
        closeIconTint?: string;
        width?: string;
        height?: string;
        backgroundColor?: string;
        border?: BorderStyle;
        borderRadius?: number;
    });
    messagePreviewTitleFont: {};
    messagePreviewTitleColor: string;
    messagePreviewSubtitleColor: string;
    messagePreviewSubtitleFont: {};
    closeIconTint: string;
}
import { BaseStyle } from "../../../shared/base";
import { BorderStyle } from "../../../shared/base";
