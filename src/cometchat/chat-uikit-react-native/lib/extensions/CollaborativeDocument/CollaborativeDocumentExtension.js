import { ExtensionsDataSource, ChatConfigurator } from "../../shared/framework";
import { CollaborativeDocumentExtensionDecorator } from "./CollaborativeDocumentExtensionDecorator";
import { ExtensionConstants } from "../ExtensionConstants";
export class CollaborativeDocumentExtension extends ExtensionsDataSource {
    collaborativeDocumentConfigurationInterface;
    constructor(collaborativeDocumentConfigurationConfiguration) {
        super();
        if (collaborativeDocumentConfigurationConfiguration != null) {
            this.collaborativeDocumentConfigurationInterface = collaborativeDocumentConfigurationConfiguration;
        }
    }
    /**
    * enable
    *  @description enables the Document  extension which includes Data profanity and data masking
    */
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new CollaborativeDocumentExtensionDecorator(dataSource, this.collaborativeDocumentConfigurationInterface);
        });
    }
    getExtensionId() {
        return ExtensionConstants.document;
    }
}
//# sourceMappingURL=CollaborativeDocumentExtension.js.map