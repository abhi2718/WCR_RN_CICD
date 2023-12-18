import { CometChat } from "@cometchat/chat-sdk-react-native";
class ExtensionsDataSource {
    enable() {
        CometChat.isExtensionEnabled(this.getExtensionId()).then((enabled) => {
            if (enabled)
                this.addExtension();
        });
    }
}
export { ExtensionsDataSource };
// export interface ExtensionsDataSource {
//     enable()
// }
//# sourceMappingURL=ExtensionsDataSource.js.map