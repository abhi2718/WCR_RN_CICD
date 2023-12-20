import { BaseStyle, BaseStyleInterface, BorderStyleInterface, FontStyleInterface, ImageType } from "../shared";
export interface GroupsStyleInterface extends BaseStyleInterface {
    titleFont?: FontStyleInterface;
    titleColor?: string;
    backIconTint?: string;
    searchBorder?: BorderStyleInterface;
    searchBorderRadius?: number;
    searchBackgroundColor?: string;
    searchTextFont?: FontStyleInterface;
    searchTextColor?: string;
    searchIconTint?: string;
    searchPlaceHolderTextColor?: string;
    separatorColor?: string;
    loadingIconTint?: string;
    emptyTextColor?: string;
    emptyTextFont?: FontStyleInterface;
    errorTextColor?: string;
    errorTextFont?: FontStyleInterface;
    subtitleTextColor?: string;
    subtitleTextFont?: FontStyleInterface;
    privateGroupIconBackground?: ImageType;
    passwordGroupIconBackground?: ImageType;
}
/**
 * @class GroupsStyle
 * @description GroupsStyle class is used for defining the GroupsStyle template.
 */
export declare class GroupsStyle extends BaseStyle {
    titleFont: FontStyleInterface;
    titleColor: string;
    backIconTint: string;
    createGroupIconTint: string;
    searchBorder: BorderStyleInterface;
    searchBorderRadius: number;
    searchBackgroundColor: string;
    searchTextFont: FontStyleInterface;
    searchTextColor: string;
    searchIconTint: string;
    searchPlaceHolderTextColor: string;
    separatorColor: string;
    loadingIconTint: string;
    emptyTextColor: string;
    emptyTextFont: FontStyleInterface;
    errorTextColor: string;
    errorTextFont: FontStyleInterface;
    subtitleTextColor: string;
    subtitleTextFont: FontStyleInterface;
    privateGroupIconBackground: ImageType;
    passwordGroupIconBackground: ImageType;
    constructor(props: GroupsStyleInterface);
}
