import { BaseStyle, BaseStyleInterface, BorderStyleInterface, FontStyleInterface } from "../shared";
export interface TabItemStyleInterface extends BaseStyleInterface {
    iconTint?: string;
    activeIconTint?: string;
    titleTextFont?: FontStyleInterface;
    titleTextColor?: string;
    activeTitleTextFont?: FontStyleInterface;
    activeTitleTextColor?: string;
    activeBackgroundColor?: string;
    activeTabBorder?: BorderStyleInterface;
}
export declare class TabItemStyle extends BaseStyle implements TabItemStyleInterface {
    iconTint: string;
    activeIconTint: string;
    titleTextFont: FontStyleInterface;
    titleTextColor: string;
    activeTitleTextFont: FontStyleInterface;
    activeTitleTextColor: string;
    activeBackgroundColor: string;
    activeTabBorder?: BorderStyleInterface;
    constructor({ activeTabBorder, activeBackgroundColor, activeIconTint, activeTitleTextColor, activeTitleTextFont, iconTint, titleTextColor, titleTextFont, backgroundColor, border, borderRadius, height, width }: TabItemStyleInterface);
}
