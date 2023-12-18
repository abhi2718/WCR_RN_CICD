import { CollaborativeBubbleStyleInterface } from '../CollaborativeBubble/CollaborativeBubbleStyle';
export interface CollaborativeWhiteboardConfigurationInterface {
    /**
  *
  *
  * @type {TextBubbleStyleInterface}
  * @description gives textbub bubble styling properties
  */
    collaborativeBubbleStyle?: CollaborativeBubbleStyleInterface;
}
export declare class CollaborativeWhiteboardConfiguration implements CollaborativeWhiteboardConfigurationInterface {
    collaborativeBubbleStyle: CollaborativeBubbleStyleInterface;
    constructor({ collaborativeBubbleStyle, }: CollaborativeWhiteboardConfigurationInterface);
}
