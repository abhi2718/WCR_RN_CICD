import { StickerStyleInterface } from './StickerStyle';
export interface StickerConfigurationInterface {
    style?: StickerStyleInterface;
}
export declare class StickerConfiguration implements StickerConfigurationInterface {
    style?: StickerStyleInterface;
    constructor({ style }: StickerConfigurationInterface);
}
