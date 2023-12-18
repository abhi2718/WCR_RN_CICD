import { ExtensionsDataSource, ChatConfigurator } from "../../shared/framework";
import { TextModerationExtensionDecorator } from "./TextModerationExtensionDecorator";
import { ExtensionConstants } from "../ExtensionConstants";
import { CometChat } from "@cometchat/chat-sdk-react-native";
export class TextModerationExtension extends ExtensionsDataSource {
    textModerationConfigurationInterface;
    constructor(textModerationConfiguration) {
        super();
        if (textModerationConfiguration != null) {
            this.textModerationConfigurationInterface = textModerationConfiguration;
        }
    }
    /**
    * enable
    *  @description enables the Text moderation extension which includes Data profanity and data masking
    */
    enable() {
        const promise1 = CometChat.isExtensionEnabled(ExtensionConstants.profanityFilter);
        const promise2 = CometChat.isExtensionEnabled(ExtensionConstants.dataMasking);
        Promise.all([promise1, promise2]).then((values) => {
            if (values.includes(true)) {
                this.addExtension();
            }
        });
    }
    //override addExtension method from ExtensionsDataSource interface
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new TextModerationExtensionDecorator(dataSource, this.textModerationConfigurationInterface);
        });
    }
    //override getExtensionId method from ExtensionsDataSource interface
    getExtensionId() {
        return ExtensionConstants.profanityFilter;
    }
}
//# sourceMappingURL=TextModerationExtension.js.map