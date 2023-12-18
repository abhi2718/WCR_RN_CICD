import { DataSource, DataSourceDecorator } from '../../shared/framework';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { ImageBubbleStyleInterface, VideoBubbleStyleInterface } from '../../shared/views';
import React from 'react';
import { CometChatTheme } from '../../shared/resources/CometChatTheme';
import { ThumbnailGenerationConfigurationInterface } from './ThumbnailGenerationExtension';
export declare class ThumbnailGenerationExtensionDecorator extends DataSourceDecorator {
    thumbnailGenerationConfiguration?: ThumbnailGenerationConfigurationInterface;
    constructor(dataSource: DataSource, thumbnailGenerationConfiguration?: ThumbnailGenerationConfigurationInterface);
    getId(): string;
    checkThumbnail(message: any): {
        uri: string;
    };
    getVideoMessageBubble(videoUrl: string, thumbnailUrl: string, message: CometChat.MediaMessage, theme: CometChatTheme, videoBubbleStyle: VideoBubbleStyleInterface): React.JSX.Element;
    getImageMessageBubble(imageUrl: string, caption: string, style: ImageBubbleStyleInterface, message: CometChat.MediaMessage, theme: any): JSX.Element;
}
