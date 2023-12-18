import { StickerKeyboardStyle, StickerKeyboardStyleInterface } from "./StickerKeyboardStyle";
import { CometChat } from "@cometchat/chat-sdk-react-native";
/**
 * @class StickerKeyboardConfiguration
 * @description StickerKeyboardConfiguration class is used for defining the StickerKeyboard templates.
 * @param {Function} onPress
 * @param {Object} style
 */
declare class StickerKeyboardConfiguration {
    onPress: (item: CometChat.CustomMessage) => void;
    style: StickerKeyboardStyleInterface;
    constructor({ onPress, style }: {
        onPress?: any;
        style?: StickerKeyboardStyle;
    });
}
export { StickerKeyboardConfiguration };
