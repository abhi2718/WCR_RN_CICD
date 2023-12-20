import { CometChat } from "@cometchat/chat-sdk-react-native";
export declare class CometChatUIKitHelper {
    static onMessageSent(message: CometChat.BaseMessage, status: string): void;
    static onMessageEdited(message: CometChat.BaseMessage, status: string): void;
    static onMessageDeleted(message: CometChat.BaseMessage): void;
    static onMessageRead(message: CometChat.BaseMessage): void;
    static onUserBlocked(user: CometChat.User): void;
    static onUserUnblocked(user: CometChat.User): void;
    static onGroupCreated(group: CometChat.Group): void;
    static onGroupDeleted(group: CometChat.Group): void;
    static onGroupLeft(message: CometChat.Action, leftUser: CometChat.User, leftGroup: CometChat.Group): void;
    static onGroupMemberScopeChanged(message: CometChat.Action, updatedUser: CometChat.User, scopeChangedTo: string, scopeChangedFrom: string, group: CometChat.Group): void;
    static onGroupMemberBanned(message: CometChat.Action, bannedUser: CometChat.User, bannedBy: CometChat.User, bannedFrom: CometChat.Group): void;
    static onGroupMemberKicked(message: CometChat.Action, kickedUser: CometChat.User, kickedBy: CometChat.User, kickedFrom: CometChat.Group): void;
    static onGroupMemberUnbanned(message: CometChat.Action, unbannedUser: CometChat.User, unbannedBy: CometChat.User, unbannedFrom: CometChat.Group): void;
    static onGroupMemberJoined(joinedUser: CometChat.User, joinedGroup: CometChat.Group): void;
    static onGroupMemberAdded(messages: CometChat.Action[], usersAdded: CometChat.User[], groupAddedIn: CometChat.Group, addedBy: CometChat.User): void;
    static onOwnershipChanged(group: CometChat.Group, newOwner: CometChat.GroupMember): void;
    static onConversationDeleted(conversation: CometChat.Conversation): void;
}
