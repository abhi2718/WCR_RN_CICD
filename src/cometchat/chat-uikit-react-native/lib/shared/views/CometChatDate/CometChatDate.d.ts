import React from 'react';
import { DateStyle, DateStyleInterface } from './DateStyle';
/**
 * CometChatDate is a component useful for displaying date/time
 * This component displays the date/time based on pattern parameter.
 *
 * @Version 1.0.0
 * @author CometChat
 *
 */
export interface CometChatDateInterface {
    /**
     * Unix epoch time.
     */
    timeStamp: number;
    /**
     * Pattern for Date.
     * one of
     * 1. timeFormat: "hh:mm a".
     * 2. dayDateFormat: Today, Yesterday, week-day or "d MMM, yyyy".
     * 3. dayDateTimeFormat: Today, Yesterday, week-day or "dd/mm/yyyy".
     */
    pattern: 'timeFormat' | 'dayDateFormat' | 'dayDateTimeFormat';
    /**
     * A string for custom date reprasentation.
     */
    customDateString?: string;
    /**
     * object of DateStyle class.
     */
    style?: DateStyleInterface;
}
export declare const CometChatDate: {
    (props: CometChatDateInterface): React.JSX.Element;
    defaultProps: {
        timeStamp: number;
        pattern: string;
        customDateString: any;
        style: DateStyle;
    };
};
