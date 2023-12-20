import { StyleProp, ViewStyle } from 'react-native';
import { ImageType } from '../../base';
/**
 * @class StatusIndicatorConfiguration
 * @description StatusIndicatorConfiguration class is used for defining the StatusIndicator template.
 * @param {object} style
 * @param {string} backgroundImage
 */
export declare class StatusIndicatorConfiguration {
    style?: StyleProp<ViewStyle>;
    backgroundImage?: ImageType;
    constructor({ style, backgroundImage, }: StatusIndicatorConfigurationInterface);
}
export interface StatusIndicatorConfigurationInterface {
    style?: StyleProp<ViewStyle>;
    backgroundImage?: ImageType;
}
