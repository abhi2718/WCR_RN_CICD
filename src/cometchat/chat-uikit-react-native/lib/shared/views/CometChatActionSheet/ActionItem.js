/**
 * Model cass for ActionSheet item.
 */
export class ActionItem {
    /**
     * @param {object} param0
     * @param {string} param0.id
     * @param {string} param0.title
     * @param {any} param0.iconUrl
     * @param {string} param0.iconTint
     * @param {object} param0.titleStyle
     * @param {string} param0.iconBackgroundColor
     * @param {string} param0.backgroundColor
     * @param {number} param0.cornerRadius
     * @param {func} param0.onClick
     */
    id;
    title;
    iconUrl;
    iconTint;
    titleStyle;
    iconBackgroundColor;
    backgroundColor;
    cornerRadius;
    onClick;
    constructor({ id = "", title = "", iconUrl = undefined, iconTint = "", titleStyle = {}, iconBackgroundColor = "", backgroundColor = "", cornerRadius = 0, onClick = () => { }, }) {
        this.id = id;
        this.title = title;
        this.iconUrl = iconUrl;
        this.iconTint = iconTint;
        this.titleStyle = titleStyle;
        this.iconBackgroundColor = iconBackgroundColor;
        this.backgroundColor = backgroundColor;
        this.cornerRadius = cornerRadius;
        this.onClick = onClick;
    }
}
//# sourceMappingURL=ActionItem.js.map