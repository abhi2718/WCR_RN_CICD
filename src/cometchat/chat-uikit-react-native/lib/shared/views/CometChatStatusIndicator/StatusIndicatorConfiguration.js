import { StatusIndicatorStyle } from './StatusIndicatorStyle';
/**
 * @class StatusIndicatorConfiguration
 * @description StatusIndicatorConfiguration class is used for defining the StatusIndicator template.
 * @param {object} style
 * @param {string} backgroundImage
 */
export class StatusIndicatorConfiguration {
    style;
    backgroundImage;
    constructor({ style = new StatusIndicatorStyle({}), backgroundImage, }) {
        this.style = style;
        this.backgroundImage = backgroundImage;
    }
}
//# sourceMappingURL=StatusIndicatorConfiguration.js.map