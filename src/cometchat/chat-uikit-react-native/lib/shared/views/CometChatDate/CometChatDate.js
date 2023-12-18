import React, { useContext } from 'react';
//@ts-ignore
import { Text, View } from 'react-native';
import { Style } from './style';
import { DateStyle } from './DateStyle';
import { CometChatContext } from '../../CometChatContext';
const patterns = {
    timeFormat: 'timeFormat',
    dayDateFormat: 'dayDateFormat',
    dayDateTimeFormat: 'dayDateTimeFormat',
};
const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekNames = [
    'Sunday',
    'Monday',
    'Tuseday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
export const CometChatDate = (props) => {
    const { theme } = useContext(CometChatContext);
    const { timeStamp, pattern, customDateString } = props;
    const defaultStyleProps = new DateStyle({
        textFont: theme.typography.caption1,
        textColor: theme.palette.getAccent500(),
    });
    const style = {
        ...defaultStyleProps,
        ...props.style,
    };
    let date = new Date(timeStamp);
    const getWeekOfDay = () => {
        let weekDay = date.getDay();
        let week = weekNames[weekDay];
        return week.substring(0, 3);
    };
    const getMonthOfDay = () => {
        let month = date.getMonth();
        let mnth = monthNames[month];
        return mnth.substring(0, 3);
    };
    const getDateFormat = () => {
        if (pattern === patterns.dayDateFormat) {
            return date.getDate() + ' ' + getMonthOfDay() + ', ' + date.getFullYear();
        }
        let dt = date.getDate();
        if (dt < 10) {
            dt = '0' + dt;
        }
        return dt + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    };
    const getTimeFormat = () => {
        let timeString = date.getHours();
        let postString = 'AM';
        if (timeString >= 12) {
            postString = 'PM';
            timeString = timeString - 12;
        }
        let minutes = date.getMinutes();
        if (minutes < 10)
            minutes = '0' + minutes;
        return timeString + ':' + minutes + ' ' + postString;
    };
    const getDate = () => {
        const today = new Date();
        if (today.getMonth() === date.getMonth() &&
            today.getFullYear() === date.getFullYear()) {
            let diff = today.getDate() - date.getDate();
            if (diff === 0) {
                if (pattern === patterns.dayDateTimeFormat) {
                    return getTimeFormat();
                }
                return 'Today';
            }
            else if (diff === 1) {
                return 'Yesterday';
            }
            else if (diff < 7) {
                return getWeekOfDay();
            }
            else {
                return getDateFormat();
            }
        }
        else {
            return getDateFormat();
        }
    };
    const getFormattedDate = () => {
        if (pattern && pattern != null) {
            let formattedDate = '';
            switch (pattern) {
                case patterns.timeFormat:
                    formattedDate = getTimeFormat();
                    break;
                case patterns.dayDateFormat:
                case patterns.dayDateTimeFormat:
                    formattedDate = getDate();
                    break;
                default:
                    break;
            }
            return formattedDate;
        }
        return null;
    };
    return (<View style={[
            {
                borderRadius: style.borderRadius,
                backgroundColor: style.backgroundColor,
            },
            style.border,
        ]}>
      <Text style={[Style.textStyle, style.textFont, { color: style.textColor }]}>
        {customDateString ? customDateString : getFormattedDate()}
      </Text>
    </View>);
};
CometChatDate.defaultProps = {
    timeStamp: 0,
    pattern: patterns.timeFormat,
    customDateString: null,
    style: new DateStyle({}),
};
//# sourceMappingURL=CometChatDate.js.map