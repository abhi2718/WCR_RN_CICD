import { BaseStyle, FontStyle } from "../../../shared/base";
/**
 * @class EmojiKeyboardStyle
 * @param {String} sectionHeaderFont
 * @param {String} sectionHeaderColor
 * @param {String} categoryIconTint
 * @param {String} selectedCategoryIconTint
 */
declare class EmojiKeyboardStyle extends BaseStyle {
    sectionHeaderFont: FontStyle;
    sectionHeaderColor: string;
    categoryIconTint: string;
    selectedCategoryIconTint: string;
    categoryBackground: string;
    constructor({ sectionHeaderFont, sectionHeaderColor, categoryIconTint, selectedCategoryIconTint, categoryBackground, width, height, backgroundColor, borderRadius, }: {
        sectionHeaderFont?: {};
        sectionHeaderColor?: string;
        categoryIconTint?: string;
        selectedCategoryIconTint?: string;
        categoryBackground?: string;
        width?: string;
        height?: number;
        backgroundColor?: string;
        borderRadius?: number;
    });
}
export { EmojiKeyboardStyle };
