import React from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { Button, PrimaryButton } from '../../../../../../../components/button';
import { DropdownInput } from '../../../../../../../components/inputBox';
import { Spacer } from '../../../../../../../components/tools';
import { report } from '../../../../../../../utils/constanst';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { HeaderBar } from '../../../../../../../components/header';
import { colors } from '../../../../../../../infrastructure/theme/colors';

export const ReportScreen = () => {
  const {
    user,
    goBack,
    handleSubject,
    handleMessage,
    handleSubmit,
    loading,
    reasonOfReport,
  } = useViewModal();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <HeaderBar isLogo={false} isText={true} text="Report User" />
          <Spacer position="top" size={20}>
            <Text style={styles.text}>Subject</Text>
          </Spacer>

          <DropdownInput
            data={reasonOfReport}
            onFocus={() => {}}
            labelField="label"
            valueField="value"
            placeholder="Select Reason"
            onChange={handleSubject}
          />

          <Spacer position="top" size={20}>
            <Text style={styles.text}>Subject</Text>
          </Spacer>
          <Spacer position="top" size={20}>
            <TextInput
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
            title="Report"
          />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};
