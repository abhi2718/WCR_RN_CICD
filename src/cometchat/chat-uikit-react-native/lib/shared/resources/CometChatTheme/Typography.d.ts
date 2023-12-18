import { FontStyle } from "../../../shared/base";
/**
 *
 * Typography is a class containing default styles of text with diffrent titles.
 * This class returns JSON objects of text styles
 * This class also contains the setter methods for the styles.
 *
 * @version 1.0.0
 * @author CometChat
 *
 * @param {String} fontFamily
 * @param {String} fontWeightRegular
 * @param {String} fontWeightMedium
 * @param {String} fontWeightSemibold
 * @param {String} fontWeightBold
 * @param {Object} heading
 * @param {Object} name
 * @param {Object} title1
 * @param {Object} title2
 * @param {Object} subtitle1
 * @param {Object} subtitle2
 * @param {Object} text1
 * @param {Object} text2
 * @param {Object} caption1
 * @param {Object} caption2
 * @param {Object} body
 */
declare class Typography {
    fontFamily: any;
    fontWeightRegular: "400";
    fontWeightMedium: "500";
    fontWeightSemibold: "600";
    fontWeightBold: "700";
    heading: FontStyle;
    name: FontStyle;
    title1: FontStyle;
    title2: FontStyle;
    subtitle1: FontStyle;
    subtitle2: FontStyle;
    text1: FontStyle;
    text2: FontStyle;
    caption1: FontStyle;
    caption2: FontStyle;
    body: FontStyle;
    constructor({ fontFamily, fontWeightRegular, fontWeightMedium, fontWeightSemibold, fontWeightBold, heading, name, title1, title2, subtitle1, subtitle2, text1, text2, caption1, caption2, body, }: {
        fontFamily?: any;
        fontWeightRegular?: string;
        fontWeightMedium?: string;
        fontWeightSemibold?: string;
        fontWeightBold?: string;
        heading?: FontStyle;
        name?: FontStyle;
        title1?: FontStyle;
        title2?: FontStyle;
        subtitle1?: FontStyle;
        subtitle2?: FontStyle;
        text1?: FontStyle;
        text2?: FontStyle;
        caption1?: FontStyle;
        caption2?: FontStyle;
        body?: FontStyle;
    });
    setFontFamily(fontFamily: any): void;
    setFontWeightRegular(fontWeightRegular: any): void;
    setFontWeightMedium(fontWeightMedium: any): void;
    setFontWeightSemibold(fontWeightSemibold: any): void;
    setFontWeightBold(fontWeightBold: any): void;
    setHeading(headingFont: any): void;
    setName(nameFont: any): void;
    setTitle1(titleFont: any): void;
    setTitle2(titleFont: any): void;
    setSubtitle1(subtitleFont: any): void;
    setSubtitle2(subtitleFont: any): void;
    setText1(textFont: any): void;
    setText2(textFont: any): void;
    setCaption1(captionFont: any): void;
    setCaption2(captionFont: any): void;
    setBody(bodyFont: any): void;
}
export { Typography };
