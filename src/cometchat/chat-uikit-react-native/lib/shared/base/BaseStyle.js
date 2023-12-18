import { BorderStyle } from './BorderStyle';
/**
 * @class BaseStyle
 * @description BaseStyle class is the parent class used for defining the basic styling props.
 * @param {string} width
 * @param {string|number} height
 * @param {string} backgroundColor
 * @param {number} borderRadius
 * @param {object} border

 */
export class BaseStyle {
    height;
    width;
    backgroundColor;
    border;
    borderRadius;
    constructor({ width = '100%', height = '100%', backgroundColor = 'white', border = new BorderStyle({}), borderRadius = 8, }) {
        this.height = height;
        this.width = width;
        this.backgroundColor = backgroundColor;
        this.border = border;
        this.borderRadius = borderRadius;
    }
}
//# sourceMappingURL=BaseStyle.js.map