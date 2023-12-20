import { TextBubbleStyleInterface } from '../../shared';
export interface TextModerationConfigurationInterface {
    /**
  *
  *
  * @type {TextBubbleStyleInterface}
  * @description gives textbub bubble styling properties
  */
    textBubbleStyle?: TextBubbleStyleInterface;
}
export declare class TextModerationConfiguration implements TextModerationConfigurationInterface {
    textBubbleStyle: TextBubbleStyleInterface;
    constructor({ textBubbleStyle, }: TextModerationConfigurationInterface);
}
