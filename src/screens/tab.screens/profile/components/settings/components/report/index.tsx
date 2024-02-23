import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  Keyboard,
} from 'react-native';
import { PrimaryButton } from '../../../../../../../components/button';
import { DropdownInput } from '../../../../../../../components/inputBox';
import { Row, Spacer } from '../../../../../../../components/tools';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { HeaderBar } from '../../../../../../../components/header';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { ScreenParams } from '../../../../../../../types/services.types/firebase.service';

export const ReportScreen = (props: ScreenParams) => {
  const {
    handleSubject,
    handleMessage,
    handleSubmit,
    loading,
    reasonOfReport,
    message,
    subjectRef
  } = useViewModal(props);
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.wrapper} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <HeaderBar isLogo={false} isText={true} text="Report User" />
            <Spacer position="top" size={20}>
              <Text style={styles.text}>
                What is your reason for reporting?
              </Text>
            </Spacer>
            <DropdownInput
              data={reasonOfReport}
              onFocus={() => {}}
              labelField="label"
              valueField="value"
              placeholder={subjectRef.current}
              onChange={handleSubject}
            />
            <Spacer position="top" size={20}>
              <Text style={styles.text}>Reason in detail (optional)</Text>
            </Spacer>
            <Spacer position="top" size={20}>
              <TextInput
                onChangeText={handleMessage}
                placeholder="Enter here "
                style={styles.input}
                multiline={true}
                numberOfLines={10}
                textAlignVertical="top"
                returnKeyType="done"
                placeholderTextColor={colors.ui.placeholder}
                onSubmitEditing={() => {}}
                blurOnSubmit={true}
                maxLength={500}
              />
            </Spacer>
            <Row justifyContent='flex-end'>
            <Text style={styles.limitText}>{message.length}/500</Text>
           </Row>
          </View>
          <Spacer position="top" size={20}>
            <PrimaryButton
              isLoading={loading}
              onPress={handleSubmit}
              title="Report"
            />
          </Spacer>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
