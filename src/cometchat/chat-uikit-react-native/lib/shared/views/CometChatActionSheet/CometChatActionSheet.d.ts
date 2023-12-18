import React from 'react';
import { ActionSheetStyles } from './ActionSheetStyle';
import { ActionItemInterface } from './ActionItem';
interface CometChatActionSheetInterface {
    title: string;
    layoutModeIconURL: any;
    layoutMode: 'list' | 'grid';
    hideLayoutMode: boolean;
    actions: ActionItemInterface[];
    style: ActionSheetStyles;
}
export declare const CometChatActionSheet: {
    (props: CometChatActionSheetInterface): React.JSX.Element;
    defaultProps: {
        title: any;
        layoutModeIconURL: any;
        layoutMode: "list";
        hideLayoutMode: boolean;
        actions: any[];
        style: any;
    };
};
export {};
