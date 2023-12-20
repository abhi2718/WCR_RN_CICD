import { ExtensionsDataSource, ChatConfigurator, } from '../../shared/framework';
import { MessageTranslationExtensionDecorator } from './MessageTranslationDecorator';
import { ExtensionConstants } from '../ExtensionConstants';
export class MessageTranslationExtension extends ExtensionsDataSource {
    MessageTranslationConfigurationInterface;
    constructor(MessageTranslationConfigurationConfiguration) {
        super();
        if (MessageTranslationConfigurationConfiguration != null) {
            this.MessageTranslationConfigurationInterface =
                MessageTranslationConfigurationConfiguration;
        }
    }
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    //override addExtension method from ExtensionsDataSource interface
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new MessageTranslationExtensionDecorator(dataSource, this.MessageTranslationConfigurationInterface);
        });
    }
    //override getExtensionId method from ExtensionsDataSource interface
    getExtensionId() {
        return ExtensionConstants.messageTranslation;
    }
}
//# sourceMappingURL=MessageTranslationExtension.js.map