/**
 * @class FontStyle
 * @description
 * @param {String} fontFamily
 * @param {String} fontWeight
 * @param {String} fontSize
 */
export class FontStyle {
    fontFamily;
    fontWeight;
    fontSize;
    constructor({ fontFamily = undefined, fontWeight = 'normal', fontSize = 16, }) {
        this.fontFamily = fontFamily;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
    }
}
//# sourceMappingURL=FontStyle.js.map