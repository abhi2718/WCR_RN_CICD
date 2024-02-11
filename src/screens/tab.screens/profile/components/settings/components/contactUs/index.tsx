import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  Keyboard,
} from 'react-native';
import { Button, PrimaryButton } from '../../../../../../../components/button';
import { Spacer } from '../../../../../../../components/tools';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { HeaderBar } from '../../../../../../../components/header';
import { FlatInput } from '../../../../../../../components/inputBox';
import { colors } from '../../../../../../../infrastructure/theme/colors';

export const ContactUs = () => {
  const {
    handleSubject,
    handleMessage,
    handleSubmit,
    loading,
    subject,
    message,
  } = useViewModal();
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View>
            <HeaderBar isLogo={false} isText={true} text="Contact us" />
            <Spacer position="top" size={20}>
              <Text style={styles.text}>Subject</Text>
            </Spacer>
            <FlatInput
              placeholder="Enter here"
              onChangeText={handleSubject}
              value={subject}
            />
            <Spacer position="top" size={20}>
              <Text style={styles.text}>Message</Text>
            </Spacer>
            <Spacer position="top" size={20}>
              <TextInput
                value={message}
                onChangeText={handleMessage}
                placeholder="Enter here"
                style={styles.input}
                multiline={true}
                numberOfLines={10}
                textAlignVertical="top"
                returnKeyType="done"
                blurOnSubmit={true}
                onSubmitEditing={() => {
                }}
                placeholderTextColor={colors.ui.placeholder}
              />
            </Spacer>
          </View>
          <Spacer position="top" size={20}>
            <PrimaryButton
              isLoading={loading}
              onPress={handleSubmit}
              title="Send"
            />
          </Spacer>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};
