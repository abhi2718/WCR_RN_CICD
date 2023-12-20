export class MessageComposerConfiguration {
    attachmentIcon;
    attachmentOptions;
    auxiliaryButtonsAlignment;
    AuxiliaryButtonView;
    FooterView;
    HeaderView;
    hideLiveReaction;
    liveReactionIcon;
    maxHeight;
    messageComposerStyle;
    hideVoiceRecording;
    voiceRecordingIconURL;
    mediaRecorderStyle;
    pauseIconUrl;
    playIconUrl;
    recordIconUrl;
    deleteIconUrl;
    stopIconUrl;
    submitIconUrl;
    onChangeText;
    onError;
    onSendButtonPress;
    SecondaryButtonView;
    SendButtonView;
    text;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=MessageComposerConfiguration.js.map