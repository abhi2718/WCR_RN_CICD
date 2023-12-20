import { ImageType } from '../../base';
/**
 * @class ReceiptConfiguration
 * @description ReceiptConfiguration class is used for defining the MessageReceipt template.
 */
export declare class ReceiptConfiguration {
    waitIcon?: ImageType;
    sentIcon?: ImageType;
    readIcon?: ImageType;
    deliveredIcon?: ImageType;
    errorIcon?: ImageType;
    /**
       *
       * @param {Object} param0
       * @field {any} waitIcon - icon for Wait
       * @field {any} sentIcon - icon for Sent
       * @field {any} readIcon - icon for Read
       * @field {any} deliveredIcon - icon for Delivered
       * @field {any} errorIcon - icon for Error
  
       */
    constructor({ waitIcon, sentIcon, readIcon, deliveredIcon, errorIcon, }: ReceiptConfigurationInterface);
}
export interface ReceiptConfigurationInterface {
    waitIcon?: ImageType;
    sentIcon?: ImageType;
    readIcon?: ImageType;
    deliveredIcon?: ImageType;
    errorIcon?: ImageType;
}
