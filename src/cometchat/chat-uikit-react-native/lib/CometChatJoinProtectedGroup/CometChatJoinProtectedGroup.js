import { Text, TextInput, View } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Header from './Header';
import { CometChatConfirmDialog, CometChatContext, localize, } from '../shared';
//@ts-ignore
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CometChatGroupsEvents } from '../shared/events';
import { styles } from './style';
import { CometChatUIEventHandler } from '../shared/events/CometChatUIEventHandler/CometChatUIEventHandler';
export const CometChatJoinProtectedGroup = (props) => {
    const { theme } = useContext(CometChatContext);
    const { group, title = localize("PROTECTED_GROUP"), joinIcon, closeIcon, passwordPlaceholderText = localize("GROUP_PASSWORD"), description, onJoinClick, hasError, errorText, onError, onBack, joinProtectedGroupStyle, } = props;
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const loggedUserRef = useRef(null);
    const showError = (message) => {
        if (hasError) {
            setModalVisible(true);
            setErrorMessage(errorText ?? message);
        }
    };
    const joinGroup = () => {
        if (!password) {
            showError(localize('WRONG_PASSWORD'));
            return;
        }
        let guid = group?.['guid'];
        let type = group?.['type'];
        CometChat.joinGroup(guid, type, password)
            .then((response) => {
            setPassword('');
            onBack && onBack();
            group['membersCount'] = group['membersCount'] + 1;
            CometChatUIEventHandler.emitGroupEvent(CometChatGroupsEvents.ccGroupMemberJoined, {
                joinedUser: loggedUserRef.current,
                joinedGroup: group,
            });
        })
            .catch((error) => {
            onError && onError(error);
        });
    };
    useEffect(() => {
        CometChat.getLoggedinUser().then((loggedUser) => {
            loggedUserRef.current = loggedUser;
        }, (error) => {
            onError && onError(error);
        });
    }, []);
    return (<View style={[
            styles.container,
            {
                width: joinProtectedGroupStyle.width ?? 'auto',
                height: joinProtectedGroupStyle.height ?? 'auto',
                backgroundColor: joinProtectedGroupStyle.background ??
                    theme.palette.getBackgroundColor(),
                borderRadius: joinProtectedGroupStyle.borderRadius ?? 0,
            },
            joinProtectedGroupStyle.border ?? {},
        ]}>
      <CometChatConfirmDialog isOpen={modalVisible} title={localize('INCORRECT_PASSWORD')} confirmButtonText={'Ok'} cancelButtonText={''} messageText={errorMessage} onConfirm={() => setModalVisible(false)} style={{
            messageTextStyle: joinProtectedGroupStyle.errorTextStyle,
            titleTextStyle: joinProtectedGroupStyle.errorTextStyle,
        }}/>
      <Header title={title} joinIcon={joinIcon} closeIcon={closeIcon} titleStyle={[
            joinProtectedGroupStyle.titleStyle ?? theme.typography.heading,
            { color: theme.palette.getAccent() },
        ]} joinIconTint={joinProtectedGroupStyle.joinIconTint ?? theme.palette.getPrimary()} closeIconTint={joinProtectedGroupStyle.closeIconTint ?? theme.palette.getPrimary()} onSubmit={onJoinClick ? () => onJoinClick({ group, password }) : joinGroup} onCancel={onBack}/>
      <Text style={[
            joinProtectedGroupStyle.descriptionTextStyle ??
                theme.typography.subtitle1,
            { color: theme.palette.getAccent() },
        ]}>
        {description ?? `Enter password to access ${group?.['name']} Group.`}
      </Text>
      <TextInput value={password} onChangeText={setPassword} placeholder={passwordPlaceholderText} placeholderTextColor={theme.palette.getAccent600()} style={[
            styles.textInput,
            {
                borderBottomColor: joinProtectedGroupStyle.inputBorderColor ??
                    theme.palette.getAccent200(),
                color: theme.palette.getAccent(),
            },
            password.length > 0
                ? joinProtectedGroupStyle.passwordPlaceholderStyle ??
                    theme.typography.body
                : joinProtectedGroupStyle.passwordInputTextStyle ??
                    theme.typography.body,
        ]}/>
    </View>);
};
CometChatJoinProtectedGroup.defaultProps = {
    hasError: true,
    joinProtectedGroupStyle: {},
};
//# sourceMappingURL=CometChatJoinProtectedGroup.js.map