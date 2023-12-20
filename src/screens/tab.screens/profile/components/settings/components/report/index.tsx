import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, PrimaryButton } from '../../../../../../../components/button';
import { DropdownInput } from '../../../../../../../components/inputBox';
import { Spacer } from '../../../../../../../components/tools';
import { report } from '../../../../../../../utils/constanst';
import { styles } from './styles';
import { useViewModal } from './useViewModal';

export const ReportScreen = (props) => {
  const {
    user,
    goBack,
    handleSubject,
    handleMessage,
    handleSubmit,
    loading,
    reasonOfReport
  } = useViewModal(props);
  return (
    <View style={styles.container}>
      <Spacer position='bottom' size={20}>
      <Text>Report</Text>
     </Spacer>
     <DropdownInput
        data={reasonOfReport}
        onFocus={() => {}}
        labelField="label"
        valueField="value"
        placeholder="Select Reason"
        onChange={handleSubject}
      />
       <TextInput
        placeholder='Write your message here'
        onChangeText={handleMessage}
        multiline={true}
        numberOfLines={4}
      />
      <Spacer position='top' size={20}>
      <PrimaryButton isLoading={loading} onPress={handleSubmit} title="Report" />
      </Spacer>
    </View>
  );
};
