import { BaseStyle, BorderStyle } from "../..";
/**
 * @class LiveReactionStyles
 */
export class LiveReactionStyles extends BaseStyle {
    reactionTint;
    /**
     * @param {Object} param0
     * @param {number} param0.width
     * @param {number} param0.height
     * @param {string} param0.backgroundColor
     * @param {object} param0.border
     * @param {number} param0.borderRadius
     * @param {string} param0.reactionTint
     */
    constructor({ width = "100%", height = 24, backgroundColor = "transparent", border = new BorderStyle({}), borderRadius = 0, reactionTint = 'rgb(255, 59, 48)' }) {
        super({
            width,
            height,
            backgroundColor,
            border,
            borderRadius,
        });
        this.reactionTint = reactionTint;
    }
}
//# sourceMappingURL=LiveReactionstyles.js.map