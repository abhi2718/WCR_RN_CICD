import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, PrimaryButton } from '../../../../../../../components/button';
import { Spacer } from '../../../../../../../components/tools';
import { styles } from './styles';
import { useViewModal } from './useViewModal';

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
    <View style={styles.container}>
      <Spacer position='bottom' size={20}>
      <Text>Contact Us</Text>
     </Spacer>
      <TextInput
        placeholder='Subject'
        onChangeText={handleSubject}
        value={subject}
      />
       <TextInput
        placeholder='Write your message here'
        onChangeText={handleMessage}
        multiline={true}
        numberOfLines={4}
        value={message}
      />
      <Spacer position='top' size={20}>
      <PrimaryButton isLoading={loading} onPress={handleSubmit} title="Send" />
      </Spacer>
    </View>
  );
};
