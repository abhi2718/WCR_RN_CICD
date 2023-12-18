export class ThreadedMessagesConfiguration {
    threadedMessagesStyle;
    closeIcon;
    MessageActionView;
    messageComposerConfiguration;
    messageListConfiguration;
    onClose;
    onError;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=ThreadedMessagesConfiguration.js.map