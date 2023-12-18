import { ExtensionsDataSource } from '../../shared/framework';
import { PollsConfigurationInterface } from './PollsConfigurations';
export declare class PollsExtension extends ExtensionsDataSource {
    PollsConfigurationInterface?: PollsConfigurationInterface;
    constructor(PollsConfigurationConfiguration?: PollsConfigurationInterface);
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    addExtension(): void;
    getExtensionId(): string;
}
