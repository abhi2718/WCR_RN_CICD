export interface OngoingCallStyleInterface {
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
}
export declare class OngoingCallStyle implements OngoingCallStyleInterface {
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    constructor({ minWidth, minHeight, maxWidth, maxHeight, }: OngoingCallStyleInterface);
}
