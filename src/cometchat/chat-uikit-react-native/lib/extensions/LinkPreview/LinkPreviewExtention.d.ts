import { ExtensionsDataSource } from "../../shared/framework";
import { LinkPreviewConfigurationInterface } from "./LinkPreviewConfiguration";
export declare class LinkPreviewExtention extends ExtensionsDataSource {
    linkPreviewConfiguration: LinkPreviewConfigurationInterface;
    constructor(linkPreviewConfiguration?: LinkPreviewConfigurationInterface);
    addExtension(): void;
    getExtensionId(): string;
}
