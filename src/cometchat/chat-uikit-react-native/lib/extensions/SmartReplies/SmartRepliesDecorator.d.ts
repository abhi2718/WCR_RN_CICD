import { DataSource, DataSourceDecorator } from '../../shared/framework';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { SmartRepliesConfigurationInterface } from './SmartRepliesExtension';
export declare class SmartRepliesDecorator extends DataSourceDecorator {
    smartRepliesConfiguration?: SmartRepliesConfigurationInterface;
    messageListenerId: string;
    loggedInUser: CometChat.User;
    constructor(dataSource: DataSource, smartRepliesConfiguration?: SmartRepliesConfigurationInterface);
    isDeletedMessage(message: CometChat.BaseMessage): boolean;
    getId(): string;
    getReplies(message: any): void;
    handleSendMessage: (message: any, smartReply: any) => void;
    onCloseRepliesPannel: () => void;
}
