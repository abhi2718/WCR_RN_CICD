import { ExtensionsDataSource } from "../../shared/framework";
import { TextModerationConfigurationInterface } from "./TextModerationConfiguration";
export declare class TextModerationExtension extends ExtensionsDataSource {
    textModerationConfigurationInterface?: TextModerationConfigurationInterface;
    constructor(textModerationConfiguration?: TextModerationConfigurationInterface);
    /**
    * enable
    *  @description enables the Text moderation extension which includes Data profanity and data masking
    */
    enable(): void;
    addExtension(): void;
    getExtensionId(): string;
}
