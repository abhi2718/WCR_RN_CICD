import React from 'react';
// @ts-ignore
import { Image, View } from 'react-native';
import { Styles } from './styles';
import { StatusIndicatorStyle } from './StatusIndicatorStyle';
export const CometChatStatusIndicator = (props) => {
    const { backgroundImage, backgroundColor } = props;
    const defaultStyleProps = new StatusIndicatorStyle({});
    const style = {
        ...defaultStyleProps,
        ...props.style,
        ...(backgroundColor ? { backgroundColor } : {}),
    };
    const getView = () => {
        if (backgroundImage) {
            let source;
            if (typeof backgroundImage === 'string')
                source = { uri: backgroundImage };
            else
                source = backgroundImage;
            return (<View style={[Styles.getStyle, style]}>
          <Image style={[
                    Styles.imageStyles,
                    {
                        height: style?.height,
                        width: style?.width,
                    },
                ]} source={source}/>
        </View>);
        }
        else
            return <View style={[Styles.getStyle, style]}/>;
    };
    return getView();
};
CometChatStatusIndicator.defaultProps = {
    backgroundImage: '',
    style: new StatusIndicatorStyle({}),
};
//# sourceMappingURL=CometChatStatusIndicator.js.map