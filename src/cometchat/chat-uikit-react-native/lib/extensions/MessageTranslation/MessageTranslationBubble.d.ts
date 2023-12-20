import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { FontStyleInterface } from "../../shared/base";
interface textStyle extends FontStyleInterface {
    color?: string;
}
export interface MessageTranslationBubble {
    translatedText?: string;
    text?: string;
    style?: {
        backgroundColor?: string;
        textFont?: FontStyleInterface;
        textColor?: string;
        borderRadius?: number;
        translatedTextStyle?: textStyle;
        translatedMsgStyle?: textStyle;
    };
    textContainerStyle?: StyleProp<ViewStyle>;
    alignment?: string;
}
export declare const MessageTranslationBubble: (props: MessageTranslationBubble) => React.JSX.Element;
export {};
