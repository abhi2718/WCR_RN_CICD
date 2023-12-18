import { AvatarStyleInterface } from './AvatarStyle';
/**
 * @class AvatarConfiguration
 * @description AvatarConfiguration class is used for defining the Avatar template.
 */
export declare class AvatarConfiguration {
    style?: AvatarStyleInterface;
    resizeMode?: string;
    /**
     * @param {Object} param0
     * @field style - Object of AvatarStyle class
     * @field resizeMode - resize mode for image
     */
    constructor({ style, resizeMode, }: AvatarConfigurationInterface);
}
export interface AvatarConfigurationInterface {
    style?: AvatarStyleInterface;
    resizeMode?: string;
}
