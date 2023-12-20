import React from "react";
import { ImageType } from "../../base";
import { ImageBubbleStyleInterface } from "./ImageBubbleStyle";
export interface CometChatImageBubbleInterface {
    /**
     * image url pass as {uri: "dummyUrl"}
     */
    imageUrl: ImageType;
    /**
     *
     *
     * @type {ImageType}
     * @description thumbnail image
     */
    thumbnailUrl?: ImageType;
    /**
     * place holder image
     */
    placeHolderImage?: ImageType;
    /**
     * custom logic on touch of image
     */
    onPress?: Function;
    /**
     * style object of type ImageBubbleStyleInterface
     */
    style?: ImageBubbleStyleInterface;
}
export declare const CometChatImageBubble: (props: CometChatImageBubbleInterface) => React.JSX.Element;
