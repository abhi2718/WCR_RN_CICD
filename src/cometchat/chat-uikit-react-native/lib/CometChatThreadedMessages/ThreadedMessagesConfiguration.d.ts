/// <reference types="react" />
import { MessageComposerConfigurationInterface } from '../CometChatMessageComposer';
import { MessageListConfigurationInterface } from '../CometChatMessageList/MessageListConfiguration';
import { ImageType } from '../shared';
import { CometChatThreadedMessagesInterface, ThreadedMessagesStyleInterface } from './CometChatThreadedMessages';
import { CometChat } from '@cometchat/chat-sdk-react-native';
export interface ThreadedMessagesConfigurationInterface extends Omit<CometChatThreadedMessagesInterface, 'parentMessage' | 'BubbleView' | 'title'> {
}
export declare class ThreadedMessagesConfiguration {
    threadedMessagesStyle?: ThreadedMessagesStyleInterface;
    closeIcon?: ImageType;
    MessageActionView?: (messageObject: CometChat.BaseMessage) => JSX.Element;
    messageComposerConfiguration?: MessageComposerConfigurationInterface;
    messageListConfiguration?: MessageListConfigurationInterface;
    onClose?: () => void;
    onError?: (error: CometChat.CometChatException) => void;
    constructor(props: ThreadedMessagesConfigurationInterface);
}
