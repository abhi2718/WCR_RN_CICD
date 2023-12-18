import { FontStyleInterface } from "../../shared";
export interface LinkPreviewConfigurationInterface {
    titleFontStyle: FontStyleInterface;
    titleFontColor: string;
    subtitleFontStyle: FontStyleInterface;
    subtitleFontColor: string;
}
export declare class LinkPreviewConfiguration implements LinkPreviewConfiguration {
    subtitleFontColor: string;
    subtitleFontStyle: FontStyleInterface;
    titleFontColor: string;
    titleFontStyle: FontStyleInterface;
    constructor({ subtitleFontColor, subtitleFontStyle, titleFontColor, titleFontStyle }: LinkPreviewConfigurationInterface);
}
