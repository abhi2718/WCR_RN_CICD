export function isFalsy($false) {
    if ($false != null) {
        if (typeof $false == "string")
            $false = $false.trim();
        if (typeof $false == "object" && Object.keys($false).length === 0)
            $false = undefined;
    }
    let falsyvalues = ['', 0, '0', false, null, 'null', undefined, 'undefined'];
    return falsyvalues.includes($false);
}
export class MessageUIEventListener {
    ccMessageSent = undefined;
    ccMessageEdited = undefined;
    ccMessageDeleted = undefined;
    ccMessageLiveReaction = undefined;
    ccMessageRead = undefined;
    ccMessageDelivered = undefined;
    ccMessageError = undefined;
    ccActiveChatChanged = undefined;
    // ccMessageForwarded?:Function =  undefined;
    constructor({ ccMessageSent, ccMessageEdited, ccMessageDeleted, ccMessageLiveReaction, ccMessageRead, ccMessageDelivered, ccMessageError, ccActiveChatChanged,
    // ccMessageForwarded,
     }) {
        if (!isFalsy(ccMessageError))
            this.ccMessageError = ccMessageError;
        if (!isFalsy(ccMessageDelivered))
            this.ccMessageDelivered = ccMessageDelivered;
        if (!isFalsy(ccMessageRead))
            this.ccMessageRead = ccMessageRead;
        if (!isFalsy(ccMessageLiveReaction))
            this.ccMessageLiveReaction = ccMessageLiveReaction;
        if (!isFalsy(ccMessageSent))
            this.ccMessageSent = ccMessageSent;
        if (!isFalsy(ccMessageEdited))
            this.ccMessageEdited = ccMessageEdited;
        if (!isFalsy(ccMessageDeleted))
            this.ccMessageDeleted = ccMessageDeleted;
        if (!isFalsy(ccActiveChatChanged))
            this.ccActiveChatChanged = ccActiveChatChanged;
        // if (!isFalsy(ccMessageForwarded)) this.ccMessageForwarded = ccMessageForwarded;
    }
}
export class PanelUIEventListener {
    ccShowPanel = undefined;
    ccHidePanel = undefined;
    constructor({ ccShowPanel, ccHidePanel, }) {
        if (!isFalsy(ccShowPanel))
            this.ccShowPanel = ccShowPanel;
        if (!isFalsy(ccHidePanel))
            this.ccHidePanel = ccHidePanel;
    }
}
export class CallUIEventListener {
    ccIncomingCallReceived = undefined;
    ccOutgoingCallAccepted = undefined;
    ccOutgoingCallRejected = undefined;
    ccIncomingCallCancelled = undefined;
    ccOutgoingCall = undefined;
    ccCallAccepted = undefined;
    ccCallRejected = undefined;
    ccCallEnded = undefined;
    ccOutgoingCallCancelled = undefined;
    ccCallFailled = undefined;
    ccCallInitiated = undefined;
    constructor({ ccIncomingCallReceived, ccOutgoingCallAccepted, ccOutgoingCallRejected, ccIncomingCallCancelled, ccOutgoingCall, ccCallAccepted, ccCallRejected, ccCallEnded, ccOutgoingCallCancelled, ccCallFailled, ccCallInitiated }) {
        if (!isFalsy(ccCallFailled))
            this.ccCallFailled = ccCallFailled;
        if (!isFalsy(ccCallInitiated))
            this.ccCallInitiated = ccCallInitiated;
        if (!isFalsy(ccOutgoingCall))
            this.ccOutgoingCall = ccOutgoingCall;
        if (!isFalsy(ccCallAccepted))
            this.ccCallAccepted = ccCallAccepted;
        if (!isFalsy(ccCallRejected))
            this.ccCallRejected = ccCallRejected;
        if (!isFalsy(ccCallEnded))
            this.ccCallEnded = ccCallEnded;
        if (!isFalsy(ccOutgoingCallCancelled))
            this.ccOutgoingCallCancelled = ccOutgoingCallCancelled;
        if (!isFalsy(ccIncomingCallReceived))
            this.ccIncomingCallReceived = ccIncomingCallReceived;
        if (!isFalsy(ccOutgoingCallAccepted))
            this.ccOutgoingCallAccepted = ccOutgoingCallAccepted;
        if (!isFalsy(ccOutgoingCallRejected))
            this.ccOutgoingCallRejected = ccOutgoingCallRejected;
        if (!isFalsy(ccIncomingCallCancelled))
            this.ccIncomingCallCancelled = ccIncomingCallCancelled;
    }
}
export class UserUIEventListener {
    ccUserBlocked;
    ccUserUnBlocked;
    constructor({ ccUserBlocked, ccUserUnBlocked, }) {
        if (!isFalsy(ccUserUnBlocked))
            this.ccUserUnBlocked = ccUserUnBlocked;
        if (!isFalsy(ccUserBlocked))
            this.ccUserBlocked = ccUserBlocked;
    }
}
export class UIEventListener {
    showPanel;
    hidePanel;
    ccToggleBottomSheet;
    openChat;
    constructor({ showPanel, hidePanel, ccToggleBottomSheet, openChat }) {
        if (!isFalsy(hidePanel))
            this.hidePanel = hidePanel;
        if (!isFalsy(showPanel))
            this.showPanel = showPanel;
        if (!isFalsy(openChat))
            this.openChat = openChat;
        if (!isFalsy(ccToggleBottomSheet))
            this.ccToggleBottomSheet = ccToggleBottomSheet;
    }
}
export class GroupUIEventListener {
    ccGroupCreated;
    ccGroupMemberKicked;
    ccGroupLeft;
    ccGroupMemberBanned;
    ccGroupDeleted;
    ccOwnershipChanged;
    ccGroupMemberScopeChanged;
    ccGroupMemberUnBanned;
    ccGroupMemberJoined;
    ccGroupMemberAdded;
    ccGropuMemberleft;
    constructor({ ccGroupCreated, ccGroupMemberKicked, ccGroupLeft, ccGroupMemberBanned, ccGroupDeleted, ccOwnershipChanged, ccGroupMemberScopeChanged, ccGroupMemberUnBanned, ccGroupMemberJoined, ccGroupMemberAdded, ccGropuMemberleft, }) {
        if (!isFalsy(ccGropuMemberleft))
            this.ccGropuMemberleft = ccGropuMemberleft;
        if (!isFalsy(ccGroupMemberAdded))
            this.ccGroupMemberAdded = ccGroupMemberAdded;
        if (!isFalsy(ccGroupMemberJoined))
            this.ccGroupMemberJoined = ccGroupMemberJoined;
        if (!isFalsy(ccGroupCreated))
            this.ccGroupCreated = ccGroupCreated;
        if (!isFalsy(ccGroupMemberKicked))
            this.ccGroupMemberKicked = ccGroupMemberKicked;
        if (!isFalsy(ccGroupMemberBanned))
            this.ccGroupMemberBanned = ccGroupMemberBanned;
        if (!isFalsy(ccGroupLeft))
            this.ccGroupLeft = ccGroupLeft;
        if (!isFalsy(ccGroupDeleted))
            this.ccGroupDeleted = ccGroupDeleted;
        if (!isFalsy(ccOwnershipChanged))
            this.ccOwnershipChanged = ccOwnershipChanged;
        if (!isFalsy(ccGroupMemberScopeChanged))
            this.ccGroupMemberScopeChanged = ccGroupMemberScopeChanged;
        if (!isFalsy(ccGroupMemberUnBanned))
            this.ccGroupMemberUnBanned = ccGroupMemberUnBanned;
    }
}
export class UserCallUIEventListener {
    ccYouLeft;
    ccYouJoined;
    ccUserJoined;
    ccUserLeft;
    ccUserListUpdated;
    ccAudioModesUpdated;
    ccCallEnded;
    ccError;
    constructor({ ccYouLeft, ccYouJoined, ccUserJoined, ccUserLeft, ccUserListUpdated, ccAudioModesUpdated, ccCallEnded, ccError, }) {
        if (!isFalsy(ccYouLeft))
            this.ccYouLeft = ccYouLeft;
        if (!isFalsy(ccYouJoined))
            this.ccYouJoined = ccYouJoined;
        if (!isFalsy(ccUserJoined))
            this.ccUserJoined = ccUserJoined;
        if (!isFalsy(ccUserLeft))
            this.ccUserLeft = ccUserLeft;
        if (!isFalsy(ccUserListUpdated))
            this.ccUserListUpdated = ccUserListUpdated;
        if (!isFalsy(ccAudioModesUpdated))
            this.ccAudioModesUpdated = ccAudioModesUpdated;
        if (!isFalsy(ccCallEnded))
            this.ccCallEnded = ccCallEnded;
        if (!isFalsy(ccError))
            this.ccError = ccError;
    }
}
export class ConversationUIEventListener {
    ccConversationDeleted;
    constructor({ ccConversationDeleted, }) {
        if (!isFalsy(ccConversationDeleted))
            this.ccConversationDeleted = ccConversationDeleted;
    }
}
export class Listener {
    _name;
    _callback;
    constructor(name, callback) {
        this._name = name;
        this._callback = callback;
    }
}
export class MessageListener extends Listener {
    _cursor;
    _eventListener;
    constructor(name, messageEventListener, cursor, callback) {
        super(name, callback);
        this._eventListener = messageEventListener;
        if (cursor)
            this._cursor = cursor;
    }
}
export class ConversationListener extends Listener {
    _cursor;
    _eventListener;
    constructor(name, userEventHandler, cursor, callback) {
        super(name, callback);
        this._eventListener = userEventHandler;
        if (cursor)
            this._cursor = cursor;
    }
}
export class UserListener extends Listener {
    _cursor;
    _eventListener;
    constructor(name, userEventHandler, cursor, callback) {
        super(name, callback);
        this._eventListener = userEventHandler;
        if (cursor)
            this._cursor = cursor;
    }
}
export class UIListener extends Listener {
    _cursor;
    _eventListener;
    constructor(name, uiEventHandler, cursor, callback) {
        super(name, callback);
        this._eventListener = uiEventHandler;
        if (cursor)
            this._cursor = cursor;
    }
}
export class GroupListener extends Listener {
    _cursor;
    _eventListener;
    constructor(name, groupEventHandler, cursor, callback) {
        super(name, callback);
        this._eventListener = groupEventHandler;
        if (cursor)
            this._cursor = cursor;
    }
}
export class UserCallListener extends Listener {
    _cursor;
    _eventListener;
    constructor(callEventHandler, cursor, callback) {
        super("callListner", callback);
        this._eventListener = callEventHandler;
    }
}
export class CallListener extends Listener {
    _cursor;
    _eventListener;
    constructor(name, callEventListner, cursor, callback) {
        super(name, callback);
        this._eventListener = callEventListner;
    }
}
export class PanelListener extends Listener {
    _cursor;
    _eventListener;
    constructor(name, panelEventListner, cursor, callback) {
        super(name, callback);
        this._eventListener = panelEventListner;
    }
}
//# sourceMappingURL=Listener.js.map