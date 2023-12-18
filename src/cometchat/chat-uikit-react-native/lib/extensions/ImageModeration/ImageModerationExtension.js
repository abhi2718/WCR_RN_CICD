import { ExtensionsDataSource, ChatConfigurator, } from '../../shared/framework';
import { ExtensionConstants } from '../ExtensionConstants';
import { ImageModerationExtensionDecorator } from './ImageModerationDecorator';
export class ImageModerationExtension extends ExtensionsDataSource {
    ImageModerationConfigurationInterface;
    constructor(ImageModerationConfigurationConfiguration) {
        super();
        if (ImageModerationConfigurationConfiguration != null) {
            this.ImageModerationConfigurationInterface =
                ImageModerationConfigurationConfiguration;
        }
    }
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    //override addExtension method from ExtensionsDataSource interface
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new ImageModerationExtensionDecorator(dataSource, this.ImageModerationConfigurationInterface);
        });
    }
    //override getExtensionId method from ExtensionsDataSource interface
    getExtensionId() {
        return ExtensionConstants.imageModeration;
    }
}
//# sourceMappingURL=ImageModerationExtension.js.map