import { ExtensionsDataSource } from "../../shared/framework";
import { CollaborativeWhiteboardConfigurationInterface } from "./CollaborativeWhiteboardConfiguration";
export declare class CollaborativeWhiteboardExtension extends ExtensionsDataSource {
    collaborativeWhiteBoardConfigurationInterface?: CollaborativeWhiteboardConfigurationInterface;
    constructor(collaborativeWhiteboardConfigurationConfiguration?: CollaborativeWhiteboardConfigurationInterface);
    /**
    * enable
    *  @description enables the Text moderation extension which includes Data profanity and data masking
    */
    addExtension(): void;
    getExtensionId(): string;
}
