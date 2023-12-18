export class MessagesConfiguration {
    disableTyping;
    hideMessageComposer;
    messageHeaderConfiguration;
    messageListConfiguration;
    messageComposerConfiguration;
    threadedMessageConfiguration;
    detailsConfiguration;
    MessageHeaderView;
    MessageComposerView;
    MessageListView;
    hideMessageHeader;
    disableSoundForMessages;
    customSoundForIncomingMessage;
    customSoundForOutgoingMessage;
    messageStyle;
    AuxilaryAppBarOptions;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=MessagesConfiguration.js.map