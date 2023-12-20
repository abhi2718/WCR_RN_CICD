import { AvatarStyleInterface, BaseStyle, BaseStyleInterface, BorderStyleInterface, FontStyleInterface, ListItemStyleInterface } from "../shared";
import { StatusIndicatorStyleInterface } from "../shared/views/CometChatStatusIndicator/StatusIndicatorStyle";
export interface GroupMembersStyleInterface extends BaseStyleInterface {
    titleFont?: FontStyleInterface;
    titleColor?: string;
    backIconTint?: string;
    searchBorder?: BorderStyleInterface;
    searchBorderRadius?: number;
    searchBackgroundColor?: string;
    searchTextFont?: FontStyleInterface;
    searchTextColor?: string;
    searchIconTint?: string;
    onlineStatusColor?: string;
    separatorColor?: string;
    loadingIconTint?: string;
    emptyTextColor?: string;
    emptyTextFont?: FontStyleInterface;
    errorTextColor?: string;
    errorTextFont?: FontStyleInterface;
}
export declare class GroupMembersStyle extends BaseStyle {
    titleFont: FontStyleInterface;
    titleColor: string;
    backIconTint: string;
    searchBorder: BorderStyleInterface;
    searchBorderRadius: number;
    searchBackgroundColor: string;
    searchTextFont: FontStyleInterface;
    searchTextColor: string;
    searchIconTint: string;
    onlineStatusColor: string;
    separatorColor: string;
    loadingIconTint: string;
    emptyTextColor: string;
    emptyTextFont: FontStyleInterface;
    errorTextColor: string;
    errorTextFont: FontStyleInterface;
    avatarStyle: AvatarStyleInterface;
    listItemStyle: ListItemStyleInterface;
    statusIndicatorStyle: StatusIndicatorStyleInterface;
    constructor({ width, height, backgroundColor, border, borderRadius, titleFont, titleColor, backIconTint, searchBorder, searchBorderRadius, searchBackgroundColor, searchTextFont, searchTextColor, searchIconTint, onlineStatusColor, separatorColor, loadingIconTint, emptyTextColor, emptyTextFont, errorTextColor, errorTextFont, }: GroupMembersStyleInterface);
}
