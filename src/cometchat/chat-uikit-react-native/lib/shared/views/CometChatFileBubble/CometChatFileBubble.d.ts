import React from "react";
import { FileBubbleStyle, FileBubbleStyleInterface } from "./FileBubbleStyle";
import { ImageType } from "../../base/Types";
export interface CometChatFileBubbleInterface {
    /**
     * url of file
     */
    fileUrl: string;
    /**
     * file title
     */
    title: string;
    /**
     * description for file
     */
    subtitle?: string;
    /**
     * style object of type FileBubbleStyle
     */
    style?: FileBubbleStyleInterface;
    /**
     * file icon
     */
    icon?: ImageType;
}
export declare const CometChatFileBubble: {
    ({ fileUrl, title, icon, style, subtitle }: CometChatFileBubbleInterface): React.JSX.Element;
    defaltProps: {
        fileUrl: string;
        title: string;
        subtitle: string;
        style: FileBubbleStyle;
        icon: any;
    };
};
