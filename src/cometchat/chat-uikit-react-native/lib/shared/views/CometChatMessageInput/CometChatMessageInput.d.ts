import { StyleProp, ViewStyle, NativeSyntheticEvent, TextInputSelectionChangeEventData } from 'react-native';
import React, { RefObject } from 'react';
import { FontStyleInterface } from '../../base';
export interface CometChatMessageInputStyleInterface {
    baseStyle?: StyleProp<ViewStyle>;
    inputBackground?: string;
    dividerTint?: string;
    textFont?: FontStyleInterface;
    textColor?: string;
    placeholderTextColor?: string;
    placeholderTextFont?: FontStyleInterface;
}
export interface CometChatMessageInputInterface {
    /**
     *
     *
     * @type {string}
     * @description text for the input
     */
    text?: string;
    /**
     *
     *
     * @type {string}
     * @description placeholder text
     */
    placeHolderText?: string;
    /**
     *
     *
     * @description callback when input state changes
     */
    onChangeText?: (arg0: string) => void;
    /**
     *
     *
     * @type {CometChatMessageInputStyleInterface}
     * @description custom styles for CometChatMessageInput
     */
    style?: CometChatMessageInputStyleInterface;
    /**
     *
     *
     * @type {number}
     * @description max height for the input
     */
    maxHeight?: number;
    /**
     *
     *
     * @type {React.FC}
     * @description React component for Secondary button
     */
    SecondaryButtonView?: React.FC;
    /**
     *
     *
     * @type {React.FC}
     * @description React component for Auxiliary button
     */
    AuxiliaryButtonView?: React.FC;
    /**
     *
     *
     * @type {('left' | 'right')}
     * @description Placement for Auxiliary button
     */
    auxiliaryButtonAlignment?: 'left' | 'right';
    /**
     *
     *
     * @type {React.FC}
     * @description React component for Primary button
     */
    PrimaryButtonView?: React.FC;
    /**
     *
     *
     * @description callback for onSelectionChange
     */
    onSelectionChange?: (e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => void;
    /**
     *
     *
     * @type {RefObject<any>}
     * @description ref of {TextInput}
     */
    messageInputRef?: RefObject<any>;
}
export declare const CometChatMessageInput: {
    (props: CometChatMessageInputInterface): React.JSX.Element;
    defaultProps: {
        placeHolderText: any;
        auxiliaryButtonAlignment: string;
        style: {};
        text: string;
    };
};
