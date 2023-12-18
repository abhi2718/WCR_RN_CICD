import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatContext, CometChatDate, CometChatListItem, localize } from '../shared';
import { MessageUtils } from '../shared/utils/MessageUtils';
import { Style } from "./styles";
import { ICONS } from "../shared/assets/images";
import { LoadingIcon } from './resources';
const listenerId = "uiEvents_" + new Date().getTime();
export const CometChatMessageInformation = (props) => {
    const { title = localize('INFORMATION'), message, template, backIcon = ICONS.BACK, BubbleView, ListItemView, receiptDatePattern, onBack, onError, messageInformationStyle, readIcon = ICONS.BLUE_DOUBLE_TICK, sentIcon = ICONS.GREY_TICK, deliveredIcon = ICONS.GREY_DOUBLE_TICK, listItemStyle, avatarStyle, statusIndicatorStyle, EmptyStateView, emptyStateText, ErrorStateView, errorStateText, loadingIcon, LoadingStateView, } = props;
    const { theme } = useContext(CometChatContext);
    const [recipients, setRecipients] = useState([]);
    const [listState, setListState] = useState("loading");
    const { height, width, backgroundColor, border, borderRadius, deliveredIconTint = theme.palette.getAccent600(), dividerTint, readIconTint = theme.palette.getPrimary(), sendIconTint = theme.palette.getAccent600(), subtitleTextColor, subtitleTextFont, titleTextColor = theme.palette.getAccent(), titleTextFont = theme.typography.heading, } = messageInformationStyle || {};
    const receipt = (receipt, status, time) => {
        if (ListItemView) {
            return ListItemView(message, receipt);
        }
        return <View style={{ flexDirection: 'row' }}>
            <Image source={receipt == 'SENT' ? sentIcon :
                receipt == "DELIVERED" ? deliveredIcon :
                    receipt == 'READ' ? readIcon : undefined} style={{
                tintColor: receipt == 'SENT' ? sendIconTint :
                    receipt == "DELIVERED" ? deliveredIconTint :
                        receipt == 'READ' ? readIconTint : undefined
            }}/>
            <View style={{ flex: 1 }}>
                <Text style={[
                { color: subtitleTextColor || theme.palette.getAccent600() },
                subtitleTextFont
            ]}>{status}</Text>
            </View>
            {receiptDatePattern ?
                receiptDatePattern(time) :
                <CometChatDate style={{ textColor: theme.palette.getAccent600() }} customDateString={new Date(time * 1000).toLocaleString()} timeStamp={time}/>}
        </View>;
    };
    const receiptsList = (item) => {
        return <View>
            {item['sentAt'] && receipt("SENT", localize("SENT"), item['sentAt'])}
            {item['deliveredAt'] && receipt("DELIVERED", localize("DELIVERED"), item['deliveredAt'])}
            {item['readAt'] && receipt("READ", localize("READ"), item['readAt'])}
        </View>;
    };
    const renderReceipients = ({ item, index }) => {
        const { sender } = item;
        return <CometChatListItem id={sender['uid']} avatarName={sender['name']} avatarURL={sender['avatar']} SubtitleView={() => receiptsList(item)} title={sender['name']} statusIndicatorColor={sender['status'] == "online" ? theme.palette.getSuccess() : 'transparent'} listItemStyle={{
                titleColor: theme.palette.getAccent(),
                titleFont: theme.typography.title2,
                ...listItemStyle
            }} avatarStyle={avatarStyle} statusIndicatorStyle={statusIndicatorStyle}/>;
    };
    const isGroup = () => {
        return message.getReceiverType() == "group";
    };
    const populateRecipients = () => {
        if (isGroup()) {
            setListState("loading");
            CometChat.getMessageReceipts(message.getId())
                .then(receiptsList => {
                setRecipients(receiptsList);
                setListState("done");
            })
                .catch(er => {
                console.log("Unable to get message receipts", er);
                onError && onError(er);
                setListState("error");
            });
        }
        else {
            updateMessageReceipt(message);
        }
    };
    const updateMessageReceipt = (newReceipt) => {
        if (message.getId() == newReceipt['id']) {
            setRecipients([{
                    sender: isGroup() ? newReceipt['sender'] : newReceipt['receiver'],
                    sentAt: newReceipt['sentAt'],
                    readAt: newReceipt['readAt'],
                    deliveredAt: newReceipt['deliveredAt']
                }]);
        }
    };
    useEffect(() => {
        //add listener for message delivery
        CometChat.addMessageListener(listenerId, new CometChat.MessageListener({
            onMessagesDelivered: (messageReceipt) => {
                updateMessageReceipt(messageReceipt);
            },
            onMessagesRead: (messageReceipt) => {
                updateMessageReceipt(messageReceipt);
            },
        }));
    }, []);
    useEffect(() => {
        populateRecipients();
    }, [message]);
    const LoadingView = () => {
        if (LoadingStateView)
            return <LoadingStateView />;
        return <View style={[Style.viewContainer]}>
          <Image source={loadingIcon || LoadingIcon} style={[Style.imageStyle, { tintColor: "black" }]}/>
        </View>;
    };
    const ErrorView = () => {
        if (ErrorStateView)
            return <ErrorStateView />;
        return <View style={[Style.viewContainer]}>
        <Text>{errorStateText || localize("SOMETHING_WRONG")}</Text>
      </View>;
    };
    const EmptyView = () => {
        if (EmptyStateView)
            return <EmptyStateView />;
        return (<View style={[Style.viewContainer]}>
          <Text>{emptyStateText || localize("No_RECIPIENT")}</Text>
        </View>);
    };
    return (<View style={[
            {
                minHeight: height || Dimensions.get('window').height,
                width: width,
                backgroundColor,
                borderRadius,
            },
            Style.container,
            border
        ]}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={onBack}>
                    <Image source={backIcon} style={{
            height: 24,
            width: 24,
            tintColor: theme.palette.getPrimary()
        }}/>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={{ color: titleTextColor, ...titleTextFont }}>{title}</Text>
                </View>
            </View>

            <View>
                <Text style={{ color: dividerTint || theme.palette.getAccent500(), ...theme.typography.text1 }}>{localize("MESSAGE")}</Text>
            </View>
            <View style={[Style.divider, { backgroundColor: dividerTint || theme.palette.getAccent200() }]}/>
            <View style={Style.msgBubbleContainer}>
                <ScrollView>
                    {BubbleView ?
            BubbleView(message) :
            MessageUtils.getMessageView({
                message,
                template,
                alignment: "right",
                theme
            })} 
                    </ScrollView>
            </View>
            <View style={[Style.divider, { backgroundColor: dividerTint || theme.palette.getAccent200() }]}/>
            <View>
                <Text style={{ color: dividerTint || theme.palette.getAccent500(), ...theme.typography.text1 }}>{localize("RECEIPT_INFORMATION")}</Text>
            </View>
            <View style={[Style.divider, { backgroundColor: dividerTint || theme.palette.getAccent200() }]}/>
            {listState == "loading" && recipients.length == 0 ?
            <LoadingView /> :
            listState == "error" && recipients.length == 0 ?
                <ErrorView /> :
                recipients.length == 0 ?
                    <EmptyView /> :
                    <FlatList style={{ flex: 1, backgroundColor: 'transparent' }} data={recipients} renderItem={renderReceipients}/>}
        </View>);
};
//# sourceMappingURL=CometChatMessageInformation.js.map