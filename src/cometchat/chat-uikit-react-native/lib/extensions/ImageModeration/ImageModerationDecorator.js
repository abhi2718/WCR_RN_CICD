import { DataSourceDecorator } from '../../shared/framework';
// @ts-ignore
import { CometChat } from '@cometchat/chat-sdk-react-native';
// @ts-ignore
import React from 'react';
import { ImageModerationFilter } from './ImageModerationFilter';
export class ImageModerationExtensionDecorator extends DataSourceDecorator {
    imageModerationConfiguration;
    // loggedInUser: CometChat.User;
    constructor(dataSource, imageModerationConfiguration) {
        super(dataSource);
        if (imageModerationConfiguration != undefined) {
            this.imageModerationConfiguration = imageModerationConfiguration;
        }
    }
    getId() {
        return 'ImageModeration';
    }
    isImageMessage(message) {
        return (message.getCategory() == CometChat.CATEGORY_MESSAGE &&
            message.getType() == CometChat.MESSAGE_TYPE.IMAGE);
    }
    // getImageMessageContentView(
    //   message: CometChat.BaseMessage,
    //   alignment: MessageBubbleAlignmentType,
    //   theme: CometChatTheme
    // ): JSX.Element {
    //   // console.log('message', message);
    //   let attachment = message.getAttachment();
    //   return this.getImageMessageBubble(
    //     attachment.getUrl(),
    //     attachment.getName(),
    //     {},
    //     message,
    //     theme
    //   );
    // }
    getImageMessageBubble(imageUrl, caption, style, message, theme) {
        if (this.isImageMessage(message)) {
            return (<ImageModerationFilter ChildView={super.getImageMessageBubble(imageUrl, caption, style, message, theme)} message={message} {...this.imageModerationConfiguration}/>);
        }
        return null;
    }
}
//# sourceMappingURL=ImageModerationDecorator.js.map