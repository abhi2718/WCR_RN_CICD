import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { TextBubbleStyleInterface } from "./TextBubbleStyle";
export declare const FormatTextForLinks: ({ str, style }: {
    str: any;
    style: any;
}) => React.JSX.Element;
export interface CometChatTextBubbleInterface {
    /**
     * text tobe shown
     */
    text: string;
    /**
     * style for text of type TextBubbleStyle
     */
    style?: TextBubbleStyleInterface;
    /**
     * text container style
     */
    textContainerStyle?: StyleProp<ViewStyle>;
}
export declare const CometChatTextBubble: {
    (props: CometChatTextBubbleInterface): React.JSX.Element;
    defaultProps: {
        text: string;
    };
};
