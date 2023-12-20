import { CometChatDetailsOption, CometChatOptions, CometChatDetailsTemplate } from '../../modals';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatTheme } from '../../resources/CometChatTheme';
export declare const getDefaultDetailsTemplate: ({ loggedInUser, user, group, theme }: {
    loggedInUser: any;
    user: any;
    group: any;
    theme: any;
}) => CometChatDetailsTemplate[];
export declare const getCometChatDetailsTemplate: (props: CometChatDetailsTemplate) => CometChatDetailsTemplate;
export declare const getDefaultGroupMemberOptions: (group: CometChat.Group, groupMember: CometChat.GroupMember, theme: CometChatTheme) => CometChatOptions[];
export declare const getCometChatDetailsOption: (props: CometChatDetailsOption) => CometChatDetailsOption;
export declare function validateGroupMemberOptions(loggedInUserScope: string, memberScope: string, optionId: string): any;
