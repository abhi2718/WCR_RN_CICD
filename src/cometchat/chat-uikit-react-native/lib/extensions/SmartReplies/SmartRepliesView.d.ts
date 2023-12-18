import React from 'react';
import { FontStyleInterface, ImageType } from '../../shared/base';
export interface SmartRepliesInterface {
    customOutgoingMessageSound?: any;
    enableSoundForMessages?: boolean;
    onClose?: () => void;
    replies?: any[];
    style?: {
        textBackground?: string;
        textFont?: FontStyleInterface;
        textColor?: string;
        backgroundColor?: string;
        iconTint?: string;
    };
    onClick?: (option: any) => void;
    closeIcon?: ImageType;
}
declare const SmartRepliesView: {
    (props: SmartRepliesInterface): React.JSX.Element;
    defaultProps: {
        customOutgoingMessageSound: any;
        enableSoundForMessages: boolean;
        style: {};
        replies: any[];
    };
};
export { SmartRepliesView };
