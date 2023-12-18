import React from 'react';
//@ts-ignore
import { Image } from 'react-native';
import { ICONS } from './resources';
import styles from './style';
export const CometChatReceipt = (props) => {
    const { waitIcon, sentIcon, deliveredIcon, readIcon, errorIcon, receipt } = props;
    let icon = null;
    let imageSource = null;
    switch (receipt) {
        case 'SENT':
            icon = sentIcon;
            break;
        case 'DELIVERED':
            icon = deliveredIcon;
            break;
        case 'READ':
            icon = readIcon;
            break;
        case 'ERROR':
            icon = errorIcon;
            break;
        case 'WAIT':
            icon = waitIcon;
            break;
        default:
            break;
    }
    if (icon) {
        if (typeof icon === 'string') {
            imageSource = { uri: icon };
        }
        else if (typeof icon === 'number') {
            imageSource = icon;
        }
        return <Image source={imageSource} style={styles.tickImageStyle}/>;
    }
    return null;
};
CometChatReceipt.defaultProps = {
    waitIcon: ICONS.WAITING,
    sentIcon: ICONS.GREY_TICK,
    deliveredIcon: ICONS.GREY_DOUBLE_TICK,
    readIcon: ICONS.BLUE_DOUBLE_TICK,
    errorIcon: ICONS.ERROR_TICK,
    receipt: null,
};
//# sourceMappingURL=CometChatReceipt.js.map