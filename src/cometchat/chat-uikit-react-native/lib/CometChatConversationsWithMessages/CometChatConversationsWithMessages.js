import React, { useState, useEffect, useRef, useContext } from "react";
import { View, BackHandler, TouchableOpacity, Image } from "react-native";
import { ConversationsConfiguration } from "../CometChatConversations/ConversationsConfiguration";
import { MessagesConfiguration } from "../CometChatMessages/MessagesConfiguration";
import { CometChatConversations } from "../CometChatConversations/CometChatConversations";
import { CometChatMessages } from "../CometChatMessages";
import { Style } from "./styles";
import { CometChatUIEventHandler } from "../shared/events/CometChatUIEventHandler/CometChatUIEventHandler";
import { CometChatContext } from "../shared";
import { StartIcon } from "./resources";
import { CometChatContacts } from "../CometChatContacts";
const ComponentNames = {
    ConversationList: "conversations",
    Messages: "messages",
    NewConversation: "new-conversation"
};
const uiEventListener = "uiEvents_" + new Date().getTime();
export const CometChatConversationsWithMessages = (props) => {
    const { user, group, conversationsConfiguration, messagesConfigurations, startConversationConfiguration, onError, } = props;
    const { theme } = useContext(CometChatContext);
    const [showComponent, setShowComponent] = useState(ComponentNames.ConversationList);
    // const [showForwarding, setShowForwarding] = useState(false);
    const selectedConversation = useRef(null);
    const selectedUser = useRef(user);
    const selectedGroup = useRef(group);
    const openMessagesFor = (item) => {
        clearSelected();
        selectedConversation.current = item;
        setShowComponent(ComponentNames.Messages);
    };
    const _conversationsConfig = new ConversationsConfiguration({
        onItemPress: openMessagesFor,
        onError,
        ...conversationsConfiguration
    });
    const _messagesConfig = new MessagesConfiguration({
        ...messagesConfigurations,
        messageHeaderConfiguration: {
            onBack: () => setShowComponent(ComponentNames.ConversationList),
            ...messagesConfigurations?.messageHeaderConfiguration
        },
        messageComposerConfiguration: {
            onError,
            ...messagesConfigurations?.messageComposerConfiguration
        }
    });
    const handleBack = () => {
        if (showComponent == ComponentNames.Messages)
            setShowComponent(ComponentNames.ConversationList);
        else
            return false;
        return true;
    };
    const NewConversation = () => {
        return <TouchableOpacity onPress={() => setShowComponent(ComponentNames.NewConversation)}>
                <Image source={StartIcon} style={{ height: 24, width: 24, tintColor: theme.palette.getPrimary() }}/>
            </TouchableOpacity>;
    };
    const clearSelected = () => {
        selectedConversation.current = null;
        selectedGroup.current = null;
        selectedUser.current = null;
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBack);
        };
    }, [showComponent]);
    useEffect(() => {
        if (user) {
            selectedUser.current = user;
            setShowComponent(ComponentNames.Messages);
        }
        if (group) {
            selectedGroup.current = group;
            setShowComponent(ComponentNames.Messages);
        }
    }, [user, group]);
    useEffect(() => {
        CometChatUIEventHandler.addUIListener(uiEventListener, {
            openChat: ({ user, group }) => {
                setShowComponent(ComponentNames.ConversationList);
                clearSelected();
                if (user != undefined) {
                    selectedUser.current = user;
                    setShowComponent(ComponentNames.Messages);
                }
                if (group != undefined) {
                    selectedGroup.current = group;
                    setShowComponent(ComponentNames.Messages);
                }
            }
        });
        // CometChatUIEventHandler.addMessageListener(
        //     uiEventListener,
        //     {
        //         ccMessageForwarded: ({users, groups, status}) =>{
        //             if (status == messageStatus.inprogress) {
        //                 setShowForwarding(true);
        //                 return;
        //             }
        //             if (status == messageStatus.success) {
        //                 let totalCount = ((users && users.length) || 0) + ((groups && groups.length) || 0)
        //                 if (totalCount == 1) {
        //                     if (users && users.length > 0) {
        //                         setShowComponent(ComponentNames.ConversationList);
        //                         clearSelected();
        //                         selectedUser.current = users[0];
        //                         setShowComponent(ComponentNames.Messages);
        //                     }
        //                     if (groups && groups.length > 0) {
        //                         setShowComponent(ComponentNames.ConversationList);
        //                         clearSelected()
        //                         selectedGroup.current = groups[0];
        //                         setShowComponent(ComponentNames.Messages);
        //                     }
        //                 }
        //                 setShowForwarding(false);
        //             }
        //         }
        //     });
        CometChatUIEventHandler.addGroupListener(uiEventListener, {
            ccGroupDeleted: ({ group }) => {
                if (selectedConversation.current?.getConversationWith()['guid'] == group['guid'] || selectedGroup.current?.getGuid() == group['guid'])
                    setShowComponent(ComponentNames.ConversationList);
            },
            ccGroupLeft: ({ leftGroup }) => {
                console.log({ leftGroup });
                if (selectedConversation.current?.getConversationId() == leftGroup['conversationId'] || selectedGroup.current?.getGuid() == leftGroup['guid'])
                    setShowComponent(ComponentNames.ConversationList);
            }
        });
        return () => {
            CometChatUIEventHandler.removeGroupListener(uiEventListener);
            CometChatUIEventHandler.removeUIListener(uiEventListener);
        };
    }, []);
    return (<View style={{ flex: 1 }}>
            <CometChatConversations  {..._conversationsConfig} AppBarOption={_conversationsConfig.AppBarOption || NewConversation}/>
            {/* {
            showForwarding && <Toast message={localize("FORWARDING")} />
        } */}
            {showComponent == ComponentNames.NewConversation &&
            <View style={[Style.stackScreen, { backgroundColor: theme.palette.getBackgroundColor() }]}>
                    <CometChatContacts hideSubmit={true} onItemPress={({ user, group }) => {
                    clearSelected();
                    selectedGroup.current = group;
                    selectedUser.current = user;
                    selectedConversation.current = null;
                    setShowComponent(ComponentNames.Messages);
                }} {...startConversationConfiguration} onClose={() => {
                    clearSelected();
                    setShowComponent(ComponentNames.ConversationList);
                    startConversationConfiguration?.onClose && startConversationConfiguration?.onClose();
                }}/>
                </View>}
            {showComponent == ComponentNames.Messages &&
            <View style={[Style.stackScreen, { backgroundColor: theme.palette.getBackgroundColor() }]}>
                    <CometChatMessages user={selectedUser.current || selectedConversation.current?.['conversationType'] == "user" ?
                    selectedUser.current || selectedConversation.current?.['conversationWith'] :
                    undefined} group={selectedGroup.current || selectedConversation.current?.['conversationType'] == "group" ?
                    selectedGroup.current || selectedConversation.current?.['conversationWith'] :
                    undefined} {..._messagesConfig}/>
                </View>}
        </View>);
};
//# sourceMappingURL=CometChatConversationsWithMessages.js.map