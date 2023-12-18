import { ImageType } from '../shared';
import { CometChatCreateGroupInterface, CreateGroupStyleInterface } from './CometChatCreateGroup';
import { CometChat } from '@cometchat/chat-sdk-react-native';
export interface CreateGroupConfigurationInterface extends Omit<CometChatCreateGroupInterface, 'passwordPlaceholderText' | 'namePlaceholderText' | 'title' | 'disableCloseButton'> {
}
export declare class CreateGroupConfiguration {
    closeIcon?: ImageType;
    createGroupStyle?: CreateGroupStyleInterface;
    createIcon?: ImageType;
    onBack?: () => void;
    onCreatePress?: (groupName: string, groupType: string, password: string) => void;
    onError?: (error: CometChat.CometChatException) => void;
    constructor(props: CreateGroupConfigurationInterface);
}
