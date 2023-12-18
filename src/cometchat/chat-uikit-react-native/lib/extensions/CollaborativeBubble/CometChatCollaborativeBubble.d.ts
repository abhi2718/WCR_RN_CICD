import React from 'react';
import { CollaborativeBubbleStyle } from "./CollaborativeBubbleStyle";
import { ImageType } from "../../shared";
import { CollaborativeBubbleStyleInterface } from './CollaborativeBubbleStyle';
interface CollaborativeBubbleProps {
    /**
   * text displayed in bubble title
   */
    title: string;
    /**
     * icon displayed in trailing position
     */
    icon?: ImageType;
    /**
     * subtitle string displayed after title
     */
    subTitle?: string;
    /**
     * button text
     */
    buttonText?: string;
    /**
     * URL to open collaborative document
     */
    url: string;
    /**
     * style object of class CollaborativeBubbleStyleInterface.
     */
    style?: CollaborativeBubbleStyleInterface;
    onPress?: Function;
}
export declare const CometChatCollaborativeBubble: {
    (props: CollaborativeBubbleProps): React.JSX.Element;
    defaultProps: {
        title: string;
        subTitle: string;
        buttonText: string;
        icon: any;
        whiteboardURL: string;
        loggedInUser: any;
        style: CollaborativeBubbleStyle;
    };
};
export {};
