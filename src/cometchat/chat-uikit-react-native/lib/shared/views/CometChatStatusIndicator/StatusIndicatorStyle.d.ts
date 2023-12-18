import { BaseStyle, BorderStyle } from '../../base';
/**
 * @class StatusIndicatorStyle
 * @description style template for StatusIndicator
 * @param  {} height
 * @param  {} width
 * @param  {} border
 * @param  {} borderRadius
 * @param  {} backgroundColor
 */
export declare class StatusIndicatorStyle extends BaseStyle {
    constructor({ height, width, border, borderRadius, backgroundColor, }: StatusIndicatorStyleInterface);
}
export interface StatusIndicatorStyleInterface {
    height?: string | number;
    width?: string | number;
    border?: BorderStyle;
    borderRadius?: number;
    backgroundColor?: string;
}
