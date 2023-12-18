import React from "react";
import { StickerStyleInterface } from "./StickerStyle";
export interface CometChatStickerBubbleProps {
    /**
     * image url pass as {uri: "dummyUrl"}
     */
    url: string;
    /**
     * place holder image
     */
    name?: string;
    /**
     * style object of type ImageBubbleStyleInterface
     */
    style?: StickerStyleInterface;
}
export declare const CometChatStickerBubble: (props: CometChatStickerBubbleProps) => React.JSX.Element;
