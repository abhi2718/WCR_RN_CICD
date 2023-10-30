export function isFalsy($false) {
    if ($false != null) {
        if (typeof $false == "string") $false = $false.trim();
        if (typeof $false == "object" && Object.keys($false).length === 0) $false = undefined;
    }
    let falsyvalues: any = ['', 0, '0', false, null, 'null', undefined, 'undefined'];
    return falsyvalues.includes($false);
}

type MessageUIEvents = {
    ccMessageSent?: Function,
    ccMessageEdited?: Function,
    ccMessageDeleted?: Function,
    ccMessageLiveReaction?: Function,
    ccMessageRead?: Function,
    ccMessageDelivered?: Function,
    ccMessageError?: Function,
    ccActiveChatChanged?:Function,
    // ccMessageForwarded?:Function,
}
export class MessageUIEventListener {
    ccMessageSent?: Function = undefined;
    ccMessageEdited?: Function = undefined;
    ccMessageDeleted?: Function = undefined;
    ccMessageLiveReaction?: Function = undefined;
    ccMessageRead?: Function = undefined;
    ccMessageDelivered?: Function = undefined;
    ccMessageError?: Function = undefined;
    ccActiveChatChanged?:Function=undefined;
    // ccMessageForwarded?:Function =  undefined;
    constructor({
        ccMessageSent,
        ccMessageEdited,
        ccMessageDeleted,
        ccMessageLiveReaction,
        ccMessageRead,
        ccMessageDelivered,
        ccMessageError,
        ccActiveChatChanged,
        // ccMessageForwarded,
    }: MessageUIEvents) {
        if (!isFalsy(ccMessageError)) this.ccMessageError = ccMessageError;
        if (!isFalsy(ccMessageDelivered)) this.ccMessageDelivered = ccMessageDelivered;
        if (!isFalsy(ccMessageRead)) this.ccMessageRead = ccMessageRead;
        if (!isFalsy(ccMessageLiveReaction)) this.ccMessageLiveReaction = ccMessageLiveReaction;
        if (!isFalsy(ccMessageSent)) this.ccMessageSent = ccMessageSent;
        if (!isFalsy(ccMessageEdited)) this.ccMessageEdited = ccMessageEdited;
        if (!isFalsy(ccMessageDeleted)) this.ccMessageDeleted = ccMessageDeleted;
        if (!isFalsy(ccActiveChatChanged)) this.ccActiveChatChanged = ccActiveChatChanged;
        // if (!isFalsy(ccMessageForwarded)) this.ccMessageForwarded = ccMessageForwarded;
    }
}

type CallUIEvents = {
    ccIncomingCallReceived?: Function,
    ccOutgoingCallAccepted?: Function,
    ccOutgoingCallRejected?: Function,
    ccIncomingCallCancelled?: Function,
    ccOutgoingCall?: Function,
    ccCallAccepted?: Function,
    ccCallRejected?: Function,
    ccOutgoingCallCancelled?: Function,
    ccCallEnded?: Function,
    ccCallInitiated?: Function,
    ccCallFailled?: Function,
}

type PanelUIEvents = {
    ccShowPanel?: Function,
    ccHidePanel?: Function
}

export class PanelUIEventListener {
    ccShowPanel?: Function = undefined;
    ccHidePanel?: Function = undefined;

    constructor({
        ccShowPanel,
        ccHidePanel,
    }: PanelUIEvents) {
        if (!isFalsy(ccShowPanel)) this.ccShowPanel = ccShowPanel;
        if (!isFalsy(ccHidePanel)) this.ccHidePanel = ccHidePanel;
    }
}
export class CallUIEventListener {
    ccIncomingCallReceived?: Function = undefined;
    ccOutgoingCallAccepted?: Function = undefined;
    ccOutgoingCallRejected?: Function = undefined;
    ccIncomingCallCancelled?: Function = undefined;
    ccOutgoingCall?: Function = undefined;
    ccCallAccepted?: Function = undefined;
    ccCallRejected?: Function = undefined;
    ccCallEnded?: Function = undefined;
    ccOutgoingCallCancelled?: Function = undefined;
    ccCallFailled?: Function = undefined;
    ccCallInitiated?: Function = undefined;

    constructor({
        ccIncomingCallReceived,
        ccOutgoingCallAccepted,
        ccOutgoingCallRejected,
        ccIncomingCallCancelled,
        ccOutgoingCall,
        ccCallAccepted,
        ccCallRejected,
        ccCallEnded,
        ccOutgoingCallCancelled,
        ccCallFailled,
        ccCallInitiated
    }: CallUIEvents) {
        if (!isFalsy(ccCallFailled)) this.ccCallFailled = ccCallFailled;
        if (!isFalsy(ccCallInitiated)) this.ccCallInitiated = ccCallInitiated;
        if (!isFalsy(ccOutgoingCall)) this.ccOutgoingCall = ccOutgoingCall;
        if (!isFalsy(ccCallAccepted)) this.ccCallAccepted = ccCallAccepted;
        if (!isFalsy(ccCallRejected)) this.ccCallRejected = ccCallRejected;
        if (!isFalsy(ccCallEnded)) this.ccCallEnded = ccCallEnded;
        if (!isFalsy(ccOutgoingCallCancelled)) this.ccOutgoingCallCancelled = ccOutgoingCallCancelled;
        if (!isFalsy(ccIncomingCallReceived)) this.ccIncomingCallReceived = ccIncomingCallReceived;
        if (!isFalsy(ccOutgoingCallAccepted)) this.ccOutgoingCallAccepted = ccOutgoingCallAccepted;
        if (!isFalsy(ccOutgoingCallRejected)) this.ccOutgoingCallRejected = ccOutgoingCallRejected;
        if (!isFalsy(ccIncomingCallCancelled)) this.ccIncomingCallCancelled = ccIncomingCallCancelled;
    }
}

type UserUIEvents = {
    ccUserBlocked?: Function,
    ccUserUnBlocked?: Function
}

export class UserUIEventListener {
    ccUserBlocked?: Function;
    ccUserUnBlocked?: Function;
    constructor({
        ccUserBlocked,
        ccUserUnBlocked,
    }: UserUIEvents) {
        if (!isFalsy(ccUserUnBlocked)) this.ccUserUnBlocked = ccUserUnBlocked;
        if (!isFalsy(ccUserBlocked)) this.ccUserBlocked = ccUserBlocked;
    }
}


type UIEvents = {
    showPanel?: (item)=>void,
    hidePanel?: (item)=>void,
    ccToggleBottomSheet?: (item)=>void,
    openChat?: (item)=>void,
    ccComposeMessage?:(item)=>void,
}
export class UIEventListener {
    showPanel?: (item)=>void;
    hidePanel?: (item)=>void;
    ccToggleBottomSheet?: (item)=>void;
    openChat?: (item)=>void;
    ccComposeMessage?:(item)=>void;
    constructor({
        showPanel,
        hidePanel,
        ccToggleBottomSheet,
        openChat,
        ccComposeMessage
    }: UIEvents) {
        if (!isFalsy(hidePanel)) this.hidePanel = hidePanel;
        if (!isFalsy(showPanel)) this.showPanel = showPanel;
        if (!isFalsy(openChat)) this.openChat = openChat;
        if (!isFalsy(ccToggleBottomSheet)) this.ccToggleBottomSheet = ccToggleBottomSheet;
        if (!isFalsy(ccComposeMessage)) this.ccComposeMessage = ccComposeMessage;
    }
}
export class GroupUIEventListener {
    ccGroupCreated?: Function;
    ccGroupMemberKicked?: Function;
    ccGroupLeft?: Function;
    ccGroupMemberBanned?: Function;
    ccGroupDeleted?: Function;
    ccOwnershipChanged?: Function;
    ccGroupMemberScopeChanged?: Function;
    ccGroupMemberUnBanned?: Function;
    ccGroupMemberJoined?: Function;
    ccGroupMemberAdded?: Function;
    ccGropuMemberleft?: Function;

    constructor({
        ccGroupCreated,
        ccGroupMemberKicked,
        ccGroupLeft,
        ccGroupMemberBanned,
        ccGroupDeleted,
        ccOwnershipChanged,
        ccGroupMemberScopeChanged,
        ccGroupMemberUnBanned,
        ccGroupMemberJoined,
        ccGroupMemberAdded,
        ccGropuMemberleft,
    }) {

        if (!isFalsy(ccGropuMemberleft)) this.ccGropuMemberleft = ccGropuMemberleft;

        if (!isFalsy(ccGroupMemberAdded)) this.ccGroupMemberAdded = ccGroupMemberAdded;

        if (!isFalsy(ccGroupMemberJoined)) this.ccGroupMemberJoined = ccGroupMemberJoined;

        if (!isFalsy(ccGroupCreated)) this.ccGroupCreated = ccGroupCreated;

        if (!isFalsy(ccGroupMemberKicked)) this.ccGroupMemberKicked = ccGroupMemberKicked;

        if (!isFalsy(ccGroupMemberBanned)) this.ccGroupMemberBanned = ccGroupMemberBanned;

        if (!isFalsy(ccGroupLeft)) this.ccGroupLeft = ccGroupLeft;

        if (!isFalsy(ccGroupDeleted)) this.ccGroupDeleted = ccGroupDeleted;

        if (!isFalsy(ccOwnershipChanged)) this.ccOwnershipChanged = ccOwnershipChanged;

        if (!isFalsy(ccGroupMemberScopeChanged)) this.ccGroupMemberScopeChanged = ccGroupMemberScopeChanged;

        if (!isFalsy(ccGroupMemberUnBanned)) this.ccGroupMemberUnBanned = ccGroupMemberUnBanned;

    }
}

export class UserCallUIEventListener {
    ccYouLeft?: Function;
    ccYouJoined?: Function;
    ccUserJoined?: Function;
    ccUserLeft?: Function;
    ccUserListUpdated?: Function;
    ccAudioModesUpdated?: Function;
    ccCallEnded?: Function;
    ccError?: Function;
    constructor({
        ccYouLeft,
        ccYouJoined,
        ccUserJoined,
        ccUserLeft,
        ccUserListUpdated,
        ccAudioModesUpdated,
        ccCallEnded,
        ccError,
    }) {
        if (!isFalsy(ccYouLeft)) this.ccYouLeft = ccYouLeft;
        if (!isFalsy(ccYouJoined)) this.ccYouJoined = ccYouJoined;
        if (!isFalsy(ccUserJoined)) this.ccUserJoined = ccUserJoined;
        if (!isFalsy(ccUserLeft)) this.ccUserLeft = ccUserLeft;
        if (!isFalsy(ccUserListUpdated)) this.ccUserListUpdated = ccUserListUpdated;
        if (!isFalsy(ccAudioModesUpdated)) this.ccAudioModesUpdated = ccAudioModesUpdated;
        if (!isFalsy(ccCallEnded)) this.ccCallEnded = ccCallEnded;
        if (!isFalsy(ccError)) this.ccError = ccError;
    }
}

type ConversationUIEvents = {
    ccConversationDeleted?: Function,
}
export class ConversationUIEventListener {
    ccConversationDeleted?: Function
    constructor({
        ccConversationDeleted,
    }: ConversationUIEvents) {
        if (!isFalsy(ccConversationDeleted)) this.ccConversationDeleted = ccConversationDeleted;
    }
}

export interface EventListener {
    _name: string;
    _callback: Function;
    _eventListener?: MessageUIEventListener | UserUIEventListener | UserCallUIEventListener | CallUIEventListener | GroupUIEventListener | ConversationUIEventListener | UIEventListener | PanelUIEventListener;
}

export class Listener implements EventListener {
    _name: string;
    _callback: Function;

    constructor(name: string, callback: Function) {
        this._name = name;
        this._callback = callback;
    }
}

export class MessageListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: MessageUIEventListener;
    constructor(name: string, messageEventListener?: MessageUIEventListener, cursor?: number, callback?: Function) {
        super(name, callback);
        this._eventListener = messageEventListener;
        if (cursor) this._cursor = cursor;
    }
}

export class ConversationListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: ConversationUIEventListener;
    constructor(name: string, userEventHandler?: ConversationUIEventListener, cursor?: number, callback?: Function) {
        super(name, callback);
        this._eventListener = userEventHandler;
        if (cursor) this._cursor = cursor;
    }
}
export class UserListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: UserUIEventListener;
    constructor(name: string, userEventHandler?: UserUIEventListener, cursor?: number, callback?: Function) {
        super(name, callback);
        this._eventListener = userEventHandler;
        if (cursor) this._cursor = cursor;
    }
}

export class UIListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: UIEventListener;
    constructor(name: string, uiEventHandler?: UIEventListener, cursor?: number, callback?: Function) {
        super(name, callback);
        this._eventListener = uiEventHandler;
        if (cursor) this._cursor = cursor;
    }
}

export class GroupListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: GroupUIEventListener;
    constructor(name: string, groupEventHandler?: GroupUIEventListener, cursor?: number, callback?: Function) {
        super(name, callback);
        this._eventListener = groupEventHandler;
        if (cursor) this._cursor = cursor;
    }
}

export class UserCallListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: UserCallUIEventListener;
    constructor(callEventHandler?: UserCallUIEventListener, cursor?: number, callback?: Function) {
        super("callListner", callback);
        this._eventListener = callEventHandler;
    }
}

export class CallListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: CallUIEventListener;
    constructor(name: string, callEventListner?: CallUIEventListener, cursor?: number, callback?: Function) {
        super(name, callback);
        this._eventListener = callEventListner;
    }
}

export class PanelListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: PanelUIEventListener;
    constructor(name: string, panelEventListner?: PanelUIEventListener, cursor?: number, callback?: Function) {
        super(name, callback);
        this._eventListener = panelEventListner;
    }
}