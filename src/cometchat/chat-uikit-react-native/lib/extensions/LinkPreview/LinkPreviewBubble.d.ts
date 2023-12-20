import React from 'react';
import { LinkPreviewBubbleStyleInterface } from './LInkPreviewBubbleStyle';
export interface LinkPreviewBubbleInterface {
    ChildView?: () => JSX.Element;
    description?: string;
    style?: LinkPreviewBubbleStyleInterface;
    link: string;
    onPress?: () => void;
    title: string;
    image: string;
}
export declare const LinkPreviewBubble: (props: LinkPreviewBubbleInterface) => React.JSX.Element;
