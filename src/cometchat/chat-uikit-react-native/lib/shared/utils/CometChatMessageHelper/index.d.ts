export declare const makeExtentionCall: (extentionType: any, callMethod: any, extentionAction: any, parameters: any) => Promise<Object>;
export declare const messageStatus: Readonly<{
    inprogress: "inprogress";
    success: "success";
    error: "error";
}>;
export declare const emailPattern: string;
export declare const urlPattern: string;
export declare const phoneNumPattern: string;
export declare const ID: () => string;
export declare const getUnixTimestamp: () => number;
export declare const formatBytes: (bytes: any, decimals?: number) => string;
