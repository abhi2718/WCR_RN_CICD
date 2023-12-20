//@ts-ignore
import { View, TextInput, } from 'react-native';
import React, { useContext } from 'react';
import { styles } from './styles';
import { localize } from '../../resources/CometChatLocalize';
import { CometChatContext } from '../../CometChatContext';
export const CometChatMessageInput = (props) => {
    const { theme } = useContext(CometChatContext);
    const { text, placeHolderText, onChangeText, style, maxHeight, SecondaryButtonView, AuxiliaryButtonView, auxiliaryButtonAlignment, PrimaryButtonView, onSelectionChange, messageInputRef } = props;
    return (<View style={{ backgroundColor: 'transparent' }}>
      <TextInput ref={messageInputRef} style={[
            styles.textInput,
            {
                backgroundColor: style.inputBackground ?? 'transparent',
                color: style.textColor ?? theme.palette.getAccent(),
                maxHeight: maxHeight ?? 25 * 3,
            },
            text.length
                ? style.textFont ?? theme.typography.body
                : style.placeholderTextFont ?? theme.typography.body,
        ]} onChangeText={onChangeText} value={text} placeholderTextColor={style.placeholderTextColor
            ? style.placeholderTextColor
            : theme.palette.getAccent600()} multiline textAlignVertical="top" placeholder={placeHolderText} onSelectionChange={onSelectionChange}/>
      <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 6,
            borderTopWidth: 1,
            borderTopColor: style.dividerTint
                ? style.dividerTint
                : theme.palette.getAccent200(),
        }}>
        <View style={{ flexDirection: 'row' }}>
          {SecondaryButtonView && <SecondaryButtonView />}
          {auxiliaryButtonAlignment === 'left' && AuxiliaryButtonView && (<AuxiliaryButtonView />)}
        </View>
        <View style={{ flexDirection: 'row' }}>
          {auxiliaryButtonAlignment === 'right' && AuxiliaryButtonView && (<AuxiliaryButtonView />)}
          {PrimaryButtonView && <PrimaryButtonView />}
        </View>
      </View>
    </View>);
};
CometChatMessageInput.defaultProps = {
    placeHolderText: localize('ENTER_YOUR_MESSAGE_HERE'),
    auxiliaryButtonAlignment: 'right',
    style: {},
    text: '',
};
//# sourceMappingURL=CometChatMessageInput.js.map