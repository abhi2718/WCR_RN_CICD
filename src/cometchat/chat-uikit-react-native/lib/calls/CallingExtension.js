import { CallingPackage } from "./CallingPackage";
import { CometChatUIKit } from "../shared/CometChatUiKit/CometChatUIKit";
import { ChatConfigurator, ExtensionsDataSource } from "../shared/framework";
import { CallingExtensionDecorator } from "./CallingExtentionDecorator";
const CometChatCalls = CallingPackage.CometChatCalls;
export class CallingExtension extends ExtensionsDataSource {
    configuration;
    CallingExtension({ configuration }) {
        if (configuration)
            this.configuration = configuration;
    }
    enable() {
        this.addExtension();
    }
    addExtension() {
        ChatConfigurator.enable((dataSource) => {
            const callAppSettings = new CometChatCalls.CallAppSettingsBuilder()
                .setAppId(CometChatUIKit.uiKitSettings.appId)
                .setRegion(CometChatUIKit.uiKitSettings.region)
                .build();
            CometChatCalls.init(callAppSettings).then(() => {
                console.log('CometChatCalls initialization completed successfully');
            }, error => {
                console.log('CometChatCalls initialization failed with error:', error);
            });
            return new CallingExtensionDecorator({
                dataSource,
                configuration: this.configuration
            });
        });
    }
    getExtensionId() {
        return "calling";
    }
}
//# sourceMappingURL=CallingExtension.js.map