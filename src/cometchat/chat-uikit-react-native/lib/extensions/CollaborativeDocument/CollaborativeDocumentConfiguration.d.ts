import { CollaborativeBubbleStyleInterface } from '../CollaborativeBubble/CollaborativeBubbleStyle';
export interface CollaborativeDocumentConfigurationInterface {
    /**
  *
  *
  * @type {TextBubbleStyleInterface}
  * @description gives textbub bubble styling properties
  */
    collaborativeBubbleStyle?: CollaborativeBubbleStyleInterface;
}
export declare class CollaborativeDocumentConfiguration implements CollaborativeDocumentConfigurationInterface {
    collaborativeBubbleStyle: CollaborativeBubbleStyleInterface;
    constructor({ collaborativeBubbleStyle, }: CollaborativeDocumentConfigurationInterface);
}
