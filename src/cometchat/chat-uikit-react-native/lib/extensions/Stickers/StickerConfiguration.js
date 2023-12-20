import { StickerStyle } from './StickerStyle';
export class StickerConfiguration {
    style;
    constructor({ style }) {
        this.style = new StickerStyle({
            height: 100,
            width: 100,
            ...style,
        });
    }
}
//# sourceMappingURL=StickerConfiguration.js.map