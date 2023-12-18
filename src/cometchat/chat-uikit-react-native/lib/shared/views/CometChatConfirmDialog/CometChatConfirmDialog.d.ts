import React from 'react';
import { CometChatConfirmDialogStyleInterface } from './CometChatConfirmDialogStyle';
export interface CometChatConfirmDialogInterface {
    onConfirm?: Function;
    onCancel?: Function;
    isOpen?: boolean;
    style?: CometChatConfirmDialogStyleInterface;
    title?: string;
    messageText?: string;
    cancelButtonText?: string;
    confirmButtonText?: string;
}
export declare const CometChatConfirmDialog: {
    (props: CometChatConfirmDialogInterface): React.JSX.Element;
    defaultProps: {
        isOpen: boolean;
        title: string;
        confirmButtonText: string;
        cancelButtonText: string;
        messageText: string;
        onConfirm: () => void;
        onCancel: () => void;
        style: {};
    };
};
