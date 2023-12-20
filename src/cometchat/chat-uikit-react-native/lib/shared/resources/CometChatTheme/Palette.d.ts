declare const modes: {
    light: string;
    dark: string;
};
/**
 * @class PaletteItem
 * @param {String} light
 * @param {String} dark
 */
declare class PaletteItem {
    light: string;
    dark: string;
    constructor({ light, dark }: {
        light?: string;
        dark?: string;
    });
}
/**
 *
 * Palette is a class containing default color styles with diffrent slectors.
 * This class returns JSON objects of color styles
 * This class also contains the setter methods for these styles.
 *
 * @version 1.0.0
 * @author CometChat
 *
 * @class Palette
 * @param {String} mode
 * @param {Object} backgroundColor
 * @param {Object} primary
 * @param {Object} secondary
 * @param {Object} error
 * @param {Object} success
 * @param {Object} accent
 * @param {Object} accent50
 * @param {Object} accent100
 * @param {Object} accent200
 * @param {Object} accent300
 * @param {Object} accent400
 * @param {Object} accent500
 * @param {Object} accent600
 * @param {Object} accent700
 * @param {Object} accent800
 * @param {Object} accent900
 */
declare class Palette {
    mode: string;
    backgroundColor: PaletteItem;
    primary: PaletteItem;
    secondary: PaletteItem;
    error: PaletteItem;
    success: PaletteItem;
    accent: PaletteItem;
    accent50: PaletteItem;
    accent100: PaletteItem;
    accent200: PaletteItem;
    accent300: PaletteItem;
    accent400: PaletteItem;
    accent500: PaletteItem;
    accent600: PaletteItem;
    accent700: PaletteItem;
    accent800: PaletteItem;
    accent900: PaletteItem;
    constructor({ mode, backgroundColor, primary, secondary, error, success, accent, accent50, accent100, accent200, accent300, accent400, accent500, accent600, accent700, accent800, accent900, }: {
        mode?: string;
        backgroundColor?: PaletteItem;
        primary?: PaletteItem;
        secondary?: PaletteItem;
        error?: PaletteItem;
        success?: PaletteItem;
        accent?: PaletteItem;
        accent50?: PaletteItem;
        accent100?: PaletteItem;
        accent200?: PaletteItem;
        accent300?: PaletteItem;
        accent400?: PaletteItem;
        accent500?: PaletteItem;
        accent600?: PaletteItem;
        accent700?: PaletteItem;
        accent800?: PaletteItem;
        accent900?: PaletteItem;
    });
    /**
     * Getters
     */
    getAccent: () => any;
    getAccent50: () => any;
    getAccent100: () => any;
    getAccent200: () => any;
    getAccent300: () => any;
    getAccent400: () => any;
    getAccent500: () => any;
    getAccent600: () => any;
    getAccent700: () => any;
    getAccent800: () => any;
    getAccent900: () => any;
    getSuccess: () => any;
    getError: () => any;
    getPrimary: () => any;
    getSecondary: () => any;
    getBackgroundColor: () => any;
    setMode(mode: any): void;
    setBackground(colorset: any): void;
    setPrimary(colorset: any): void;
    setError(colorset: any): void;
    setAccent(colorset: any): void;
    setAccent50(colorset: any): void;
    setAccent100(colorset: any): void;
    setAccent200(colorset: any): void;
    setAccent300(colorset: any): void;
    setAccent400(colorset: any): void;
    setAccent500(colorset: any): void;
    setAccent600(colorset: any): void;
    setAccent700(colorset: any): void;
    setAccent800(colorset: any): void;
    setAccent900(colorset: any): void;
}
export { modes, Palette };
