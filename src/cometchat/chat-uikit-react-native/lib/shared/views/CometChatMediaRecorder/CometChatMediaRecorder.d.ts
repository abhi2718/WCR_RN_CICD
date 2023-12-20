import React from 'react';
import { ImageType } from "../..";
import { MediaRecorderStyle, MediaRecorderStyleInterface } from './MediaRecorderStyle';
export interface CometChatMediaRecorderInterface {
    onClose?: Function;
    onPlay?: Function;
    onPause?: Function;
    onStop?: Function;
    onSend?: Function;
    onStart?: Function;
    style?: MediaRecorderStyleInterface;
    mediaRecorderStyle?: MediaRecorderStyleInterface;
    pauseIconUrl?: ImageType;
    playIconUrl?: ImageType;
    recordIconUrl?: ImageType;
    deleteIconUrl?: ImageType;
    stopIconUrl?: ImageType;
    submitIconUrl?: ImageType;
}
export declare const CometChatMediaRecorder: {
    (props: CometChatMediaRecorderInterface): React.JSX.Element;
    defaultProps: {
        style: MediaRecorderStyle;
    };
};
