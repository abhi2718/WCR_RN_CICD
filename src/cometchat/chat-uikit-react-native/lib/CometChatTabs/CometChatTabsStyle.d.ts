import { BaseStyle, BaseStyleInterface, BorderStyleInterface, FontStyleInterface } from "../shared";
export interface CometChatTabsStyleInterface extends BaseStyleInterface {
    tabTitleTextFont?: FontStyleInterface;
    tabTitleTextColor?: string;
    activeTabTitleTextColor?: string;
    activeTabBackgroundColor?: string;
    activeTabBorder?: BorderStyleInterface;
}
export declare class CometChatTabsStyle extends BaseStyle implements CometChatTabsStyleInterface {
    tabTitleTextFont?: FontStyleInterface;
    tabTitleTextColor?: string;
    activeTabTitleTextColor?: string;
    activeTabBackgroundColor?: string;
    activeTabBorder?: BorderStyleInterface;
    constructor({ backgroundColor, border, borderRadius, height, width, tabTitleTextFont, tabTitleTextColor, activeTabTitleTextColor, activeTabBackgroundColor, activeTabBorder, }: CometChatTabsStyleInterface);
}
