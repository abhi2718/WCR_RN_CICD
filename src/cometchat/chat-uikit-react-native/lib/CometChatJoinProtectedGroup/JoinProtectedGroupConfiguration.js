export class JoinProtectedGroupConfiguration {
    closeIcon;
    joinIcon;
    onBack;
    onError;
    joinProtectedGroupStyle;
    onJoinClick;
    passwordPlaceholderText;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=JoinProtectedGroupConfiguration.js.map