import { ExtensionsDataSource, ChatConfigurator } from "../../shared/framework";
import { CollaborativeWhiteboardExtensionDecorator } from "./CollaborativeWhiteboardExtensionDecorator";
import { ExtensionConstants } from "../ExtensionConstants";
export class CollaborativeWhiteboardExtension extends ExtensionsDataSource {
    collaborativeWhiteBoardConfigurationInterface;
    constructor(collaborativeWhiteboardConfigurationConfiguration) {
        super();
        if (collaborativeWhiteboardConfigurationConfiguration != null) {
            this.collaborativeWhiteBoardConfigurationInterface = collaborativeWhiteboardConfigurationConfiguration;
        }
    }
    /**
    * enable
    *  @description enables the Text moderation extension which includes Data profanity and data masking
    */
    //override addExtension method from ExtensionsDataSource interface
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new CollaborativeWhiteboardExtensionDecorator(dataSource, this.collaborativeWhiteBoardConfigurationInterface);
        });
    }
    //override getExtensionId method from ExtensionsDataSource interface
    getExtensionId() {
        return ExtensionConstants.whiteboard;
    }
}
//# sourceMappingURL=CollaborativeWhiteboardExtension.js.map