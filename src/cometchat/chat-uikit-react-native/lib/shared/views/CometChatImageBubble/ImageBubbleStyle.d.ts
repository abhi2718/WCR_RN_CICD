import { BaseStyle, BaseStyleInterface } from "../../base";
export interface ImageBubbleStyleInterface extends Omit<BaseStyleInterface, "border"> {
    border?: {
        borderWidth: number;
        borderColor: string;
    };
}
export declare class ImageBubbleStyle extends BaseStyle {
    constructor({ backgroundColor, border, borderRadius, height, width }: ImageBubbleStyleInterface);
}
