/**
 * @class CometChatEmoji
 * @description CometChatEmoji class is used for defining the emoji.
 *
 * @param {String} char
 * @param {Array} keywords
 */
declare class CometChatEmoji {
    char: string;
    keywords: any[];
    constructor({ char, keywords }: {
        char: any;
        keywords: any;
    });
}
export { CometChatEmoji };
