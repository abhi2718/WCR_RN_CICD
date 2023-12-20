import React from 'react';
export interface CometChatBottomSheetInterface {
    sliderMaxHeight?: any;
    animationDuration?: any;
    animation?: any;
    sliderMinHeight?: number;
    children?: any;
    isOpen?: boolean;
    onOpen?: Function;
    onClose?: Function;
    style?: {
        shadowColor?: string;
        backgroundColor?: string;
        lineColor?: string;
    };
}
declare const CometChatBottomSheet: React.ForwardRefExoticComponent<CometChatBottomSheetInterface & React.RefAttributes<unknown>>;
export { CometChatBottomSheet };
