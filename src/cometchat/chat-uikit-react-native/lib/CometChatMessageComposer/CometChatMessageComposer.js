import React, { useContext, useEffect } from 'react';
import { View, Image, TouchableOpacity, NativeModules, Platform, KeyboardAvoidingView, Modal, } from 'react-native';
import { Style } from './styles';
import { localize, CometChatLiveReactions, CometChatBottomSheet, CometChatMessagePreview, MessagePreviewStyle, CometChatActionSheet, CometChatContext, } from '../shared';
import { CheckPropertyExists } from '../shared/helper/functions';
//@ts-ignore
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { getUnixTimestamp, messageStatus, } from '../shared/utils/CometChatMessageHelper';
import { CometChatSoundManager, ChatConfigurator } from '../shared';
import { ConversationOptionConstants, MessageTypeConstants, MetadataConstants, ReceiverTypeConstants, ViewAlignment, } from '../shared/constants/UIKitConstants';
import { ICONS } from './resources';
import { CometChatMessageInput } from '../shared';
import { MessageEvents } from '../shared/events';
import { CometChatUIEventHandler } from '../shared/events/CometChatUIEventHandler/CometChatUIEventHandler';
import { CometChatMediaRecorder } from '../shared/views/CometChatMediaRecorder';
const { FileManager } = NativeModules;
const uiEventListenerShow = 'uiEvent_show_' + new Date().getTime();
const uiEventListenerHide = 'uiEvent_hide_' + new Date().getTime();
const MessagePreviewTray = (props) => {
    const { shouldShow = false, text = '', onClose = () => { } } = props;
    return shouldShow ? (<CometChatMessagePreview style={new MessagePreviewStyle({ width: '95%', backgroundColor: "white" })} messagePreviewTitle={localize('EDIT_MESSAGE')} messagePreviewSubtitle={text} closeIconURL={ICONS.CLOSE} onCloseClick={onClose}/>) : null;
};
const ImageButton = (props) => {
    const { image, onClick, buttonStyle, imageStyle } = props;
    return (<TouchableOpacity onPress={onClick} style={buttonStyle}>
      <Image source={image} style={[{ height: 24, width: 24 }, imageStyle]}/>
    </TouchableOpacity>);
};
const AttachIconButton = (props) => {
    const { icon, show = false, onClick = () => { }, style, theme } = props;
    if (show) {
        return (<ImageButton image={icon} imageStyle={[Style.imageStyle, style]} onClick={onClick}/>);
    }
    else {
        return <View style={[Style.imageStyle, style]}/>;
    }
};
const EmojiBoard = (props) => {
    const { shouldShow = false, onClose = () => { }, emojiSelection = (emoji) => { }, ...otherProps } = props;
    return shouldShow ? (<CometChatBottomSheet onClose={onClose}>
      {/* <CometChatEmojiKeyboard onClick={emojiSelection} {...otherProps} /> */}
    </CometChatBottomSheet>) : null;
};
const ActionSheetBoard = (props) => {
    const { shouldShow = false, onClose = () => { }, options = [], cometChatBottomSheetStyle = {}, sheetRef, ...otherProps } = props;
    return shouldShow ? (<CometChatBottomSheet ref={sheetRef} onClose={onClose} style={cometChatBottomSheetStyle}>
      <CometChatActionSheet actions={options} {...otherProps} onPress={props.onClick}/>
    </CometChatBottomSheet>) : null;
};
const RecordAudio = (props) => {
    const { shouldShow = false, onClose = () => { }, options = [], cometChatBottomSheetStyle = {}, sheetRef, onPause = () => { }, onPlay = () => { }, onSend = (recordedFile) => { }, onStop = (recordedFile) => { }, onStart = () => { }, mediaRecorderStyle, pauseIconUrl, playIconUrl, recordIconUrl, deleteIconUrl, stopIconUrl, submitIconUrl, ...otherProps } = props;
    return shouldShow ? (<CometChatBottomSheet ref={sheetRef} onClose={onClose} style={cometChatBottomSheetStyle}>
      <CometChatMediaRecorder onClose={onClose} onPause={onPause} onPlay={onPlay} onSend={onSend} onStop={onStop} onStart={onStart} mediaRecorderStyle={mediaRecorderStyle} pauseIconUrl={pauseIconUrl} playIconUrl={playIconUrl} recordIconUrl={recordIconUrl} deleteIconUrl={deleteIconUrl} stopIconUrl={stopIconUrl} submitIconUrl={submitIconUrl}/>
    </CometChatBottomSheet>) : null;
};
const LiveReaction = (props) => {
    const { show = false, reaction } = props;
    if (show) {
        return <CometChatLiveReactions reaction={reaction}/>;
    }
    return null;
};
let recordedTime = 0, timerIntervalId = null;
export const CometChatMessageComposer = React.forwardRef((props, ref) => {
    const editMessageListenerID = 'editMessageListener_' + new Date().getTime();
    const UiEventListenerID = 'UiEventListener_' + new Date().getTime();
    const { theme } = useContext(CometChatContext);
    const { id, user, group, disableSoundForMessages, customSoundForMessage, disableTypingEvents, text, placeHolderText, HeaderView, FooterView, onChangeText, maxHeight, attachmentIcon, attachmentOptions, SecondaryButtonView, AuxiliaryButtonView, auxiliaryButtonsAlignment, SendButtonView, parentMessageId, hideLiveReaction, liveReactionIcon, messageComposerStyle, onSendButtonPress, onError, hideVoiceRecording, voiceRecordingIconURL, mediaRecorderStyle, pauseIconUrl, playIconUrl, recordIconUrl, deleteIconUrl, stopIconUrl, submitIconUrl, } = props;
    const defaultAttachmentOptions = ChatConfigurator.dataSource.getAttachmentOptions(user, group, id);
    const composerIdMap = new Map().set('parentMessageId', parentMessageId);
    const defaultAuxiliaryButtonOptions = ChatConfigurator.dataSource.getAuxiliaryOptions(user, group, composerIdMap);
    const loggedInUser = React.useRef({});
    const chatWith = React.useRef(null);
    const chatWithId = React.useRef(null);
    const messageInputRef = React.useRef(null);
    const chatRef = React.useRef(chatWith);
    const [selectionPosition, setSelectionPosition] = React.useState({});
    const [inputMessage, setInputMessage] = React.useState(text || '');
    const [showReaction, setShowReaction] = React.useState(false);
    const [showEmojiboard, setShowEmojiboard] = React.useState(false);
    const [showActionSheet, setShowActionSheet] = React.useState(false);
    const [showRecordAudio, setShowRecordAudio] = React.useState(false);
    const [actionSheetItems, setActionSheetItems] = React.useState([]);
    const [messagePreview, setMessagePreview] = React.useState(null);
    const [CustomView, setCustomView] = React.useState(null);
    const [CustomViewHeader, setCustomViewHeader] = React.useState(null);
    const [CustomViewFooter, setCustomViewFooter] = React.useState(null);
    const [isVisible, setIsVisible] = React.useState(false);
    const bottomSheetRef = React.useRef(null);
    let isTyping = null;
    /**
     * Event callback
     */
    React.useImperativeHandle(ref, () => ({
        previewMessageForEdit: previewMessage,
    }));
    const previewMessage = ({ message, status }) => {
        if (status === messageStatus.inprogress) {
            setMessagePreview({
                message: message,
                mode: ConversationOptionConstants.edit,
            });
            setInputMessage(message.text ?? '');
            messageInputRef.current.focus();
        }
    };
    const fileInputHandler = async (fileType) => {
        if (fileType === MessageTypeConstants.takePhoto)
            FileManager.openCamera(fileType, async (cameraImage) => {
                if (CheckPropertyExists(cameraImage, 'error')) {
                    return;
                }
                const { name, uri, type } = cameraImage;
                let file = {
                    name,
                    type,
                    uri,
                };
                sendMediaMessage(chatWithId.current, file, MessageTypeConstants.image, chatWith.current);
            });
        else
            FileManager.openFileChooser(fileType, async (fileInfo) => {
                if (CheckPropertyExists(fileInfo, 'error')) {
                    return;
                }
                let { name, uri, type } = fileInfo;
                let file = {
                    name,
                    type,
                    uri,
                };
                sendMediaMessage(chatWithId.current, file, fileType, chatWith.current);
            });
    };
    const playAudio = () => {
        if (customSoundForMessage) {
            CometChatSoundManager.play(CometChatSoundManager.SoundOutput.outgoingMessage, customSoundForMessage);
        }
        else {
            CometChatSoundManager.play(CometChatSoundManager.SoundOutput.outgoingMessage);
        }
    };
    const textChangeHandler = (txt) => {
        onChangeText && onChangeText(txt);
        startTyping();
        setInputMessage(txt);
    };
    const liveReactionHandler = () => {
        if (hideLiveReaction)
            return;
        if (!showReaction) {
            setShowReaction(true);
            //send reaction event
            const data = {
                type: MetadataConstants.liveReaction,
                reaction: liveReactionIcon,
            };
            /*** send transient message */
            let transientMessage = new CometChat.TransientMessage(chatWithId.current, chatWith.current, data);
            CometChat.sendTransientMessage(transientMessage);
            setTimeout(() => {
                setShowReaction(false);
                CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageLiveReaction, { liveReactionIcon });
            }, 1500);
        }
    };
    const clearInputBox = () => {
        setInputMessage('');
    };
    const sendTextMessage = () => {
        //ignore sending new message
        if (messagePreview != null) {
            editMessage(messagePreview.message);
            return;
        }
        let textMessage = new CometChat.TextMessage(chatWithId.current, inputMessage, chatWith.current);
        textMessage.setSender(loggedInUser.current);
        textMessage.setReceiver(chatWith.current);
        textMessage.setText(inputMessage);
        textMessage.setMuid(String(getUnixTimestamp()));
        parentMessageId && textMessage.setParentMessageId(parentMessageId);
        onSendButtonPress && onSendButtonPress(textMessage);
        if (inputMessage.trim().length == 0) {
            return;
        }
        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, {
            message: textMessage,
            status: messageStatus.inprogress,
        });
        if (!disableSoundForMessages)
            playAudio();
        clearInputBox();
        CometChat.sendMessage(textMessage)
            .then((message) => {
            CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, {
                message: message,
                status: messageStatus.success,
            });
        })
            .catch((error) => {
            onError && onError(error);
            clearInputBox();
        });
    };
    /** edit message */
    const editMessage = (message) => {
        endTyping(null, null);
        let messageText = inputMessage.trim();
        let textMessage = new CometChat.TextMessage(chatWithId.current, messageText, chatWith.current);
        textMessage.setId(message.id);
        parentMessageId && textMessage.setParentMessageId(parentMessageId);
        setInputMessage('');
        messageInputRef.current.textContent = '';
        if (!disableSoundForMessages)
            playAudio();
        setMessagePreview(null);
        CometChat.editMessage(textMessage)
            .then((editedMessage) => {
            setInputMessage('');
            CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageEdited, {
                message: editedMessage,
                status: messageStatus.success,
            });
        })
            .catch((error) => {
            onError && onError(error);
        });
    };
    /** send media message */
    const sendMediaMessage = (receiverId, messageInput, messageType, receiverType) => {
        setShowActionSheet(false);
        let mediaMessage = new CometChat.MediaMessage(receiverId, messageInput, messageType, receiverType);
        mediaMessage.setSender(loggedInUser.current);
        mediaMessage.setReceiver(receiverType);
        mediaMessage.setType(messageType);
        mediaMessage['_composedAt'] = Date.now();
        mediaMessage['_id'] = '_' + Math.random().toString(36).substr(2, 9);
        mediaMessage.setId(mediaMessage['_id']);
        mediaMessage.setMuid(String(getUnixTimestamp()));
        mediaMessage.setData({
            type: messageType,
            category: CometChat.CATEGORY_MESSAGE,
            name: messageInput['name'],
            file: messageInput,
            url: messageInput['uri'],
            sender: loggedInUser.current,
        });
        parentMessageId && mediaMessage.setParentMessageId(parentMessageId);
        let localMessage = new CometChat.MediaMessage(receiverId, messageInput, messageType, receiverType);
        localMessage.setSender(loggedInUser.current);
        localMessage.setReceiver(receiverType);
        localMessage.setType(messageType);
        localMessage['_composedAt'] = Date.now();
        localMessage['_id'] = '_' + Math.random().toString(36).substr(2, 9);
        localMessage.setId(localMessage['_id']);
        localMessage.setMuid(String(getUnixTimestamp()));
        localMessage.setData({
            type: messageType,
            category: CometChat.CATEGORY_MESSAGE,
            name: messageInput['name'],
            file: messageInput,
            url: messageInput['uri'],
            sender: loggedInUser.current,
        });
        parentMessageId && localMessage.setParentMessageId(parentMessageId);
        localMessage.setData({
            type: messageType,
            category: CometChat.CATEGORY_MESSAGE,
            name: messageInput['name'],
            file: messageInput,
            url: messageInput['uri'],
            sender: loggedInUser.current,
            attachments: [messageInput],
        });
        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, {
            message: localMessage,
            status: messageStatus.inprogress,
        });
        if (!disableSoundForMessages)
            playAudio();
        CometChat.sendMediaMessage(mediaMessage)
            .then((message) => {
            CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, {
                message: message,
                status: messageStatus.success,
            });
            setShowRecordAudio(false);
        })
            .catch((error) => {
            setShowRecordAudio(false);
            onError && onError(error);
            console.log('media message sent error', error);
        });
    };
    const startTyping = (endTypingTimeout, typingMetadata) => {
        //if typing is disabled
        if (disableTypingEvents) {
            return false;
        }
        //if typing is in progress
        if (isTyping) {
            return false;
        }
        let typingInterval = endTypingTimeout || 5000;
        let metadata = typingMetadata || undefined;
        let typingNotification = new CometChat.TypingIndicator(chatWithId.current, chatWith.current, metadata);
        CometChat.startTyping(typingNotification);
        isTyping = setTimeout(() => {
            endTyping(null, typingMetadata);
        }, typingInterval);
        return false;
    };
    const endTyping = (event, typingMetadata) => {
        if (event) {
            event.persist();
        }
        if (disableTypingEvents) {
            return false;
        }
        let metadata = typingMetadata || undefined;
        let typingNotification = new CometChat.TypingIndicator(chatWithId.current, chatWith.current, metadata);
        CometChat.endTyping(typingNotification);
        clearTimeout(isTyping);
        isTyping = null;
        return false;
    };
    // const getActionSheetStyle = () => {
    //   return new ActionSheetStyles({
    //     layoutModeIconTint:
    //       messageComposerStyle.actionSheetLayoutModeIconTint ??
    //       theme.palette.getPrimary(),
    //     titleFont:
    //       messageComposerStyle.actionSheetTitleFont ?? theme.typography.text1,
    //     titleColor:
    //       messageComposerStyle.actionSheetTitleColor ??
    //       theme.palette.getAccent800(),
    //   });
    // };
    const GetEmojiIconView = () => {
        return (<ImageButton image={ICONS.EMOJI} imageStyle={Style.imageStyle} onClick={() => setShowEmojiboard(true)}/>);
    };
    const AuxiliaryButtonViewElem = () => {
        if (AuxiliaryButtonView)
            return (<AuxiliaryButtonView user={user} group={group} composerId={id}/>);
        else if (defaultAuxiliaryButtonOptions)
            return <View style={{ flexDirection: "row", alignItems: "center" }}>
          {defaultAuxiliaryButtonOptions}
          {!hideVoiceRecording && <RecordAudioButtonView />}
        </View>;
        return hideVoiceRecording ? null : <RecordAudioButtonView />;
    };
    const SendButtonViewElem = () => {
        if (SendButtonView)
            return <SendButtonView user={user} group={group} composerId={id}/>;
        return (<ImageButton image={ICONS.SEND} imageStyle={[
                Style.imageStyle,
                {
                    tintColor: messageComposerStyle.sendIconTint ||
                        theme.palette.getPrimary(),
                },
            ]} onClick={sendTextMessage}/>);
    };
    const SecondaryButtonViewElem = () => {
        if (SecondaryButtonView)
            return (<SecondaryButtonView user={user} group={group} composerId={id}/>);
        return (<AttachIconButton icon={attachmentIcon} show={true} onClick={() => setShowActionSheet(true)} style={{
                height: 23,
                width: 23,
                resizeMode: 'contain',
                tintColor: messageComposerStyle.attachIcontint
                    ? messageComposerStyle.attachIcontint
                    : theme.palette.getAccent500(),
            }}/>);
    };
    const PrimaryButtonView = () => {
        return inputMessage.length || hideLiveReaction ? (<SendButtonViewElem />) : (<View>
          <View style={Style.liveReactionStyle}>
            <LiveReaction show={showReaction} reaction={liveReactionIcon}/>
          </View>
          <ImageButton image={liveReactionIcon} imageStyle={[Style.imageStyle, Style.liveReactionBtnStyle]} onClick={liveReactionHandler}/>
        </View>);
    };
    const RecordAudioButtonView = () => {
        return <ImageButton image={voiceRecordingIconURL || ICONS.MICROPHONE} imageStyle={Style.imageStyle} onClick={() => setShowRecordAudio(true)}/>;
    };
    //fetch logged in user
    useEffect(() => {
        CometChat.getLoggedinUser().then((user) => (loggedInUser.current = user));
    }, []);
    useEffect(() => {
        //update receiver user
        if (user && user.getUid()) {
            chatRef.current = {
                chatWith: ReceiverTypeConstants.user,
                chatWithId: user.getUid(),
            };
            chatWith.current = ReceiverTypeConstants.user;
            chatWithId.current = user.getUid();
        }
        else if (group && group.getGuid()) {
            chatRef.current = {
                chatWith: ReceiverTypeConstants.group,
                chatWithId: group.getGuid(),
            };
            chatWith.current = ReceiverTypeConstants.group;
            chatWithId.current = group.getGuid();
        }
    }, [user, group, chatRef]);
    const handleOnClick = (CustomView) => {
        let view = CustomView(user, group, {
            uid: user?.getUid(),
            guid: group?.getGuid(),
            parentMessageId: parentMessageId,
        }, {
            onClose: () => setIsVisible(false),
        });
        bottomSheetRef.current?.togglePanel();
        setTimeout(() => {
            setCustomView(() => view);
            setIsVisible(true);
        }, 200);
    };
    useEffect(() => {
        const defaultAttachmentOptions = ChatConfigurator.dataSource.getAttachmentOptions(user, group, composerIdMap);
        setActionSheetItems(() => attachmentOptions && typeof attachmentOptions === 'function'
            ? attachmentOptions({ user, group, composerId: composerIdMap })?.map((item) => {
                if (typeof item.CustomView === 'function')
                    return {
                        ...item,
                        onPress: () => handleOnClick(item.CustomView),
                    };
                if (typeof item.onPress == 'function')
                    return {
                        ...item,
                        onPress: () => item.onPress(user, group),
                    };
                return {
                    ...item,
                    onPress: () => fileInputHandler(item.id),
                };
            })
            : defaultAttachmentOptions.map((item) => {
                if (typeof item.CustomView === 'function')
                    return {
                        ...item,
                        onPress: () => handleOnClick(item.CustomView),
                    };
                if (typeof item.onPress === 'function')
                    return {
                        ...item,
                        onPress: () => item.onPress(user, group),
                    };
                return {
                    ...item,
                    onPress: () => fileInputHandler(item.id),
                };
            }));
    }, [user, group, id, parentMessageId]);
    useEffect(() => {
        CometChatUIEventHandler.addMessageListener(editMessageListenerID, {
            ccMessageEdited: (item) => previewMessage(item),
        });
        CometChatUIEventHandler.addUIListener(UiEventListenerID, {
            ccToggleBottomSheet: (item) => {
                setIsVisible(false);
                bottomSheetRef.current?.togglePanel();
            }
        });
        return () => {
            CometChatUIEventHandler.removeMessageListener(editMessageListenerID);
            CometChatUIEventHandler.removeUIListener(UiEventListenerID);
        };
    }, []);
    const handlePannel = (item) => {
        if (item.child) {
            if (item.alignment === ViewAlignment.composerTop)
                setCustomViewHeader(() => item.child);
            else if (item.alignment === ViewAlignment.composerBottom)
                setCustomViewFooter(() => item.child);
        }
        else {
            if (item.alignment === ViewAlignment.composerTop)
                setCustomViewHeader(null);
            else if (item.alignment === ViewAlignment.composerBottom)
                setCustomViewFooter(null);
        }
    };
    useEffect(() => {
        CometChatUIEventHandler.addUIListener(uiEventListenerShow, {
            showPanel: (item) => handlePannel(item),
        });
        CometChatUIEventHandler.addUIListener(uiEventListenerHide, {
            hidePanel: (item) => handlePannel(item),
        });
        return () => {
            CometChatUIEventHandler.removeUIListener(uiEventListenerShow);
            CometChatUIEventHandler.removeUIListener(uiEventListenerHide);
        };
    }, []);
    const _sendRecordedAudio = (recordedFile) => {
        let fileObj = {
            "name": "audio-recording" + recordedFile.split("/audio-recording")[1],
            "type": "audio/mp4",
            "uri": recordedFile
        };
        console.log("fileObj", fileObj);
        sendMediaMessage(chatWithId.current, fileObj, MessageTypeConstants.audio, chatWith.current);
        console.log("Send Audio");
    };
    return (<>
        <Modal visible={isVisible} onRequestClose={() => {
            setIsVisible(false);
        }} presentationStyle={'pageSheet'}>
          {CustomView && CustomView}
        </Modal>
        <KeyboardAvoidingView key={id} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.select({ ios: 60 })}>
          <View style={[
            Style.container,
            {
                backgroundColor: theme.palette.getAccent100(),
            },
            messageComposerStyle,
        ]}>
            <EmojiBoard hideSearch={true} shouldShow={showEmojiboard} onClose={() => setShowEmojiboard(false)} emojiSelection={(emoji) => {
            let pre = inputMessage.substring(0, selectionPosition.start);
            let post = inputMessage.substring(selectionPosition.end, inputMessage.length);
            setInputMessage((prev) => selectionPosition.start && selectionPosition.end
                ? `${pre}${emoji}${post}`
                : `${prev}${emoji}`);
            setShowEmojiboard(false);
        }}/>
            <ActionSheetBoard sheetRef={bottomSheetRef} options={actionSheetItems} shouldShow={showActionSheet} onClose={() => setShowActionSheet(false)} style={{
            // ...getActionSheetStyle(),
            ...(messageComposerStyle.actionSheetSeparatorTint
                ? {
                    actionSheetSeparatorTint: messageComposerStyle.actionSheetSeparatorTint,
                }
                : {}),
        }} cometChatBottomSheetStyle={messageComposerStyle.actionSheetCancelButtonIconTint
            ? {
                lineColor: messageComposerStyle.actionSheetCancelButtonIconTint,
            }
            : {}}/>
            <RecordAudio sheetRef={bottomSheetRef} options={actionSheetItems} shouldShow={showRecordAudio} onClose={() => {
            setShowRecordAudio(false);
        }} onSend={_sendRecordedAudio} cometChatBottomSheetStyle={messageComposerStyle.actionSheetCancelButtonIconTint
            ? {
                lineColor: messageComposerStyle.actionSheetCancelButtonIconTint,
            }
            : {}} mediaRecorderStyle={mediaRecorderStyle} pauseIconUrl={pauseIconUrl} playIconUrl={playIconUrl} recordIconUrl={recordIconUrl} deleteIconUrl={deleteIconUrl} stopIconUrl={stopIconUrl} submitIconUrl={submitIconUrl}/>
            {HeaderView ? (<HeaderView />) : (CustomViewHeader && <CustomViewHeader />)}
            <View>
              <MessagePreviewTray onClose={() => setMessagePreview(null)} text={messagePreview?.message?.text} shouldShow={messagePreview != null}/>
            </View>
            <CometChatMessageInput messageInputRef={messageInputRef} text={inputMessage} placeHolderText={placeHolderText} style={messageComposerStyle} onSelectionChange={({ nativeEvent: { selection } }) => setSelectionPosition(selection)} maxHeight={maxHeight ?? null} onChangeText={textChangeHandler} SecondaryButtonView={SecondaryButtonViewElem} AuxiliaryButtonView={AuxiliaryButtonViewElem} PrimaryButtonView={PrimaryButtonView} auxiliaryButtonAlignment={auxiliaryButtonsAlignment ? auxiliaryButtonsAlignment : 'right'}/>
            {FooterView ? (<FooterView />) : (CustomViewFooter && <CustomViewFooter />)}
          </View>
        </KeyboardAvoidingView>
      </>);
});
CometChatMessageComposer.defaultProps = {
    user: undefined,
    group: undefined,
    // style: new MessageComposerStyle({}),
    attachmentIcon: ICONS.ADD,
    liveReactionIcon: ICONS.HEART,
    hideLiveReaction: false,
    disableSoundForMessages: true,
    messageComposerStyle: {},
};
//# sourceMappingURL=CometChatMessageComposer.js.map