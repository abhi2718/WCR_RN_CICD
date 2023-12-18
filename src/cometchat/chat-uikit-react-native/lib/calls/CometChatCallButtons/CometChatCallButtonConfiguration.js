export default class CometChatCallButtonConfiguration {
    voiceIconImage;
    videoIconImage;
    hideVideoCall;
    hideVoiceCall;
    onVoiceCallPress;
    onVideoCallPress;
    callButtonStyle;
    constructor({ callButtonStyle, onVideoCallPress, onVoiceCallPress, videoIconImage, voiceIconImage, hideVideoCall, hideVoiceCall }) {
        this.callButtonStyle = callButtonStyle;
        this.onVideoCallPress = onVideoCallPress;
        this.onVoiceCallPress = onVoiceCallPress;
        this.videoIconImage = videoIconImage;
        this.voiceIconImage = voiceIconImage;
        this.hideVideoCall = hideVideoCall;
        this.hideVoiceCall = hideVoiceCall;
    }
}
//# sourceMappingURL=CometChatCallButtonConfiguration.js.map