import { CometChatListItemInterface } from './CometChatListItem';
export interface ListItemConfigurationInterface extends Omit<CometChatListItemInterface, 'id' | 'avatarURL' | 'avatarName' | 'statusIndicatorColor' | 'statusIndicatorIcon' | 'title'> {
}
export declare class ListItemConfiguration {
    constructor(props: ListItemConfigurationInterface);
}
