/**
 * @class BadgeCoundConfiguration
 * @description BadgeConfiguration class is used for defining the BadgeCount template.
 */
export class BadgeConfiguration {
    width;
    height;
    border;
    borderRadius;
    backgroundColor;
    textColor;
    textFont;
    /**
     * @param {Object} param0
     * @field {number} width - width for component
     * @field {number} height - height for component
     * @field {object} border - object of {borderWidth, borderColor, borderStylw}
     * @field {string} backgroundColor - background colour for componnet
     * @field {number} borderRadius - border radius
     * @field {string} textColor - text color
     * @field {string} textFont - object of {fontFamily, fontSize, fontWeight}
     */
    constructor({ width = 24, height = 24, border = { borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }, backgroundColor = 'rgba(51, 153, 255, 1)', borderRadius = 12, textColor = 'white', textFont = {
        fontFamily: undefined,
        fontWeight: '700',
        fontSize: 11,
    }, }) {
        this.width = width;
        this.height = height;
        this.border = border;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.textFont = textFont;
    }
}
//# sourceMappingURL=BadgeConfiguration.js.map