import React from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { Button, PrimaryButton } from '../../../../../../../components/button';
import { Spacer } from '../../../../../../../components/tools';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { HeaderBar } from '../../../../../../../components/header';
import { FlatInput } from '../../../../../../../components/inputBox';
import { colors } from '../../../../../../../infrastructure/theme/colors';

export const ContactUs = () => {
  const {
    user,
    goBack,
    handleSubject,
    handleMessage,
    handleSubmit,
    loading,
    subject,
    message,
  } = useViewModal();
  return (
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
            <Text style={styles.text}>Subject</Text>
          </Spacer>
          <Spacer position="top" size={20}>
            <TextInput
              value={message}
              onChangeText={handleMessage}
              placeholder="Enter here"
              style={styles.input}
              multiline={true}
              numberOfLines={10} // Set the number of lines to display
              textAlignVertical="top"
              returnKeyLabel="go"
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
  );
};
