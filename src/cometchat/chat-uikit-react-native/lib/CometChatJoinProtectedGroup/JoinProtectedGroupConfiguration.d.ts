import { ImageType } from '../shared';
import { CometChatJoinProtectedGroupInterface, JoinProtectedGroupStyleInterface } from './CometChatJoinProtectedGroup';
import { CometChat } from '@cometchat/chat-sdk-react-native';
export interface JoinProtectedGroupConfigurationInterface extends Omit<CometChatJoinProtectedGroupInterface, 'group' | 'description' | 'title' | 'hasError' | 'errorText'> {
}
export declare class JoinProtectedGroupConfiguration {
    closeIcon?: ImageType;
    joinIcon?: ImageType;
    onBack?: () => void;
    onError?: (error: CometChat.CometChatException) => void;
    joinProtectedGroupStyle?: JoinProtectedGroupStyleInterface;
    onJoinClick?: (group: CometChat.Group, password: string) => void;
    passwordPlaceholderText?: string;
    constructor(props: JoinProtectedGroupConfigurationInterface);
}
