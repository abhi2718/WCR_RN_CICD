import { GestureResponderEvent, TextStyle } from 'react-native';
import React from 'react';
import { ImageType } from '../shared';
declare const Header: (props: {
    title: string;
    showCloseButton?: boolean;
    closeButtonIcon?: ImageType;
    onPress: (event: GestureResponderEvent) => void;
    titleStyle?: TextStyle;
    closeIconTint?: string;
}) => React.JSX.Element;
export default Header;
