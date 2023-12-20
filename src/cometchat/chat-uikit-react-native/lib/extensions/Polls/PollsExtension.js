import { ExtensionsDataSource, ChatConfigurator, } from '../../shared/framework';
import { PollsExtensionDecorator } from './PollsDecorator';
import { ExtensionConstants } from '../ExtensionConstants';
export class PollsExtension extends ExtensionsDataSource {
    PollsConfigurationInterface;
    constructor(PollsConfigurationConfiguration) {
        super();
        if (PollsConfigurationConfiguration != null) {
            this.PollsConfigurationInterface = PollsConfigurationConfiguration;
        }
    }
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    //override addExtension method from ExtensionsDataSource interface
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new PollsExtensionDecorator(dataSource, this.PollsConfigurationInterface);
        });
    }
    //override getExtensionId method from ExtensionsDataSource interface
    getExtensionId() {
        return ExtensionConstants.polls;
    }
}
//# sourceMappingURL=PollsExtension.js.map