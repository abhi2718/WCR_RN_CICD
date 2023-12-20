import { FontStyleInterface } from "../../shared";
export interface LinkPreviewBubbleStyleInterface {
    backgroundColor?: string;
    titleFont?: FontStyleInterface;
    titleColor?: string;
    subtitleFont?: FontStyleInterface;
    subtitleColor?: string;
    childContainerStyle?: Object;
}
export declare class LinkPreviewBubbleStyle implements LinkPreviewBubbleStyleInterface {
    backgroundColor?: string;
    titleFont?: FontStyleInterface;
    titleColor?: string;
    subtitleFont?: FontStyleInterface;
    subtitleColor?: string;
    childContainerStyle?: Object;
    constructor(props: LinkPreviewBubbleStyleInterface);
}
