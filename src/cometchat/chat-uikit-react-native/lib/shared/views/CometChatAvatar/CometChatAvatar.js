import React, { useContext } from 'react';
// @ts-ignore
import { View, Image, Text } from 'react-native';
import { ICONS } from './resources';
import { AvatarStyle } from './AvatarStyle';
import { Styles } from './styles';
import { CometChatContext } from '../../CometChatContext';
export const CometChatAvatar = (props) => {
    const { theme } = useContext(CometChatContext);
    const defaultStyleProps = new AvatarStyle({
        backgroundColor: theme.palette.getAccent400(),
        nameTextColor: theme.palette.getAccent800(),
        nameTextFont: theme.typography.body,
    });
    const { image, name } = props;
    const style = {
        ...defaultStyleProps,
        ...props.style,
        border: { ...defaultStyleProps.border, ...props.style?.border },
        nameTextFont: {
            ...defaultStyleProps.nameTextFont,
            ...props.style?.nameTextFont,
        },
        outerView: { ...defaultStyleProps.outerView, ...props.style?.outerView },
    };
    const getImageView = () => {
        if (!image && name) {
            return (<Text style={[
                    Styles.textStyle,
                    {
                        borderRadius: style.borderRadius,
                        color: style.nameTextColor,
                    },
                    style.nameTextFont ?? {},
                ]}>
          {name.length >= 2 ? name.substring(0, 2).toUpperCase() : name}
        </Text>);
        }
        else {
            let imageSource;
            if (image) {
                if (typeof image === 'string')
                    if (image?.length > 0)
                        imageSource = { uri: image };
                    else
                        imageSource = ICONS.DEFAULT;
                else
                    imageSource = image;
            }
            return (<Image source={imageSource} style={[
                    Styles.avatarStyle,
                    {
                        borderRadius: style.borderRadius,
                        backgroundColor: style.backgroundColor,
                        borderWidth: style.border?.borderWidth,
                    },
                ]}/>);
        }
    };
    return (<View style={[
            Styles.containerStyle,
            {
                height: style.height,
                width: style.width,
                backgroundColor: style.backgroundColor,
                borderRadius: style.borderRadius,
            },
            style.border ?? {},
        ]}>
      <View style={[
            Styles.outerViewStyle,
            {
                height: style.height,
                width: style.width,
                borderRadius: style.borderRadius,
                margin: style.outerViewSpacing,
            },
            style.outerView ?? {},
        ]}/>
      {getImageView()}
    </View>);
};
CometChatAvatar.defaultProps = {
    image: '',
    name: '',
    style: new AvatarStyle({}),
};
//# sourceMappingURL=CometChatAvatar.js.map