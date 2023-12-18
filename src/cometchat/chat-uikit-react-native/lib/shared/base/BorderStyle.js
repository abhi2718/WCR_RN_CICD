/**
 * *
 * @class BorderStyle
 * @description BorderStyle class is used for defining the border.
 * @param  {number} borderWidth
 * @param  {string} borderStyle
 * @param  {string} borderColor
 */
export class BorderStyle {
    borderWidth;
    borderStyle;
    borderColor;
    constructor({ borderWidth = 0, borderStyle = 'solid', borderColor = 'transparent', }) {
        this.borderWidth = borderWidth;
        this.borderStyle = borderStyle;
        this.borderColor = borderColor;
    }
}
//# sourceMappingURL=BorderStyle.js.map