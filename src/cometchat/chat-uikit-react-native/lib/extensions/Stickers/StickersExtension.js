import { ChatConfigurator, ExtensionsDataSource } from "../../shared/framework";
import { ExtensionConstants } from "../ExtensionConstants";
import { StickerConfiguration } from "./StickerConfiguration";
import { StickersExtensionDecorator } from "./StickersExtensionDecorator";
export class StickersExtension extends ExtensionsDataSource {
    //Configuration prop taken as optional field in constructor
    configuration;
    constructor(stickerConfiguration) {
        super();
        this.configuration = new StickerConfiguration({
            ...stickerConfiguration
        });
    }
    //override addExtension method from ExtensionsDataSource interface
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            return new StickersExtensionDecorator({
                dataSource,
                configration: this.configuration
            });
        });
    }
    //override getExtensionId method from ExtensionsDataSource interface
    getExtensionId() {
        return ExtensionConstants.stickers;
    }
}
//# sourceMappingURL=StickersExtension.js.map