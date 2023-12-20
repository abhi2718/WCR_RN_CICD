import { ExtensionsDataSource } from '../../shared/framework';
import { SmartRepliesInterface } from './SmartRepliesView';
export interface SmartRepliesConfigurationInterface extends Omit<SmartRepliesInterface, 'customOutgoingMessageSound' | 'enableSoundForMessages' | 'onClose' | 'replies' | 'onClick' | 'closeIcon'> {
}
export declare class SmartRepliesExtension extends ExtensionsDataSource {
    SmartRepliesConfigurationInterface?: SmartRepliesConfigurationInterface;
    constructor(SmartRepliesConfigurationConfiguration?: SmartRepliesConfigurationInterface);
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    addExtension(): void;
    getExtensionId(): string;
}
