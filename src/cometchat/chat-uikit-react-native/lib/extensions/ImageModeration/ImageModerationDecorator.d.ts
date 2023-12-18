/// <reference types="react" />
import { DataSource, DataSourceDecorator } from '../../shared/framework';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { ImageBubbleStyleInterface } from '../../shared/views/CometChatImageBubble';
import { CometChatTheme } from '../../shared/resources/CometChatTheme';
import { ImageModerationConfigurationInterface } from './ImageModerationExtension';
export declare class ImageModerationExtensionDecorator extends DataSourceDecorator {
    imageModerationConfiguration?: ImageModerationConfigurationInterface;
    constructor(dataSource: DataSource, imageModerationConfiguration?: ImageModerationConfigurationInterface);
    getId(): string;
    isImageMessage(message: CometChat.BaseMessage): message is CometChat.MediaMessage;
    getImageMessageBubble(imageUrl: string, caption: string, style: ImageBubbleStyleInterface, message: CometChat.MediaMessage, theme: CometChatTheme): JSX.Element;
}
