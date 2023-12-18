import { ChatConfigurator, ExtensionsDataSource } from "../../shared/framework";
import { ExtensionConstants } from "../ExtensionConstants";
import { LinkPreviewExtentionDecorator } from "./LinkPreviewExtentionDecorator";
export class LinkPreviewExtention extends ExtensionsDataSource {
    linkPreviewConfiguration;
    constructor(linkPreviewConfiguration) {
        super();
        this.linkPreviewConfiguration = linkPreviewConfiguration ? linkPreviewConfiguration : undefined;
    }
    //override addExtension method from ExtensionsDataSource interface
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new LinkPreviewExtentionDecorator(dataSource, this.linkPreviewConfiguration);
        });
    }
    //override getExtensionId method from ExtensionsDataSource interface
    getExtensionId() {
        return ExtensionConstants.linkPreview;
    }
}
//# sourceMappingURL=LinkPreviewExtention.js.map