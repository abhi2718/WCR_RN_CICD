export type UIKitSettings = {
    appId: string;
    region: string;
    authKey: string;
    subscriptionType?: string;
    autoEstablishSocketConnection?: boolean;
    overrideAdminHost?: string;
    overrideClientHost?: string;
    deviceToken?: string;
    googleApiKey?: string;
    disableCalling?: boolean;
};
export declare function UIKitSettings({ appId, region, authKey, subscriptionType, autoEstablishSocketConnection, overrideAdminHost, overrideClientHost, deviceToken, googleApiKey, disableCalling, }: UIKitSettings): UIKitSettings;
