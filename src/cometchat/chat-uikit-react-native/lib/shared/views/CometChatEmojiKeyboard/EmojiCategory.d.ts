/**
 * @class CometChatEmojiCategory
 * @description CometChatEmojiCategory class is used for defining the category.
 * @param {String} id
 * @param {String} name
 * @param {String} symbol
 * @param {Object} emojis
 */
declare class CometChatEmojiCategory {
    id: string;
    name: string;
    symbol: string;
    emojis: {};
    constructor({ id, name, emojis, symbol }: {
        id: any;
        name: any;
        emojis: any;
        symbol: any;
    });
}
export { CometChatEmojiCategory };
