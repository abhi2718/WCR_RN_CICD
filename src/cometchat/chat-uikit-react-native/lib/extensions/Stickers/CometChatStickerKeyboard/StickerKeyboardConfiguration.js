import { StickerKeyboardStyle } from "./StickerKeyboardStyle";
/**
 * @class StickerKeyboardConfiguration
 * @description StickerKeyboardConfiguration class is used for defining the StickerKeyboard templates.
 * @param {Function} onPress
 * @param {Object} style
 */
class StickerKeyboardConfiguration {
    onPress;
    style;
    constructor({ onPress = null, style = new StickerKeyboardStyle({}) }) {
        this.onPress = onPress;
        this.style = new StickerKeyboardStyle(style ?? {});
    }
}
export { StickerKeyboardConfiguration };
//# sourceMappingURL=StickerKeyboardConfiguration.js.map