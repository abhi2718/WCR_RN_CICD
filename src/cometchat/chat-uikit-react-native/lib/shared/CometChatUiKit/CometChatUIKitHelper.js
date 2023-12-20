import { CometChatUIEventHandler } from "../events/CometChatUIEventHandler/CometChatUIEventHandler";
import { CometChatConversationEvents, CometChatGroupsEvents, CometChatUIEvents, MessageEvents } from "../events";
export class CometChatUIKitHelper {
    //---------- Message Events ----------
    static onMessageSent(message, status) {
        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, { message, status });
    }
    static onMessageEdited(message, status) {
        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageEdited, { message, status });
    }
    static onMessageDeleted(message) {
        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageDeleted, { message });
    }
    static onMessageRead(message) {
        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageRead, { message });
    }
    //---------- User Events ----------
    static onUserBlocked(user) {
        CometChatUIEventHandler.emitUserEvent(CometChatUIEvents.ccUserBlocked, { user });
    }
    static onUserUnblocked(user) {
        CometChatUIEventHandler.emitUserEvent(CometChatUIEvents.ccUserUnBlocked, { user });
    }
    //---------- Group Events ----------
    static onGroupCreated(group) {
        CometChatUIEventHandler.emitGroupEvent(CometChatGroupsEvents.ccGroupCreated, { group });
    }
    static onGroupDeleted(group) {
        CometChatUIEventHandler.emitGroupEvent(CometChatGroupsEvents.ccGroupDeleted, { group });
    }
    static onGroupLeft(message, leftUser, leftGroup) {
        CometChatUIEventHandler.emitGroupEvent(CometChatUIEvents.ccGroupLeft, { message, leftUser, leftGroup });
    }
    static onGroupMemberScopeChanged(message, updatedUser, scopeChangedTo, scopeChangedFrom, group) {
        CometChatUIEventHandler.emitGroupEvent(CometChatGroupsEvents.ccGroupMemberScopeChanged, {
            message,
            updatedUser,
            scopeChangedTo,
            scopeChangedFrom,
            group
        });
    }
    static onGroupMemberBanned(message, bannedUser, bannedBy, bannedFrom) {
        CometChatUIEventHandler.emitGroupEvent(CometChatGroupsEvents.ccGroupMemberBanned, { message, bannedUser, bannedBy, group: bannedFrom });
    }
    static onGroupMemberKicked(message, kickedUser, kickedBy, kickedFrom) {
        CometChatUIEventHandler.emitGroupEvent(CometChatGroupsEvents.ccGroupMemberKicked, { message, kickedUser, kickedBy, group: kickedFrom });
    }
    static onGroupMemberUnbanned(message, unbannedUser, unbannedBy, unbannedFrom) {
        CometChatUIEventHandler.emitGroupEvent(CometChatUIEvents.ccGroupMemberUnBanned, { message, unbannedUser, unbannedBy, unbannedFrom });
    }
    static onGroupMemberJoined(joinedUser, joinedGroup) {
        CometChatUIEventHandler.emitGroupEvent(CometChatUIEvents.ccGroupMemberJoined, { joinedUser, joinedGroup });
    }
    static onGroupMemberAdded(messages, usersAdded, groupAddedIn, addedBy) {
        CometChatUIEventHandler.emitGroupEvent(CometChatUIEvents.ccGroupMemberAdded, { messages, usersAdded, usersAddedIn: groupAddedIn, addedBy });
    }
    static onOwnershipChanged(group, newOwner) {
        CometChatUIEventHandler.emitGroupEvent(CometChatUIEvents.ccOwnershipChanged, { group, newOwner });
    }
    //---------- Conversation Events ----------
    static onConversationDeleted(conversation) {
        CometChatUIEventHandler.emitConversationEvent(CometChatConversationEvents.ccConversationDeleted, { conversation });
    }
}
//# sourceMappingURL=CometChatUIKitHelper.js.map