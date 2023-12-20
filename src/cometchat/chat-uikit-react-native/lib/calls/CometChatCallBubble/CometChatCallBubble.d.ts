import React from 'react';
import { ImageType } from '../../shared';
import { CallBubbleStyleInterface } from './CallBubbleStyle';
export interface CometChatCallBubbleInterface {
    title: string;
    icon: ImageType;
    buttonText: string;
    onClick: () => void;
    style?: CallBubbleStyleInterface;
}
export declare const CometChatCallBubble: (props: CometChatCallBubbleInterface) => React.JSX.Element;
