import { BaseStyle, BaseStyleInterface, FontStyleInterface } from "../shared";
export interface ConversationsStyleInterface extends BaseStyleInterface {
    titleFont?: FontStyleInterface;
    titleColor?: string;
    backIconTint?: string;
    onlineStatusColor?: string;
    separatorColor?: string;
    loadingIconTint?: string;
    emptyTextColor?: string;
    emptyTextFont?: FontStyleInterface;
    errorTextColor?: string;
    errorTextFont?: FontStyleInterface;
    lastMessageTextColor?: string;
    lastMessageTextFont?: FontStyleInterface;
    typingIndictorTextColor?: string;
    typingIndictorTextFont?: FontStyleInterface;
    threadIndicatorTextFont?: FontStyleInterface;
    threadIndicatorTextColor?: string;
}
export declare class ConversationsStyle extends BaseStyle {
    titleFont?: FontStyleInterface;
    titleColor?: string;
    backIconTint?: string;
    onlineStatusColor?: string;
    separatorColor?: string;
    loadingIconTint?: string;
    emptyTextColor?: string;
    emptyTextFont?: FontStyleInterface;
    errorTextColor?: string;
    errorTextFont?: FontStyleInterface;
    lastMessageTextColor?: string;
    lastMessageTextFont?: FontStyleInterface;
    typingIndictorTextColor?: string;
    typingIndictorTextFont?: FontStyleInterface;
    threadIndicatorTextFont?: FontStyleInterface;
    threadIndicatorTextColor?: string;
    constructor(props: ConversationsStyleInterface);
}
