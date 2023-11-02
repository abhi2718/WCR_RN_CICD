import {showMessage, MessageType} from 'react-native-flash-message';

export const ShowFlashMessage = (
  message: string,
  description: string,
  type: MessageType = 'info',
) =>
  showMessage({
    message: message,
    description: description,
    type: type,
    color: '#fff',
  });

export enum FlashMessageType {
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
  DEFAULT = 'default',
}
// "success" (green), "warning" (orange), "danger" (red), "info" (blue) and "default" (gray)
