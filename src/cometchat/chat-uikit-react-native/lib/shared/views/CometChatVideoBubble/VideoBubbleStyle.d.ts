import { BaseStyle, BaseStyleInterface } from "../../base";
export interface VideoBubbleStyleInterface extends BaseStyleInterface {
    /**
     * tint for play icon
     */
    playIconTint?: string;
    /**
     * play icon background color
     */
    playIconBackgroundColor?: string;
}
export declare class VideoBubbleStyle extends BaseStyle {
    playIconTint: string;
    playIconBackgroundColor: string;
    constructor({ height, width, backgroundColor, border, borderRadius, playIconBackgroundColor, playIconTint }: VideoBubbleStyleInterface);
}
