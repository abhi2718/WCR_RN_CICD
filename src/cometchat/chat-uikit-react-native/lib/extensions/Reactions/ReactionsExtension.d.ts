import { ExtensionsDataSource } from '../../shared/framework';
import { MessageReactionsInterface } from './CometChatMessageReactions/CometChatMessageReactions';
export interface ReactionsConfigurationInterface extends Omit<MessageReactionsInterface, 'messageObject' | 'loggedInUser' | 'updateReaction' | 'onReactionClick'> {
}
export declare class ReactionsExtension extends ExtensionsDataSource {
    ReactionsConfigurationInterface?: ReactionsConfigurationInterface;
    constructor(ReactionsConfigurationConfiguration?: ReactionsConfigurationInterface);
    /**
     * enable
     *  @description enables the Text moderation extension which includes Data profanity and data masking
     */
    addExtension(): void;
    getExtensionId(): string;
}
