import React from 'react';
import { ImageType } from '../../base';
/**
 *
 * CometChatReceipt is a component used to display the status of a message by a custom symbol.
 * This component returns the appropriate symbol depending upon the message status and can be customised.
 *
 * @version 1.0.0
 * @author CometChat
 *
 */
export interface CometChatReceiptInterface {
    waitIcon?: ImageType;
    sentIcon?: ImageType;
    deliveredIcon?: ImageType;
    readIcon?: ImageType;
    errorIcon?: ImageType;
    receipt?: 'SENT' | 'DELIVERED' | 'READ' | 'ERROR' | 'WAIT';
}
export declare const CometChatReceipt: {
    (props: CometChatReceiptInterface): React.JSX.Element;
    defaultProps: {
        waitIcon: any;
        sentIcon: any;
        deliveredIcon: any;
        readIcon: any;
        errorIcon: any;
        receipt: any;
    };
};
