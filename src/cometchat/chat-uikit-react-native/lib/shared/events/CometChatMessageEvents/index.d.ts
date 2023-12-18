export declare class CometChatMessageEvents {
    static messageReceived: symbol;
    static customMessageReceived: symbol;
    static groupActionMessageReceived: symbol;
    static callActionMessageReceived: symbol;
    static messageRead: symbol;
    static messageDelivered: symbol;
    static messageEdited: symbol;
    static messageDeleted: symbol;
    static messagesFetched: symbol;
    static previousMessagesFetched: symbol;
    static refreshingMessages: symbol;
    static messagesRefreshed: symbol;
    static storeMessage: symbol;
    static scrolledUp: symbol;
    static scrolledToBottom: symbol;
    static markMessageAsRead: symbol;
    static onLiveReaction: symbol;
    static onMessageSent: symbol;
    static onMessageEdit: symbol;
    static onMessageDelete: symbol;
    static onMessageReply: symbol;
    static onMessageRead: symbol;
    static onMessageReaction: symbol;
    static onViewInformation: symbol;
    static onMessageError: symbol;
    static onMessageReactionError: symbol;
    static previewMessageForEdit: symbol;
    static onBackButtonClick: symbol;
    static _triggers: {};
    static emit: (...args: any[]) => void;
    /**
     * @param {string} event
     * @param {string} id
     */
    static removeListener: (...args: any[]) => void;
    /**
     * @param {string} event
     * @param {string} id
     * @param {func} callback
     */
    static addListener: (...args: any[]) => void;
}
