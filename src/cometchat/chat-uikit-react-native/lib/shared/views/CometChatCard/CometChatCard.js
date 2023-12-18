import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { CometChatCardStyle } from './CometChatCardStyle';
import { CometChatContext } from '../../CometChatContext';
import { CometChatAvatar } from '../CometChatAvatar';
import { Style } from './style';
export const CometChatCard = (props) => {
    const { BottomView, SubtitleView, avatarName, avatarUrl, id, style, title, avatarStyle } = props;
    const { theme } = useContext(CometChatContext);
    const { backgroundColor, border, borderRadius, height, titleColor, titleFont, width, } = new CometChatCardStyle({
        backgroundColor: theme.palette.getBackgroundColor(),
        titleColor: theme.palette.getAccent(),
        titleFont: theme.typography.heading,
        ...style
    });
    return (<View key={id} style={[
            Style.container,
            { height, width, backgroundColor, borderRadius, paddingBottom: 32 },
            border
        ]}>
      <View style={{ alignItems: "center" }}>
        <Text style={[{ color: titleColor, marginBottom: 8 }, titleFont]}>{title}</Text>
        {SubtitleView && <SubtitleView />}
      </View>
      <CometChatAvatar image={avatarUrl} name={avatarName} style={{
            height: 300,
            width: 300,
            borderRadius: 150,
            nameTextFont: { fontSize: 48 },
            ...avatarStyle
        }}/>
      {BottomView && <BottomView />}
    </View>);
};
//# sourceMappingURL=CometChatCard.js.map