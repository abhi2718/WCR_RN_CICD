import React from 'react';
import { ImageType } from '../../shared';
interface HeaderInterface {
    title: string;
    titleStyle: any;
    closeIconTint: string;
    createIconTint: string;
    joinIcon: ImageType;
    closeIcon: ImageType;
    onCancel: () => void;
    onSubmit: () => void;
}
declare const Header: (props: HeaderInterface) => React.JSX.Element;
export default Header;
