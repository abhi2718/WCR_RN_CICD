import { ExtensionsDataSource } from '../../shared/framework';
import { ImageModerationFilterInterface } from './ImageModerationFilter';
export interface ImageModerationConfigurationInterface extends Omit<ImageModerationFilterInterface, 'message' | 'ChildView'> {
}
export declare class ImageModerationExtension extends ExtensionsDataSource {
    ImageModerationConfigurationInterface?: ImageModerationConfigurationInterface;
    constructor(ImageModerationConfigurationConfiguration?: ImageModerationConfigurationInterface);
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    addExtension(): void;
    getExtensionId(): string;
}
