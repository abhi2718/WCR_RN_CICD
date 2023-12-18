import { Palette } from './Palette';
import { Typography } from './Typography';
/**
 *
 * CometChatTheme is a component useful to add style to different components.
 * This component returns an JSON object of Palette and Typography
 *
 * @version 1.0.0
 * @author CometChat
 * @class CometChatTheme
 * @param {Object} palette
 * @param {Object} typography
 */
declare class CometChatTheme {
    palette: Palette;
    typography: Typography;
    constructor({ palette, typography }: {
        palette?: Palette;
        typography?: Typography;
    });
}
export { CometChatTheme, Palette, Typography };
