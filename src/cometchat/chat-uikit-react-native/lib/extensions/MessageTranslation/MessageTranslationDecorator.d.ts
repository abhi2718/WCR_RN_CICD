/// <reference types="react" />
import { DataSource, DataSourceDecorator } from '../../shared/framework';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatMessageOption } from "../../shared/modals";
import { CometChatTheme } from '../../shared/resources/CometChatTheme';
import { MessageBubbleAlignmentType } from '../../shared/constants/UIKitConstants';
import { MessageTranslationConfigurationInterface } from './MessageTranslationExtension';
export declare class MessageTranslationExtensionDecorator extends DataSourceDecorator {
    messageTranslationConfiguration?: MessageTranslationConfigurationInterface;
    translatedMessage: {};
    constructor(dataSource: DataSource, messageTranslationConfiguration?: MessageTranslationConfigurationInterface);
    getId(): string;
    getTextMessageOptions(loggedInUser: CometChat.User, messageObject: CometChat.BaseMessage, group: CometChat.Group): CometChatMessageOption[];
    getTranslateOption(messageObject: any): CometChatMessageOption;
    getSetMetaData: (messageObj: any, messageTranslation: any) => {
        msg: any;
        metaData: any;
    };
    translateMessage: (message: any) => void;
    getTextMessageBubble(messageText: string, message: CometChat.TextMessage, alignment: MessageBubbleAlignmentType, theme: CometChatTheme): JSX.Element;
}
