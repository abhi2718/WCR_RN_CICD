import { ExtensionsDataSource } from '../../shared/framework';
import { MessageTranslationBubble } from './MessageTranslationBubble';
export interface MessageTranslationConfigurationInterface extends Omit<MessageTranslationBubble, 'translatedText' | 'text' | 'alignment'> {
}
export declare class MessageTranslationExtension extends ExtensionsDataSource {
    MessageTranslationConfigurationInterface?: MessageTranslationConfigurationInterface;
    constructor(MessageTranslationConfigurationConfiguration?: MessageTranslationConfigurationInterface);
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    addExtension(): void;
    getExtensionId(): string;
}
