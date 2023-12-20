import { ExtensionsDataSource } from '../../shared/framework';
import { VideoBubbleStyleInterface } from '../../shared';
export interface ThumbnailGenerationConfigurationInterface {
    videoBubbleStyle: VideoBubbleStyleInterface;
}
export declare class ThumbnailGenerationExtension extends ExtensionsDataSource {
    ThumbnailGenerationConfigurationInterface?: ThumbnailGenerationConfigurationInterface;
    constructor(ThumbnailGenerationConfigurationConfiguration?: ThumbnailGenerationConfigurationInterface);
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    addExtension(): void;
    getExtensionId(): string;
}
