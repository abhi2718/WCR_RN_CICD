/**
 * @class MessagePreviewConfiguration
 * @description MessagePreviewConfiguration class is used for defining the MessagePreview templates.
 * @param {String} iconURL
 * @param {String} text
 * @param {Object} tail
 * @param {Function} onItemClick
 * @param {Number} id
 */
export class MessagePreviewConfiguration {
    constructor({ messagePreviewTitle, messagePreviewSubtitle, closeIconURL, onCloseClick, style, }: {
        messagePreviewTitle?: any;
        messagePreviewSubtitle?: any;
        closeIconURL?: any;
        onCloseClick?: any;
        style?: MessagePreviewStyle;
    });
    messagePreviewTitle: any;
    messagePreviewSubtitle: any;
    closeIconURL: any;
    onCloseClick: any;
    style: MessagePreviewStyle;
}
import { MessagePreviewStyle } from "./MessagePreviewStyle";
