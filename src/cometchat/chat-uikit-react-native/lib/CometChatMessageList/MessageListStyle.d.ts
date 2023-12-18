import { BaseStyle, BaseStyleInterface, FontStyleInterface } from "../shared";
export interface MessageListStyleInterface extends BaseStyleInterface {
    nameTextFont?: FontStyleInterface;
    nameTextColor?: string;
    threadReplySeparatorColor?: string;
    threadReplyTextFont?: FontStyleInterface;
    threadReplyIconTint?: string;
    threadReplyTextColor?: string;
    timestampTextFont?: FontStyleInterface;
    timestampTextColor?: string;
    emptyStateTextFont?: FontStyleInterface;
    emptyStateTextColor?: string;
    errorStateTextFont?: FontStyleInterface;
    errorStateTextColor?: string;
    loadingIconTint?: string;
}
export declare class MessageListStyle extends BaseStyle {
    nameTextFont: FontStyleInterface;
    nameTextColor: string;
    threadReplySeparatorColor: string;
    threadReplyTextFont: FontStyleInterface;
    threadReplyIconTint: string;
    threadReplyTextColor: string;
    timestampTextFont: FontStyleInterface;
    timestampTextColor: string;
    emptyStateTextFont: FontStyleInterface;
    emptyStateTextColor: string;
    errorStateTextFont: FontStyleInterface;
    errorStateTextColor: string;
    loadingIconTint: string;
    constructor({ backgroundColor, border, borderRadius, height, width, nameTextFont, nameTextColor, threadReplySeparatorColor, threadReplyTextFont, threadReplyIconTint, threadReplyTextColor, timestampTextFont, timestampTextColor, emptyStateTextFont, emptyStateTextColor, errorStateTextFont, errorStateTextColor, loadingIconTint, }: MessageListStyleInterface);
}
