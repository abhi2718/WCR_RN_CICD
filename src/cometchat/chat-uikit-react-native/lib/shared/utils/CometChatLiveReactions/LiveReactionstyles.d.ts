import { BaseStyle, BaseStyleInterface } from "../..";
export interface LiveReactionStylesInterface extends BaseStyleInterface {
    reactionTint?: string;
}
/**
 * @class LiveReactionStyles
 */
export declare class LiveReactionStyles extends BaseStyle implements LiveReactionStylesInterface {
    reactionTint?: string;
    /**
     * @param {Object} param0
     * @param {number} param0.width
     * @param {number} param0.height
     * @param {string} param0.backgroundColor
     * @param {object} param0.border
     * @param {number} param0.borderRadius
     * @param {string} param0.reactionTint
     */
    constructor({ width, height, backgroundColor, border, borderRadius, reactionTint }: LiveReactionStylesInterface);
}
