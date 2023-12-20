import { ExtensionsDataSource, ChatConfigurator, } from '../../shared/framework';
import { ReactionsExtensionDecorator } from './ReactionsDecorator';
import { ExtensionConstants } from '../ExtensionConstants';
export class ReactionsExtension extends ExtensionsDataSource {
    ReactionsConfigurationInterface;
    constructor(ReactionsConfigurationConfiguration) {
        super();
        if (ReactionsConfigurationConfiguration != null) {
            this.ReactionsConfigurationInterface =
                ReactionsConfigurationConfiguration;
        }
    }
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    //override addExtension method from ExtensionsDataSource interface
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new ReactionsExtensionDecorator(dataSource, this.ReactionsConfigurationInterface);
        });
    }
    //override getExtensionId method from ExtensionsDataSource interface
    getExtensionId() {
        return ExtensionConstants.reactions;
    }
}
//# sourceMappingURL=ReactionsExtension.js.map