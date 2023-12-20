import { EmojiKeyboardStyle } from "./EmojiKeyboardStyle";
/**
 * @class EmojiKeyboardConfiguration
 * @description EmojiKeyboardConfiguration class is used for defining the EmojiKeyboard templates.
 * @param {Boolean} hideSearch
 * @param {Function} onClick
 * @param {Object} style
 */
declare class EmojiKeyboardConfiguration {
    hideSearch: boolean;
    onClick: any;
    style: EmojiKeyboardStyle;
    constructor({ hideSearch, onClick, style, }: {
        hideSearch?: boolean;
        onClick?: any;
        style?: EmojiKeyboardStyle;
    });
}
export { EmojiKeyboardConfiguration };
