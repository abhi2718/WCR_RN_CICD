import { ExtensionsDataSource } from "../../shared/framework";
import { CollaborativeDocumentConfigurationInterface } from "./CollaborativeDocumentConfiguration";
export declare class CollaborativeDocumentExtension extends ExtensionsDataSource {
    collaborativeDocumentConfigurationInterface?: CollaborativeDocumentConfigurationInterface;
    constructor(collaborativeDocumentConfigurationConfiguration?: CollaborativeDocumentConfigurationInterface);
    /**
    * enable
    *  @description enables the Document  extension which includes Data profanity and data masking
    */
    addExtension(): void;
    getExtensionId(): string;
}
