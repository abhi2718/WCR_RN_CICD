import { ExtensionsDataSource } from "../../shared/framework";
import { StickerConfigurationInterface } from "./StickerConfiguration";
export declare class StickersExtension extends ExtensionsDataSource {
    configuration?: StickerConfigurationInterface;
    constructor(stickerConfiguration?: StickerConfigurationInterface);
    addExtension(): void;
    getExtensionId(): string;
}
