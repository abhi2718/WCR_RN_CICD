import { FontStyleInterface } from "../../base";
export interface CometChatConfirmDialogStyleInterface {
    messageTextColor?: string;
    titleTextStyle?: FontStyleInterface;
    messageTextStyle?: FontStyleInterface;
    cancelBackground?: string;
    cancelButtonTextColor?: string;
    cancelButtonTextFont?: FontStyleInterface;
    confirmBackground?: string;
    confirmButtonTextColor?: string;
    confirmButtonTextFont?: FontStyleInterface;
}
export declare class CometChatConfirmDialogStyle implements CometChatConfirmDialogStyleInterface {
    messageTextColor?: string;
    titleTextStyle?: FontStyleInterface;
    messageTextStyle?: FontStyleInterface;
    cancelBackground?: string;
    cancelButtonTextColor?: string;
    cancelButtonTextFont?: FontStyleInterface;
    confirmBackground?: string;
    confirmButtonTextColor?: string;
    confirmButtonTextFont?: FontStyleInterface;
    constructor(props: CometChatConfirmDialogStyleInterface);
}
