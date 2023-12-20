import { ExtensionsDataSource, ChatConfigurator, } from '../../shared/framework';
import { ExtensionConstants } from '../ExtensionConstants';
import { SmartRepliesDecorator } from './SmartRepliesDecorator';
export class SmartRepliesExtension extends ExtensionsDataSource {
    SmartRepliesConfigurationInterface;
    constructor(SmartRepliesConfigurationConfiguration) {
        super();
        if (SmartRepliesConfigurationConfiguration != null) {
            this.SmartRepliesConfigurationInterface =
                SmartRepliesConfigurationConfiguration;
        }
    }
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    //override addExtension method from ExtensionsDataSource interface
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new SmartRepliesDecorator(dataSource, this.SmartRepliesConfigurationInterface);
        });
    }
    //override getExtensionId method from ExtensionsDataSource interface
    getExtensionId() {
        return ExtensionConstants.smartReply;
    }
}
//# sourceMappingURL=SmartRepliesExtension.js.map