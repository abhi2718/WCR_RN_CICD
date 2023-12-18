import { ExtensionsDataSource } from "../shared/framework";
import { CallingConfiguration } from "./CallingConfiguration";
export declare class CallingExtension extends ExtensionsDataSource {
    configuration: CallingConfiguration;
    CallingExtension({ configuration }: {
        configuration?: CallingConfiguration;
    }): void;
    enable(): void;
    addExtension(): void;
    getExtensionId(): string;
}
