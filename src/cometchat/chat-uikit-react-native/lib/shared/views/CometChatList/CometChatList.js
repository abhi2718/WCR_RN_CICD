import React, { useContext, useEffect, useImperativeHandle, useState, } from 'react';
import { View, Text, FlatList, Image,
//@ts-ignore
 } from 'react-native';
import { CometChatContext } from '../../CometChatContext';
import { localize } from "../../resources/CometChatLocalize";
import { LOADING, NO_DATA_FOUND, SOMETHING_WRONG, } from '../../constants/UIKitConstants';
import { ICONS } from './resources';
import styles from './styles';
import { CometChatListItem } from "../../views/CometChatListItem";
import Header from './Header';
import { CometChat } from '@cometchat/chat-sdk-react-native';
let lastCall;
let lastReject;
/**
 * @class Users is a component useful for displaying the header and users in a list
 * @description This component displays a header and list of users with subtitle,avatar,status
 * @Version 1.0.0
 * @author CometChat
 *
 */
export const CometChatList = React.forwardRef((props, ref) => {
    const connectionListenerId = 'connectionListener_' + new Date().getTime();
    const { theme } = useContext(CometChatContext);
    const { SubtitleView, TailView, disableUsersPresence, ListItemView, AppBarOptions, options, hideSeparator, searchPlaceholderText, backButtonIcon, showBackButton, selectionMode, onSelection, searchBoxIcon, hideSearch, title, EmptyStateView, emptyStateText, errorStateText, ErrorStateView, LoadingStateView, requestBuilder, searchRequestBuilder, hideError, onItemPress, onItemLongPress, onError, onBack, selectionIcon, listItemKey, statusIndicatorStyle, avatarStyle, listItemStyle, headViewContainerStyle, bodyViewContainerStyle, tailViewContainerStyle, listStyle, hideSubmitIcon, } = props;
    // functions which can be access by parents
    useImperativeHandle(ref, () => {
        return {
            updateList,
            addItemToList,
            removeItemFromList,
            getListItem,
            updateAndMoveToFirst,
            getSelectedItems,
        };
    });
    const [searchInput, setSearchInput] = React.useState(requestBuilder && searchRequestBuilder
        ? searchRequestBuilder.searchKeyword
            ? searchRequestBuilder.searchKeyword
            : ''
        : requestBuilder
            ? requestBuilder.searchKeyword
                ? requestBuilder.searchKeyword
                : ''
            : searchRequestBuilder
                ? searchRequestBuilder.searchKeyword
                    ? searchRequestBuilder.searchKeyword
                    : ''
                : '');
    const [shouldSelect, setShouldSelect] = React.useState(selectionMode !== 'none' ? true : false);
    const [selectedItems, setSelectedItems] = useState({});
    const listHandlerRef = React.useRef(null);
    const initialRunRef = React.useRef(true);
    const [list, setList] = React.useState([]);
    const [decoratorMessage, setDecoratorMessage] = React.useState(LOADING);
    const searchHandler = (searchText) => {
        setSearchInput(searchText);
        if (searchRequestBuilder) {
            listHandlerRef.current = searchRequestBuilder
                .setSearchKeyword(searchText ? searchText : '')
                .build();
        }
        else if (requestBuilder) {
            listHandlerRef.current = requestBuilder
                .setSearchKeyword(searchText ? searchText : '')
                .build();
        }
        getSearch();
    };
    const getSearch = () => {
        getList(listHandlerRef.current)
            .then((newlist) => {
            setDecoratorMessage(NO_DATA_FOUND);
            setList(newlist);
        })
            .catch((error) => {
            if (error && error['message'] == 'Promise cancelled') {
            }
            else {
                setDecoratorMessage(SOMETHING_WRONG);
                errorHandler(error);
            }
        });
    };
    const getSelectedItems = () => {
        let markedItems = [];
        Object.keys(selectedItems).forEach(item => {
            return markedItems.push(getListItem(item));
        });
        return markedItems;
    };
    useEffect(() => {
        CometChat.addConnectionListener(connectionListenerId, new CometChat.ConnectionListener({
            onConnected: () => {
                console.log("ConnectionListener => On Connected");
                listHandlerRef.current = requestBuilder.build();
                getList(listHandlerRef.current)
                    .then((newlist) => {
                    setDecoratorMessage(NO_DATA_FOUND);
                    setList(newlist);
                })
                    .catch((error) => {
                    if (error && error['message'] == 'Promise cancelled') {
                    }
                    else {
                        setDecoratorMessage(SOMETHING_WRONG);
                        errorHandler(error);
                    }
                });
            },
            inConnecting: () => {
                console.log("ConnectionListener => In connecting");
            },
            onDisconnected: () => {
                console.log("ConnectionListener => On Disconnected");
            }
        }));
        return () => {
            CometChat.removeConnectionListener(connectionListenerId);
        };
    });
    useEffect(() => {
        if (initialRunRef.current === true) {
            if (searchRequestBuilder) {
                if (searchInput)
                    listHandlerRef.current = searchRequestBuilder
                        .setSearchKeyword(searchInput)
                        .build();
                else
                    listHandlerRef.current = searchRequestBuilder.build();
            }
            else if (requestBuilder) {
                if (searchInput)
                    listHandlerRef.current = requestBuilder
                        .setSearchKeyword(searchInput)
                        .build();
                else
                    listHandlerRef.current = requestBuilder.build();
            }
            initialRunRef.current = false;
            handleList(false);
        }
    }, []);
    useEffect(() => {
        setShouldSelect(selectionMode !== 'none' ? true : false);
    }, [selectionMode]);
    /**
     * Updates the list of users to be displayed
     * @param
     */
    const updateList = (item) => {
        let newList = [...list];
        let itemKey = newList.findIndex((u) => u[listItemKey] === item[listItemKey]);
        if (itemKey > -1) {
            newList.splice(itemKey, 1, item);
            if (newList?.length === 0)
                setDecoratorMessage(NO_DATA_FOUND);
            setList(newList);
        }
    };
    /**
     * This will move item to first location if item doesn't exits then add it to first location.
     * @param item
     */
    const updateAndMoveToFirst = (item) => {
        let newList = [...list];
        let itemKey = newList.findIndex((u) => u[listItemKey] === item[listItemKey]);
        if (itemKey > -1) {
            newList.splice(itemKey, 1);
        }
        setList([item, ...newList]);
    };
    const addItemToList = (item, position) => {
        setList((prev) => {
            if (position != undefined) {
                if (position == 0)
                    return [item, ...prev];
                if (position >= prev.length)
                    return [...prev, item];
                else
                    return [...prev.slice(0, position - 1), item, prev.slice(position)];
            }
            return [...prev, item];
        });
    };
    const removeItemFromList = (uid) => {
        setList((prev) => {
            let newList = prev.filter((item) => item[listItemKey] !== uid);
            if (newList?.length === 0)
                setDecoratorMessage(NO_DATA_FOUND);
            return newList;
        });
        if (ListItemView == undefined && shouldSelect) {
            let newSelectedItems = { ...selectedItems };
            if (Object.keys(selectedItems).includes(uid.toString())) {
                delete newSelectedItems[uid];
                setSelectedItems(newSelectedItems);
            }
        }
    };
    const getListItem = (itemId) => {
        return list.find((item) => item[listItemKey] == itemId);
    };
    /**
     * update list
     * @param {boolean} thrughKeyword - pass true if wants to set only new users.
     */
    const handleList = (thrughKeyword) => {
        getList(listHandlerRef.current)
            .then((newlist) => {
            if ((thrughKeyword || list.length === 0) && newlist.length === 0) {
                setDecoratorMessage(NO_DATA_FOUND);
            }
            else {
                setDecoratorMessage('');
            }
            if (thrughKeyword && thrughKeyword === true) {
                setList(newlist);
            }
            else {
                setList([].concat(list, newlist));
            }
        })
            .catch((error) => {
            if (error && error['message'] == 'Promise cancelled') {
            }
            else {
                setDecoratorMessage(SOMETHING_WRONG);
                errorHandler(error);
            }
        });
    };
    /**
     * Handle on end reached of the list
     */
    const endReached = (prop) => {
        handleList(false);
    };
    const errorHandler = (errorCode) => {
        onError && onError(errorCode);
        // CometChatUserEvents.emit(CometChatUserEvents.onUserError, errorCode);
    };
    const handleSelection = (listItem) => {
        if (!shouldSelect || selectionMode === 'none')
            return;
        setShouldSelect(true);
        setSelectedItems(() => {
            return { [listItem.value.uid || listItem.value.guid]: true };
        });
    };
    const onSelectionHandler = () => {
        onSelection(Object.values(selectedItems));
        setShouldSelect(false);
        setSelectedItems({});
    };
    const onListItemPress = (item) => {
        if (shouldSelect) {
            if (selectionMode === 'multiple')
                setSelectedItems((prev) => {
                    let newState = { ...prev };
                    if (Object.keys(prev).includes(item.value[listItemKey])) {
                        delete newState[item.value[listItemKey]];
                        return newState;
                    }
                    else {
                        newState[item.value[listItemKey]] = item.value;
                        return newState;
                    }
                });
            else if (selectionMode === 'single')
                setSelectedItems({ [item.value[listItemKey]]: item.value });
        }
        onItemPress(item.value);
        // CometChatUserEvents.emit(CometChatUserEvents.onUserItemClick, item);
    };
    const onListItemLongPress = (item) => {
        handleSelection(item);
        onItemLongPress(item.value);
        // CometChatUserEvents.emit(CometChatUserEvents.onUserItemClick, item);
    };
    const renderListItemView = ({ item, index }) => {
        if (item.header) {
            const headerLetter = item.value;
            return (<View key={index}>
          <View style={[
                    styles.dividerStyle,
                    {
                        backgroundColor: listStyle?.separatorColor ?? theme.palette.getAccent100(),
                    },
                ]}></View>
          <Text style={[
                    styles.headerLetterStyle,
                    {
                        color: listStyle.sectionHeaderTextColor ??
                            theme.palette.getAccent500(),
                    },
                    listStyle.sectionHeaderTextFont ?? theme.typography.text2,
                ]}>
            {headerLetter}
          </Text>
        </View>);
        }
        return (<CometChatListItem id={item.value[listItemKey]} avatarName={item.value.name} title={item.value.name} listItemStyle={listItemStyle ? listItemStyle : { height: 55 }} headViewContainerStyle={headViewContainerStyle
                ? headViewContainerStyle
                : { marginHorizontal: 9 }} bodyViewContainerStyle={bodyViewContainerStyle ? bodyViewContainerStyle : {}} tailViewContainerStyle={tailViewContainerStyle ? tailViewContainerStyle : {}} avatarURL={item.value.avatar || undefined} statusIndicatorColor={Object.keys(selectedItems).includes(item.value[listItemKey])
                ? theme.palette.getBackgroundColor()
                : !disableUsersPresence && item.value.status === 'online'
                    ? listStyle?.onlineStatusColor
                        ? listStyle?.onlineStatusColor
                        : theme.palette.getSuccess()
                    : ''} statusIndicatorIcon={Object.keys(selectedItems).includes(item.value[listItemKey]) && ICONS.CHECK} SubtitleView={SubtitleView ? () => <SubtitleView {...item.value}/> : null} TailView={TailView ? () => <TailView {...item.value}/> : null} statusIndicatorStyle={selectedItems[item.value[listItemKey]] === true
                ? {
                    ...statusIndicatorStyle,
                    borderRadius: 10,
                    height: 20,
                    width: 20,
                }
                : statusIndicatorStyle} avatarStyle={avatarStyle} options={() => options && options(item.value)} onPress={() => {
                onListItemPress(item);
            }} onLongPress={() => {
                onListItemLongPress(item);
            }}/>);
    };
    /**
     * Gets the list of users
     */
    const getList = (props) => {
        const promise = new Promise((resolve, reject) => {
            const cancel = () => {
                clearTimeout(lastCall);
                lastReject(new Error('Promise cancelled'));
            };
            if (lastCall) {
                cancel();
            }
            lastCall = setTimeout(() => {
                props?.fetchNext().then((listItems) => {
                    resolve(listItems);
                });
            }, 500);
            lastReject = reject;
        });
        return promise;
    };
    /**
     * Returns a container of users if exists else returns the corresponding decorator message
     */
    const getMessageContainer = () => {
        let messageContainer = null;
        decoratorMessage === LOADING;
        if (list.length === 0 && decoratorMessage.toLowerCase() === LOADING) {
            if (LoadingStateView)
                return <LoadingStateView />;
            messageContainer = (<View style={styles.msgContainerStyle}>
          <Image style={{
                    tintColor: listStyle?.loadingIconTint ?? theme.palette.getAccent600(),
                }} source={ICONS.SPINNER}/>
        </View>);
        }
        else if (list.length === 0 &&
            decoratorMessage.toLowerCase() === NO_DATA_FOUND) {
            messageContainer = EmptyStateView ? (<EmptyStateView />) : (<View style={styles.msgContainerStyle}>
          <Text style={[
                    styles.msgTxtStyle,
                    listStyle.emptyTextFont ?? theme.typography.body,
                    {
                        color: listStyle?.emptyTextColor ?? theme.palette.getAccent400(),
                    },
                ]}>
            {emptyStateText}
          </Text>
        </View>);
        }
        else if (!hideError &&
            decoratorMessage.toLowerCase() === SOMETHING_WRONG) {
            messageContainer = ErrorStateView ? (<ErrorStateView />) : (<View style={styles.msgContainerStyle}>
          <Text style={[
                    styles.msgTxtStyle,
                    listStyle?.errorTextFont ?? theme.typography.body,
                    {
                        color: listStyle?.errorTextColor ?? theme.palette.getAccent400(),
                    },
                ]}>
            {errorStateText}
          </Text>
        </View>);
        }
        else {
            let currentLetter = '';
            const listWithHeaders = [];
            if (list.length) {
                list.forEach((listItem) => {
                    const chr = listItem?.name && listItem.name[0].toUpperCase();
                    if (chr !== currentLetter && !hideSeparator && !ListItemView) {
                        currentLetter = chr;
                        listWithHeaders.push({
                            value: currentLetter,
                            header: true,
                        });
                    }
                    listWithHeaders.push({ value: listItem, header: false });
                });
                messageContainer = (<View style={styles.listContainerStyle}>
            <FlatList data={listWithHeaders} extraData={listWithHeaders} renderItem={ListItemView
                        ? ({ item, index, separators }) => (<ListItemView index={index} separators={separators} item={item.value}/>)
                        : renderListItemView} keyExtractor={(item, index) => (item[listItemKey]
                        ? item[listItemKey] + '_' + index
                        : index)} onEndReached={endReached} onEndReachedThreshold={0.3} showsVerticalScrollIndicator={false}/>
          </View>);
            }
        }
        return messageContainer;
    };
    return (<View style={[
            styles.containerStyle,
            {
                height: listStyle.height ?? '100%',
                width: listStyle.width ?? '100%',
                backgroundColor: listStyle.background ?? theme.palette.getBackgroundColor(),
                borderRadius: listStyle.borderRadius ?? 0,
            },
            listStyle.border ?? {},
        ]}>
      <Header backButtonIcon={backButtonIcon} showBackButton={showBackButton} onBack={onBack} title={title} AppBarOptions={AppBarOptions} shouldSelect={shouldSelect} hideSubmitIcon={hideSubmitIcon} onSelectionHandler={onSelectionHandler} hideSearch={hideSearch} searchBoxIcon={searchBoxIcon} searchPlaceholderText={searchPlaceholderText} searchHandler={searchHandler} searchInput={searchInput} onSubmitEditing={() => searchHandler(searchInput)} selectionIcon={selectionIcon} titleFontStyle={listStyle.titleFont ?? theme.typography.heading} titleColor={listStyle.titleColor ?? theme.palette.getAccent()} backIconTint={listStyle.backIconTint ?? theme.palette.getPrimary()} selectionIconTint={theme.palette.getPrimary()} searchBorderStyle={listStyle.searchBorder} searchBorderRadius={listStyle.searchBorderRadius} searchTextFontStyle={listStyle.searchTextFont ?? theme.typography.body} searchTextColor={listStyle.searchTextColor ?? theme.palette.getAccent()} searchPlaceholderTextColor={theme.palette.getAccent600()} searchIconTint={listStyle.searchIconTint ?? theme.palette.getAccent400()} searchBackground={listStyle.searchBackground ?? theme.palette.getAccent50()}/>
      <View style={styles.container}>{getMessageContainer()}</View>
    </View>);
});
CometChatList.defaultProps = {
    title: 'Title',
    hideSearch: false,
    requestBuilder: undefined,
    searchRequestBuilder: undefined,
    emptyStateText: localize('NO_USERS_FOUND'),
    errorStateText: localize('SOMETHING_WRONG'),
    hideError: false,
    onItemPress: () => { },
    onItemLongPress: () => { },
    onSelection: () => { },
    selectionMode: 'none',
    listItemKey: 'uid',
    listStyle: {},
};
//# sourceMappingURL=CometChatList.js.map