export declare function isFalsy($false: any): any;
type MessageUIEvents = {
    ccMessageSent?: Function;
    ccMessageEdited?: Function;
    ccMessageDeleted?: Function;
    ccMessageLiveReaction?: Function;
    ccMessageRead?: Function;
    ccMessageDelivered?: Function;
    ccMessageError?: Function;
    ccActiveChatChanged?: Function;
};
export declare class MessageUIEventListener {
    ccMessageSent?: Function;
    ccMessageEdited?: Function;
    ccMessageDeleted?: Function;
    ccMessageLiveReaction?: Function;
    ccMessageRead?: Function;
    ccMessageDelivered?: Function;
    ccMessageError?: Function;
    ccActiveChatChanged?: Function;
    constructor({ ccMessageSent, ccMessageEdited, ccMessageDeleted, ccMessageLiveReaction, ccMessageRead, ccMessageDelivered, ccMessageError, ccActiveChatChanged, }: MessageUIEvents);
}
type CallUIEvents = {
    ccIncomingCallReceived?: Function;
    ccOutgoingCallAccepted?: Function;
    ccOutgoingCallRejected?: Function;
    ccIncomingCallCancelled?: Function;
    ccOutgoingCall?: Function;
    ccCallAccepted?: Function;
    ccCallRejected?: Function;
    ccOutgoingCallCancelled?: Function;
    ccCallEnded?: Function;
    ccCallInitiated?: Function;
    ccCallFailled?: Function;
};
type PanelUIEvents = {
    ccShowPanel?: Function;
    ccHidePanel?: Function;
};
export declare class PanelUIEventListener {
    ccShowPanel?: Function;
    ccHidePanel?: Function;
    constructor({ ccShowPanel, ccHidePanel, }: PanelUIEvents);
}
export declare class CallUIEventListener {
    ccIncomingCallReceived?: Function;
    ccOutgoingCallAccepted?: Function;
    ccOutgoingCallRejected?: Function;
    ccIncomingCallCancelled?: Function;
    ccOutgoingCall?: Function;
    ccCallAccepted?: Function;
    ccCallRejected?: Function;
    ccCallEnded?: Function;
    ccOutgoingCallCancelled?: Function;
    ccCallFailled?: Function;
    ccCallInitiated?: Function;
    constructor({ ccIncomingCallReceived, ccOutgoingCallAccepted, ccOutgoingCallRejected, ccIncomingCallCancelled, ccOutgoingCall, ccCallAccepted, ccCallRejected, ccCallEnded, ccOutgoingCallCancelled, ccCallFailled, ccCallInitiated }: CallUIEvents);
}
type UserUIEvents = {
    ccUserBlocked?: Function;
    ccUserUnBlocked?: Function;
};
export declare class UserUIEventListener {
    ccUserBlocked?: Function;
    ccUserUnBlocked?: Function;
    constructor({ ccUserBlocked, ccUserUnBlocked, }: UserUIEvents);
}
type UIEvents = {
    showPanel?: (item: any) => void;
    hidePanel?: (item: any) => void;
    ccToggleBottomSheet?: (item: any) => void;
    openChat?: (item: any) => void;
};
export declare class UIEventListener {
    showPanel?: (item: any) => void;
    hidePanel?: (item: any) => void;
    ccToggleBottomSheet?: (item: any) => void;
    openChat?: (item: any) => void;
    constructor({ showPanel, hidePanel, ccToggleBottomSheet, openChat }: UIEvents);
}
export declare class GroupUIEventListener {
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
    constructor({ ccGroupCreated, ccGroupMemberKicked, ccGroupLeft, ccGroupMemberBanned, ccGroupDeleted, ccOwnershipChanged, ccGroupMemberScopeChanged, ccGroupMemberUnBanned, ccGroupMemberJoined, ccGroupMemberAdded, ccGropuMemberleft, }: {
        ccGroupCreated: any;
        ccGroupMemberKicked: any;
        ccGroupLeft: any;
        ccGroupMemberBanned: any;
        ccGroupDeleted: any;
        ccOwnershipChanged: any;
        ccGroupMemberScopeChanged: any;
        ccGroupMemberUnBanned: any;
        ccGroupMemberJoined: any;
        ccGroupMemberAdded: any;
        ccGropuMemberleft: any;
    });
}
export declare class UserCallUIEventListener {
    ccYouLeft?: Function;
    ccYouJoined?: Function;
    ccUserJoined?: Function;
    ccUserLeft?: Function;
    ccUserListUpdated?: Function;
    ccAudioModesUpdated?: Function;
    ccCallEnded?: Function;
    ccError?: Function;
    constructor({ ccYouLeft, ccYouJoined, ccUserJoined, ccUserLeft, ccUserListUpdated, ccAudioModesUpdated, ccCallEnded, ccError, }: {
        ccYouLeft: any;
        ccYouJoined: any;
        ccUserJoined: any;
        ccUserLeft: any;
        ccUserListUpdated: any;
        ccAudioModesUpdated: any;
        ccCallEnded: any;
        ccError: any;
    });
}
type ConversationUIEvents = {
    ccConversationDeleted?: Function;
};
export declare class ConversationUIEventListener {
    ccConversationDeleted?: Function;
    constructor({ ccConversationDeleted, }: ConversationUIEvents);
}
export interface EventListener {
    _name: string;
    _callback: Function;
    _eventListener?: MessageUIEventListener | UserUIEventListener | UserCallUIEventListener | CallUIEventListener | GroupUIEventListener | ConversationUIEventListener | UIEventListener | PanelUIEventListener;
}
export declare class Listener implements EventListener {
    _name: string;
    _callback: Function;
    constructor(name: string, callback: Function);
}
export declare class MessageListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: MessageUIEventListener;
    constructor(name: string, messageEventListener?: MessageUIEventListener, cursor?: number, callback?: Function);
}
export declare class ConversationListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: ConversationUIEventListener;
    constructor(name: string, userEventHandler?: ConversationUIEventListener, cursor?: number, callback?: Function);
}
export declare class UserListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: UserUIEventListener;
    constructor(name: string, userEventHandler?: UserUIEventListener, cursor?: number, callback?: Function);
}
export declare class UIListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: UIEventListener;
    constructor(name: string, uiEventHandler?: UIEventListener, cursor?: number, callback?: Function);
}
export declare class GroupListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: GroupUIEventListener;
    constructor(name: string, groupEventHandler?: GroupUIEventListener, cursor?: number, callback?: Function);
}
export declare class UserCallListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: UserCallUIEventListener;
    constructor(callEventHandler?: UserCallUIEventListener, cursor?: number, callback?: Function);
}
export declare class CallListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: CallUIEventListener;
    constructor(name: string, callEventListner?: CallUIEventListener, cursor?: number, callback?: Function);
}
export declare class PanelListener extends Listener implements EventListener {
    _cursor?: number;
    _eventListener: PanelUIEventListener;
    constructor(name: string, panelEventListner?: PanelUIEventListener, cursor?: number, callback?: Function);
}
export {};
