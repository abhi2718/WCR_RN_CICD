import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { addEthnicityStyle } from './AddEthnicityStyle';
import { PrimaryButton } from '../../../../../components/button';
import { MultipleCheckBoxList } from '../../../../../components/checkbox';
import { useEthnicityViewModal } from './ethnicity.ViewModal';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { HeaderBar } from '../../../../../components/header';

const AddEthnicityScreen = (props: ScreenParams) => {
  const {
    loading,
    ethnicityList,
    handleListChange,
    handleSeletedList,
    updateUserDetails,
    ethnicityflag,
  } = useEthnicityViewModal(props);
  return (
    <ScreenContainer>
      <ScrollView>
        <View style={addEthnicityStyle.container}>
          <View>
            <HeaderBar></HeaderBar>
            <Text style={addEthnicityStyle.subHeader}>Your Ethnicity</Text>
            <View style={{ height: 700 }}>
              <MultipleCheckBoxList
                data={ethnicityList}
                onChangeValue={handleSeletedList}
                onChangeListValue={handleListChange}
                preferNotTosayflag={ethnicityflag}
              />
            </View>
          </View>
          <PrimaryButton
            onPress={() => updateUserDetails()}
            title="Next"
            isLoading={loading}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default AddEthnicityScreen;
