import { ExtensionsDataSource, ChatConfigurator, } from '../../shared/framework';
import { ThumbnailGenerationExtensionDecorator } from './ThumbnailGenerationDecorator';
import { ExtensionConstants } from '../ExtensionConstants';
export class ThumbnailGenerationExtension extends ExtensionsDataSource {
    ThumbnailGenerationConfigurationInterface;
    constructor(ThumbnailGenerationConfigurationConfiguration) {
        super();
        if (ThumbnailGenerationConfigurationConfiguration != null) {
            this.ThumbnailGenerationConfigurationInterface =
                ThumbnailGenerationConfigurationConfiguration;
        }
    }
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    //override addExtension method from ExtensionsDataSource interface
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new ThumbnailGenerationExtensionDecorator(dataSource, this.ThumbnailGenerationConfigurationInterface);
        });
    }
    //override getExtensionId method from ExtensionsDataSource interface
    getExtensionId() {
        return ExtensionConstants.thumbnailGeneration;
    }
}
//# sourceMappingURL=ThumbnailGenerationExtension.js.map