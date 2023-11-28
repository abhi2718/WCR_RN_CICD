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
    loggInUserId,
    navigateToRelationshipScreen,
  } = useEthnicityViewModal(props);
  return (
    <ScreenContainer>
      <View style={addEthnicityStyle.container}>
        <View style={{ flex: 1 }}>
          <HeaderBar
            skip={() => navigateToRelationshipScreen(loggInUserId)}
          ></HeaderBar>
          <Text style={addEthnicityStyle.subHeader}>
            Tell us your ethnicity
          </Text>
          <View style={{ flex: 1 }}>
            <MultipleCheckBoxList
              data={ethnicityList}
              onChangeValue={handleSeletedList}
              onChangeListValue={handleListChange}
              preferNotTosayflag={ethnicityflag}
            />
          </View>
        </View>
        <PrimaryButton
          onPress={updateUserDetails}
          title="Next"
          isLoading={loading}
        />
      </View>
    </ScreenContainer>
  );
};

export default AddEthnicityScreen;
