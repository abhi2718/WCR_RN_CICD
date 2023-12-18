import React, { useContext } from 'react';
// @ts-ignore
import { Text, View } from 'react-native';
import { CometChatContext } from '../../CometChatContext';
import { BadgeStyle } from './BadgeStyle';
import styles from './styles';
export const CometChatBadge = (props) => {
    const { theme } = useContext(CometChatContext);
    const defaultStyleProps = new BadgeStyle({
        backgroundColor: theme?.palette.getPrimary(),
        textFont: theme.typography.caption2,
        textColor: theme.palette.getBackgroundColor(),
    });
    const { count } = props;
    const style = {
        ...defaultStyleProps,
        ...props.style,
        border: { ...defaultStyleProps.border, ...props.style?.border },
        textFont: { ...defaultStyleProps.textFont, ...props.style?.textFont },
    };
    if (count == 0)
        return null;
    return (<View style={[
            styles.badgeStyle,
            {
                backgroundColor: style.backgroundColor,
                borderRadius: style.borderRadius,
                width: style.width,
                height: style.height,
            },
            style.border,
        ]}>
      <Text style={[
            styles.textStyle,
            {
                color: style.textColor,
            },
            style.textFont,
        ]}>
        {count > 999 ? '999+' : count}
      </Text>
    </View>);
};
CometChatBadge.defaultProps = {
    count: 0,
    style: new BadgeStyle({}),
};
//# sourceMappingURL=CometChatBadge.js.map