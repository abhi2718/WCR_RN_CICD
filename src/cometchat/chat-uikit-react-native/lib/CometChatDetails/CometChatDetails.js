import { View, Text, TouchableOpacity, Image, FlatList, BackHandler, } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import { CometChatContext, CometChatListItem } from '../shared';
import { ICONS } from './resources';
import { localize } from '../shared';
import { UserStatusConstants, GroupMemberOptionConstants, ComponentIds, PASSWORD_GROUP_COLOR, PRIVATE_GROUP_COLOR, } from '../shared/constants/UIKitConstants';
//@ts-ignore
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatConfirmDialog } from '../shared';
import { getDefaultDetailsTemplate } from '../shared/utils/DetailsUtils/DetailsUtils';
import { CometChatAddMembers } from '../CometChatAddMembers';
import { CometChatBannedMembers } from '../CometChatBannedMembers';
import { styles } from './styles';
import { listners } from './listners';
import { CometChatUIEvents, CometChatGroupsEvents } from '../shared/events';
import { CometChatTransferOwnership } from '../CometChatTransferOwnership';
import { CometChatGroupsMembers } from '../CometChatGroupMembers';
import { CometChatUIEventHandler } from '../shared/events/CometChatUIEventHandler/CometChatUIEventHandler';
export const CometChatDetails = (props) => {
    const { theme } = useContext(CometChatContext);
    const { user, group, title = localize('DETAILS'), showCloseButton = true, closeButtonIcon = ICONS.CLOSE, hideProfile, SubtitleView, CustomProfileView, data, disableUsersPresence, protectedGroupIcon, privateGroupIcon, leaveGroupButtonText, leaveGroupCancelButtonText, leaveGroupConfirmDialogMessage, leaveGroupDialogStyle, deleteGroupButtonText, deleteGroupCancelButtonText, deleteGroupConfirmDialogMessage, deleteGroupDialogStyle, groupMembersConfiguration, addMembersConfiguration, bannedMembersConfiguration, transferOwnershipConfiguration, onError, onBack, avatarStyle, statusIndicatorStyle, listItemStyle, detailsStyle, } = props;
    const userStatusListenerId = 'userlist_' + new Date().getTime();
    const groupListenerId = 'grouplistner_' + new Date().getTime();
    const ccGroupMemberKickedId = 'ccGroupMemberKicked_' + new Date().getTime();
    const ccGroupMemberBannedId = 'ccGroupMemberBannedId_' + new Date().getTime();
    const ccGroupMemberAddedId = 'ccGroupMemberAdded_' + new Date().getTime();
    const ccOwnershipChangedId = 'ccOwnershipChanged_' + new Date().getTime();
    const [userDetails, setUserDetails] = useState(user);
    const [groupDetails, setGroupDetails] = useState(group);
    const [modalVisible, setModalVisible] = useState(false);
    const [detailsList, setDetailsList] = useState((data && data({ user, group })) ?? []);
    const [loggedInUser, setLoggedInUser] = useState();
    const [currentScreen, setCurrentScreen] = useState(null);
    const [modalDetails, setModalDetails] = useState();
    const handleViewMembers = () => {
        setCurrentScreen(ComponentIds.VIEW_MEMBERS);
    };
    const handleAddMembers = () => {
        setCurrentScreen(ComponentIds.ADD_MEMBERS);
    };
    const handleBannedMembers = () => {
        setCurrentScreen(ComponentIds.BANNED_MEMBERS);
    };
    const handleTransferOwnership = () => {
        setCurrentScreen(ComponentIds.TRANSFER_OWNERSHIP);
    };
    const leaveGroup = (withOwnership = false) => {
        if (withOwnership) {
            handleTransferOwnership();
            return;
        }
        CometChat.leaveGroup(groupDetails.getGuid()).then((hasLeft) => {
            groupDetails['membersCount'] = groupDetails['membersCount'] - 1;
            let actionMessage = new CometChat.Action(groupDetails.getGuid(), CometChat.MESSAGE_TYPE.TEXT, CometChat.RECEIVER_TYPE.GROUP, CometChat.CATEGORY_ACTION);
            actionMessage.setMessage(`${loggedInUser.getName()} has left`);
            CometChatUIEventHandler.emitGroupEvent(CometChatUIEvents.ccGroupLeft, {
                message: actionMessage,
                leftUser: userDetails,
                leftGroup: groupDetails,
            });
            onBack && onBack();
        }, (error) => {
            onError && onError(error);
        });
    };
    const handleLeaveGroup = () => {
        if (groupDetails?.['owner'] === loggedInUser.getUid())
            setModalDetails({
                title: 'Transfer Ownership',
                cancelButtonText: localize('CANCEL'),
                confirmButtonText: localize('CONFIRM'),
                messageText: localize('TRANSFER_CONFIRM'),
                onCancel: () => {
                    setModalVisible(false);
                },
                onConfirm: () => leaveGroup(true),
                style: {},
            });
        else {
            setModalDetails({
                title: 'Please Confirm',
                cancelButtonText: leaveGroupCancelButtonText ?? localize('CANCEL'),
                confirmButtonText: leaveGroupButtonText ?? localize('CONFIRM'),
                messageText: leaveGroupConfirmDialogMessage ?? localize('LEAVE_CONFIRM'),
                onCancel: () => {
                    setModalVisible(false);
                },
                onConfirm: () => leaveGroup(),
                style: leaveGroupDialogStyle ?? {},
            });
        }
        setModalVisible(true);
    };
    const deleteGroup = () => {
        CometChat.deleteGroup(groupDetails.getGuid()).then((response) => {
            CometChatUIEventHandler.emitGroupEvent(CometChatGroupsEvents.ccGroupDeleted, {
                group: groupDetails,
            });
            onBack && onBack();
        }, (error) => {
            onError && onError(error);
        });
    };
    const handleDeleteGroup = () => {
        setModalVisible(true);
        setModalDetails({
            title: 'Please Confirm',
            cancelButtonText: deleteGroupCancelButtonText ?? localize('CANCEL'),
            confirmButtonText: deleteGroupButtonText ?? localize('CONFIRM'),
            messageText: deleteGroupConfirmDialogMessage ?? localize('DELETE_CONFIRM'),
            onCancel: () => {
                setModalVisible(false);
            },
            onConfirm: deleteGroup,
            style: deleteGroupDialogStyle ?? {},
        });
    };
    const updateUserBlockStatus = (list, blocked) => {
        let updatedUser = userDetails;
        if (list[userDetails.getUid()]['success'] == true) {
            updatedUser.setBlockedByMe(blocked);
        }
        setUserDetails(updatedUser);
        getDefaultTemplate(loggedInUser, updatedUser);
    };
    const handleUserBlockUnblock = (blocked = false) => {
        var usersList = [userDetails.getUid()];
        if (blocked) {
            CometChat.unblockUsers(usersList).then((list) => {
                updateUserBlockStatus(list, false);
                CometChatUIEventHandler.emitUserEvent(CometChatUIEvents.ccUserUnBlocked, {
                    user: userDetails,
                });
            }, (error) => {
                onError && onError(error);
            });
            return;
        }
        CometChat.blockUsers(usersList).then((list) => {
            updateUserBlockStatus(list, true);
            CometChatUIEventHandler.emitUserEvent(CometChatUIEvents.ccUserBlocked, {
                user: userDetails,
            });
        }, (error) => {
            onError && onError(error);
        });
    };
    const handleOnClickFncDeclaration = (item) => {
        switch (item.id) {
            case GroupMemberOptionConstants.view:
                return handleViewMembers;
            case GroupMemberOptionConstants.addMembers:
                return handleAddMembers;
            case GroupMemberOptionConstants.ban:
                return handleBannedMembers;
            case GroupMemberOptionConstants.unban:
                return handleBannedMembers;
            case GroupMemberOptionConstants.leave:
                return handleLeaveGroup;
            case GroupMemberOptionConstants.deleteGroup:
                return handleDeleteGroup;
            case UserStatusConstants.blocked:
                return () => handleUserBlockUnblock(true);
            case UserStatusConstants.unblocked:
                return () => handleUserBlockUnblock();
            default:
                return () => { };
        }
    };
    const ListItem = ({ item }) => {
        const { title, icon, titleStyle, backgroundColor, iconTint, CustomView, Tail, height, onClick, } = item;
        let handleInternalClick;
        if (!onClick) {
            handleInternalClick = handleOnClickFncDeclaration(item);
        }
        if (CustomView)
            return <CustomView />;
        return (<TouchableOpacity onPress={onClick
                ? () => onClick(item)
                : handleInternalClick && handleInternalClick} style={[
                styles.listItemContainer,
                { height: height ?? 56, backgroundColor: backgroundColor ?? '' },
            ]}>
        <Text style={[
                styles.listItemTitle,
                { color: theme.palette.getAccent() },
                titleStyle,
            ]}>
          {title}
        </Text>
        {Tail ? (<Tail />) : (<Image source={icon ?? ICONS.RIGHT_ARROW} resizeMode="contain" style={[
                    styles.listItemTailIcon,
                    { tintColor: iconTint ?? theme.palette.getPrimary() },
                ]}/>)}
      </TouchableOpacity>);
    };
    const ListSection = (props) => {
        const { item } = props;
        const { title, titleColor, titleFont, titleStyle, sectionSeparatorColor, itemSeparatorColor, hideSectionSeparator, hideItemSeparator, options, } = item;
        return (<>
        <FlatList keyExtractor={(_, i) => _.id} data={options} renderItem={({ item }) => (<ListItem item={{ hideItemSeparator, itemSeparatorColor, ...item }}/>)} ListHeaderComponent={() => (<SectionHeader title={title} titleColor={titleColor} titleFont={titleFont} titleStyle={titleStyle}/>)} ListFooterComponent={() => hideSectionSeparator ? null : (<SectionDivider sectionSeparatorColor={sectionSeparatorColor}/>)}/>
      </>);
    };
    const SectionHeader = (props) => {
        const { title, titleColor, titleFont, titleStyle } = props;
        return (<View>
        <Text style={[
                { color: titleColor ?? theme.palette.getAccent500() },
                titleFont ? titleFont : theme.typography.text2,
                titleStyle ? titleStyle : {},
            ]}>
          {title}
        </Text>
      </View>);
    };
    const SectionDivider = (props) => {
        const { sectionSeparatorColor } = props;
        return (<View style={[
                styles.sectionDivider,
                {
                    backgroundColor: sectionSeparatorColor ?? theme.palette.getAccent100(),
                },
            ]}/>);
    };
    const SubtitleViewElem = () => {
        return (<Text style={{ color: theme.palette.getAccent600() }}>
        {userDetails.getStatus() === UserStatusConstants.online
                ? localize('ONLINE')
                : localize('OFFLINE')}
      </Text>);
    };
    const handleBackButtonClick = () => {
        setCurrentScreen(null);
        if (modalVisible)
            setModalVisible(false);
        return true;
    };
    useEffect(() => {
        if (currentScreen) {
            BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
            return () => {
                BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
            };
        }
        return () => { };
    }, [currentScreen]);
    const getDefaultTemplate = (loggedUser, user) => {
        if (userDetails || groupDetails) {
            const template = getDefaultDetailsTemplate({
                loggedInUser: loggedUser,
                user: user ?? userDetails,
                group: groupDetails,
                theme,
            });
            setDetailsList(template.filter((item) => item));
        }
    };
    const getTemplates = () => {
        CometChat.getLoggedinUser().then((loggedUser) => {
            setLoggedInUser(loggedUser);
            if (!data) {
                getDefaultTemplate(loggedUser);
            }
        }, (error) => {
            onError && onError(error);
        });
    };
    useEffect(() => {
        getTemplates();
    }, []);
    const handleUserStatus = (user) => {
        setUserDetails((prev) => {
            prev.setStatus(user.getStatus());
            return prev;
        });
    };
    const handleGroupListener = (group) => {
        setGroupDetails(group);
    };
    useEffect(() => {
        listners.addListener.userListener({
            userStatusListenerId,
            handleUserStatus,
        });
        listners.addListener.groupListener({
            groupListenerId,
            handleGroupListener,
        });
        return () => {
            listners.removeListner.removeUserListener({ userStatusListenerId });
            listners.removeListner.removeGroupListener({ groupListenerId });
        };
    }, []);
    const handleGroupMemberKicked = ({ message, kickedMember, kickedBy, kickedFrom, }) => {
        handleGroupListener(kickedFrom);
    };
    const handleGroupMemberBanned = ({ message, kickedUser, kickedBy, kickedFrom, }) => {
        handleGroupListener(kickedFrom);
    };
    const handleGroupMemberAdded = ({ addedBy, message, usersAdded, userAddedIn, }) => {
        setCurrentScreen(null);
        handleGroupListener(userAddedIn);
    };
    const handleOwnershipChanged = ({ group, newOwner, message }) => {
        handleGroupListener(group);
        getTemplates();
    };
    useEffect(() => {
        CometChatUIEventHandler.addGroupListener(groupListenerId, {
            ccGroupMemberKicked: (item) => handleGroupMemberKicked(item),
            ccGroupMemberBanned: (item) => handleGroupMemberBanned(item),
            ccGroupMemberAdded: (item) => handleGroupMemberAdded(item),
            ccOwnershipChanged: (item) => handleOwnershipChanged(item),
        });
        return () => {
            CometChatUIEventHandler.removeGroupListener(groupListenerId);
        };
    }, []);
    if (currentScreen === ComponentIds.VIEW_MEMBERS)
        return (<CometChatGroupsMembers 
        //Note: Please fix types of CometChatGroupsMembers
        group={groupDetails} onBack={handleBackButtonClick} selectionMode="none" groupMemberStyle={{ backIconTint: detailsStyle?.backIconTint ?? null }} {...groupMembersConfiguration}/>);
    if (currentScreen === ComponentIds.ADD_MEMBERS)
        return (<CometChatAddMembers group={groupDetails} onBack={handleBackButtonClick} usersStyle={{ backIconTint: detailsStyle?.backIconTint ?? null }} {...addMembersConfiguration}/>);
    if (currentScreen === ComponentIds.BANNED_MEMBERS)
        return (<CometChatBannedMembers group={groupDetails} onBack={handleBackButtonClick} bannedMemberStyle={{ backIconTint: detailsStyle?.backIconTint ?? null }} {...bannedMembersConfiguration}/>);
    if (currentScreen === ComponentIds.TRANSFER_OWNERSHIP)
        return (<CometChatTransferOwnership group={groupDetails} onBack={handleBackButtonClick} {...transferOwnershipConfiguration}/>);
    return (<View style={[
            styles.container,
            {
                width: detailsStyle?.width ?? '100%',
                height: detailsStyle?.height ?? '100%',
                backgroundColor: detailsStyle?.backgroundColor ?? theme.palette.getBackgroundColor(),
                borderRadius: detailsStyle?.borderRadius ?? 0,
            },
            detailsStyle?.border ? detailsStyle?.border : {},
        ]}>
      <Header title={title} showCloseButton={showCloseButton} closeButtonIcon={closeButtonIcon} onPress={() => {
            onBack && onBack();
        }} titleStyle={{
            color: detailsStyle?.titleColor ?? theme.palette.getAccent(),
            ...(detailsStyle?.titleFont
                ? detailsStyle?.titleFont
                : theme.typography.heading),
        }} closeIconTint={detailsStyle?.closeIconTint ?? theme.palette.getPrimary()}/>
      <CometChatConfirmDialog isOpen={modalVisible} title={modalDetails?.title} confirmButtonText={modalDetails?.confirmButtonText} cancelButtonText={modalDetails?.cancelButtonText} messageText={modalDetails?.messageText} onConfirm={modalDetails?.onConfirm} onCancel={modalDetails?.onCancel} style={modalDetails?.style}/>

      {hideProfile ? null : CustomProfileView ? (<CustomProfileView {...(userDetails
            ? { user: userDetails }
            : group
                ? { group: groupDetails }
                : {})}/>) : (<CometChatListItem id={'profile'} listItemStyle={listItemStyle ? listItemStyle : { titleFont: { fontWeight: '600' } }} avatarName={userDetails?.getName() || groupDetails?.getName()} avatarURL={{ uri: userDetails?.getAvatar() || groupDetails?.getIcon() }} headViewContainerStyle={{
                paddingRight: 15,
                paddingLeft: 0,
            }} statusIndicatorStyle={groupDetails
                ? {
                    end: 10,
                    height: 15,
                    width: 15,
                    backgroundColor: groupDetails.getType() === CometChat.GROUP_TYPE.PASSWORD
                        ? protectedGroupIcon
                            ? ''
                            : detailsStyle?.protectedGroupIconBackground ??
                                PASSWORD_GROUP_COLOR // Note need to add this to
                        : groupDetails.getType() === CometChat.GROUP_TYPE.PRIVATE
                            ? privateGroupIcon
                                ? ''
                                : detailsStyle?.privateGroupIconBackground ??
                                    PRIVATE_GROUP_COLOR
                            : '',
                    borderRadius: 15,
                    ...(statusIndicatorStyle ? statusIndicatorStyle : {}),
                }
                : {
                    end: 10,
                    ...(statusIndicatorStyle ? statusIndicatorStyle : {}),
                }} avatarStyle={avatarStyle ? avatarStyle : { border: { borderWidth: 0 } }} statusIndicatorColor={!disableUsersPresence &&
                userDetails &&
                userDetails.getStatus() === UserStatusConstants.online
                ? detailsStyle?.onlineStatusColor ?? theme.palette.getSuccess()
                : ''} statusIndicatorIcon={groupDetails
                ? groupDetails.getType() === CometChat.GROUP_TYPE.PASSWORD
                    ? protectedGroupIcon
                        ? protectedGroupIcon
                        : ICONS.PROTECTED
                    : groupDetails.getType() === CometChat.GROUP_TYPE.PRIVATE
                        ? privateGroupIcon
                            ? privateGroupIcon
                            : ICONS.PRIVATE
                        : null
                : null} title={userDetails?.getName() || groupDetails?.getName()} SubtitleView={SubtitleView
                ? () => (<SubtitleView {...(userDetails
                    ? { user: userDetails }
                    : group
                        ? { group: groupDetails }
                        : {})}/>)
                : userDetails
                    ? SubtitleViewElem
                    : null}/>)}
      <FlatList keyExtractor={(_, i) => i.toString()} data={detailsList} renderItem={ListSection}/>
    </View>);
};
//# sourceMappingURL=CometChatDetails.js.map