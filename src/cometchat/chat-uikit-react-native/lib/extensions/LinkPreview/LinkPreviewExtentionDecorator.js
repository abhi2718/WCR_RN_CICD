import React from "react";
import { DataSourceDecorator } from "../../shared/framework";
import { getExtentionData } from "../ExtensionModerator";
import { ExtensionConstants } from "../ExtensionConstants";
import { LinkPreviewBubble } from "./LinkPreviewBubble";
export class LinkPreviewExtentionDecorator extends DataSourceDecorator {
    linkPreviewConfiguration;
    constructor(dataSource, linkPreviewConfiguration) {
        super(dataSource);
        if (linkPreviewConfiguration) {
            this.linkPreviewConfiguration = linkPreviewConfiguration;
        }
    }
    isDeletedMessage(message) {
        return message.getDeletedBy() != null;
    }
    getId() {
        return "LinkPreviewExtention";
    }
    getTextMessageContentView(message, alignment, theme) {
        let linkData = getExtentionData(message, ExtensionConstants.linkPreview);
        if (!linkData || linkData.links.length == 0) {
            return super.getTextMessageContentView(message, alignment, theme);
        }
        else {
            const { image, favicon, title, url, description } = linkData.links[0];
            let img = image.length == 0 ? favicon : image;
            return <LinkPreviewBubble link={url} description={description} image={img} ChildView={() => super.getTextMessageBubble(message.getText(), message, alignment, theme)} title={title} style={{
                    backgroundColor: "transparent",
                    titleColor: theme.palette.getAccent(),
                    titleFont: theme.typography.title2,
                    subtitleColor: theme.palette.getAccent()
                }}/>;
        }
    }
}
//# sourceMappingURL=LinkPreviewExtentionDecorator.js.map