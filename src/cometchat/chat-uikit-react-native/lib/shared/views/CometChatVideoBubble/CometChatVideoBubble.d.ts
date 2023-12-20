import React from "react";
import { ImageType } from "../../base/Types";
import { VideoBubbleStyleInterface } from "./VideoBubbleStyle";
export interface CometChatVideoBubbleInterface {
    /**
     * url for video
     */
    videoUrl: string;
    /**
     * thumbnail url for bubble
     */
    thumbnailUrl?: ImageType;
    /**
     * placeholder image
     */
    placeholderImage?: ImageType;
    /**
     * style object of type VideoBubbleStyleInterface
     */
    style?: VideoBubbleStyleInterface;
    /**
     * custom play icon
     */
    playIcon?: ImageType;
    /**
     * callback function to be executed when play button clicked.
     * function will receive an videoUrl as parameter.
     */
    onPress?: Function;
}
export declare const CometChatVideoBubble: (props: CometChatVideoBubbleInterface) => React.JSX.Element;
