import { BorderStyle, FontStyle, BaseStyle } from "../../base";
/**
 * @class ActionSheetStyles
 */
export class ActionSheetStyles extends BaseStyle {
    layoutModeIconTint;
    titleFont;
    titleColor;
    listItemIconTint;
    listItemTitleFont;
    listItemTitleColor;
    listItemIconBackground;
    listItemIconBorderRadius;
    actionSheetSeparatorTint;
    /**
     * @param {object} param0
     * @param {any} width
     * @param {any} height
     * @param {string} backgroundColor
     * @param {object} border
     * @param {number} borderRadius
     * @param {string} layoutModeIconTint
     * @param {object} titleFont
     * @param {string} titleColor
     * @param {object} listItemIconTint
     * @param {string} listItemIconBackground
     * @param {number} listItemIconBorderRadius
     * @param {object} listItemTitleFont
     * @param {string} listItemTitleColor
     */
    constructor({ width = "100%", height = 350, backgroundColor = "transparent", border = new BorderStyle({}), borderRadius = 8, layoutModeIconTint = "", titleFont = new FontStyle({ fontSize: 17, fontWeight: "500" }), titleColor = "", listItemIconTint = "", listItemIconBackground = "", listItemIconBorderRadius = 0, listItemTitleFont = new FontStyle({ fontSize: 17, fontWeight: "400" }), listItemTitleColor = "", }) {
        super({
            width,
            height,
            backgroundColor,
            border,
            borderRadius,
        });
        this.layoutModeIconTint = layoutModeIconTint;
        this.titleFont = titleFont;
        this.titleColor = titleColor;
        this.listItemIconTint = listItemIconTint;
        this.listItemTitleFont = listItemTitleFont;
        this.listItemTitleColor = listItemTitleColor;
        this.listItemIconBackground = listItemIconBackground;
        this.listItemIconBorderRadius = listItemIconBorderRadius;
    }
}
//# sourceMappingURL=ActionSheetStyle.js.map