import React from "react";
import { BaseStyleInterface } from "../../base";
import { MessageBubbleAlignmentType } from "../../constants/UIKitConstants";
export interface CometChatMessageBubbleInterface {
    id: string;
    LeadingView?: () => JSX.Element;
    HeaderView?: () => JSX.Element;
    ReplyView?: () => JSX.Element;
    BottomView?: () => JSX.Element;
    ContentView?: () => JSX.Element;
    ThreadView?: () => JSX.Element;
    FooterView?: () => JSX.Element;
    alignment?: MessageBubbleAlignmentType;
    style?: BaseStyleInterface;
}
export declare const CometChatMessageBubble: {
    ({ HeaderView, ReplyView, ContentView, FooterView, LeadingView, BottomView, ThreadView, alignment, id, style }: CometChatMessageBubbleInterface): React.JSX.Element;
    defaultProps: {
        alignment: string;
    };
};
