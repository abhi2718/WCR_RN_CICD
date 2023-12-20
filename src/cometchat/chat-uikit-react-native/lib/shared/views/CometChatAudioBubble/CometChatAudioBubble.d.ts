import React from "react";
import { ImageType } from "../../base/Types";
import { AudioBubbleStyleInterface } from "./AudioBubbleStyle";
export interface CometChatAudioBubbleInterface {
    /**
     * url of audio
     */
    audioUrl: string;
    /**
     * title of audio
     */
    title: string;
    /**
     * subtitle of audio
     */
    subtitle?: string;
    /**
     * custom icon for play
     */
    playIcon?: ImageType;
    /**
     * custom icon for pause
     */
    pauseIcon?: ImageType;
    /**
     * pass function to handle custom play/pause logic.
     * one parameters will be received audioUrl
     */
    onPress?: Function;
    /**
     * style object of type AudioBubbleStyleInterface
     */
    style?: AudioBubbleStyleInterface;
}
export declare const CometChatAudioBubble: ({ audioUrl, onPress, playIcon, pauseIcon, style, subtitle, title }: CometChatAudioBubbleInterface) => React.JSX.Element;
