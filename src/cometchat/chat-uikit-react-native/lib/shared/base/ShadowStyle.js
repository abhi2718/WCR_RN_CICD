/**
 * @class ShadowStyle
 * @description Style class creates an object, which can be applied to shadow property of component style
 */
export class ShadowStyle {
    elevation;
    shadowOffset;
    shadowColor;
    shadowOpacity;
    shadowRadius;
    /**
     * @param {object} param0
     * @param {number} param0.elevation
     * @param {object} param0.shadowOffset
     * @param {string} param0.shadowColor
     * @param {number} param0.shadowOpacity
     * @param {number} param0.shadowRadius
     */
    constructor({ elevation = 0, shadowOffset = { width: 0, height: 0 }, shadowColor = '#171717', shadowOpacity = 0, shadowRadius = 0, }) {
        this.elevation = elevation;
        this.shadowOffset = shadowOffset;
        this.shadowColor = shadowColor;
        this.shadowOpacity = shadowOpacity;
        this.shadowRadius = shadowRadius;
    }
}
//# sourceMappingURL=ShadowStyle.js.map