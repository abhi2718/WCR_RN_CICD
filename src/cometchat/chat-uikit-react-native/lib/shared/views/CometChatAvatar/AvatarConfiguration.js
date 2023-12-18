import { AvatarStyle } from './AvatarStyle';
/**
 * @class AvatarConfiguration
 * @description AvatarConfiguration class is used for defining the Avatar template.
 */
export class AvatarConfiguration {
    style;
    resizeMode;
    /**
     * @param {Object} param0
     * @field style - Object of AvatarStyle class
     * @field resizeMode - resize mode for image
     */
    constructor({ style = new AvatarStyle({}), resizeMode = 'cover', }) {
        this.style = style;
        this.resizeMode = resizeMode;
    }
}
//# sourceMappingURL=AvatarConfiguration.js.map