import { DataSourceDecorator } from '../../shared/framework';
import { ExtensionConstants } from '../ExtensionConstants';
import { getExtentionData } from '../ExtensionModerator';
// import { ThumbnailGenerationConfigurationInterface } from './ThumbnailGenerationConfiguration';
import { CometChatImageBubble, CometChatVideoBubble, } from '../../shared/views';
// @ts-ignore
import React from 'react';
export class ThumbnailGenerationExtensionDecorator extends DataSourceDecorator {
    thumbnailGenerationConfiguration;
    // loggedInUser: CometChat.User;
    constructor(dataSource, thumbnailGenerationConfiguration) {
        super(dataSource);
        if (thumbnailGenerationConfiguration != undefined) {
            this.thumbnailGenerationConfiguration = thumbnailGenerationConfiguration;
        }
    }
    getId() {
        return 'ThumbnailGeneration';
    }
    checkThumbnail(message) {
        let image = { uri: null };
        let thumbnailData = getExtentionData(message, ExtensionConstants.thumbnailGeneration);
        if (thumbnailData == undefined) {
            image = { uri: message?.data?.url };
        }
        else {
            let attachmentData = thumbnailData['attachments'];
            if (attachmentData.length == 1) {
                let dataObj = attachmentData[0];
                if (!dataObj['error']) {
                    image = { uri: dataObj['data']['thumbnails']['url_small'] };
                }
                else {
                    image = { uri: null };
                }
            }
        }
        return image;
    }
    getVideoMessageBubble(videoUrl, thumbnailUrl, message, theme, videoBubbleStyle) {
        const image = this.checkThumbnail(message);
        return (<CometChatVideoBubble videoUrl={videoUrl} thumbnailUrl={image} style={{
                height: 200,
                width: 200,
                backgroundColor: theme?.palette?.getBackgroundColor() ?? '#fff',
                playIconBackgroundColor: theme?.palette?.getAccent500() ?? 'rgba(20,20,20,0.4)',
                playIconTint: theme?.palette?.getBackgroundColor() ?? '#fff',
                ...videoBubbleStyle,
                ...(this.thumbnailGenerationConfiguration?.videoBubbleStyle
                    ? this.thumbnailGenerationConfiguration.videoBubbleStyle
                    : {}),
            }}/>);
    }
    getImageMessageBubble(imageUrl, caption, style, message, theme) {
        const image = this.checkThumbnail(message);
        return (<CometChatImageBubble imageUrl={{ uri: imageUrl } ?? image} thumbnailUrl={{ uri: message?.['data']?.['url'] }} style={{
                height: 200,
                width: 200,
                backgroundColor: theme?.palette?.getBackgroundColor() ?? '#fff',
                ...style,
            }}/>);
    }
}
//# sourceMappingURL=ThumbnailGenerationDecorator.js.map