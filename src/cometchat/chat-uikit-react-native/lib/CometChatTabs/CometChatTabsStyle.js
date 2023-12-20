import { BaseStyle } from "../shared";
export class CometChatTabsStyle extends BaseStyle {
    tabTitleTextFont;
    tabTitleTextColor;
    activeTabTitleTextColor;
    activeTabBackgroundColor;
    activeTabBorder;
    constructor({ backgroundColor, border, borderRadius = 0, height = 60, width = "100%", tabTitleTextFont, tabTitleTextColor, activeTabTitleTextColor, activeTabBackgroundColor, activeTabBorder, }) {
        super({
            backgroundColor,
            border,
            borderRadius,
            height,
            width
        });
        this.tabTitleTextFont = tabTitleTextFont;
        this.tabTitleTextColor = tabTitleTextColor;
        this.activeTabTitleTextColor = activeTabTitleTextColor;
        this.activeTabBackgroundColor = activeTabBackgroundColor;
        this.activeTabBorder = activeTabBorder;
    }
}
//# sourceMappingURL=CometChatTabsStyle.js.map