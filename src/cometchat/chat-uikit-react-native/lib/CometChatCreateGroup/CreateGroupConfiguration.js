export class CreateGroupConfiguration {
    closeIcon;
    createGroupStyle;
    createIcon;
    onBack;
    onCreatePress;
    onError;
    constructor(props) {
        if (props)
            for (const [key, value] of Object.entries(props)) {
                this[key] = value;
            }
    }
}
//# sourceMappingURL=CreateGroupConfiguration.js.map