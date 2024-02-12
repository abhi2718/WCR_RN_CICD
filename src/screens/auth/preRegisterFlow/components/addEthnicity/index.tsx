import React from 'react';
import { Text, View } from 'react-native';
import { ScreenContainer } from '../../../../../components/tools';
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
    updateUserDetails,
    navigateToRelationshipScreen,
  } = useEthnicityViewModal(props);
  return (
    <ScreenContainer>
      <View style={addEthnicityStyle.container}>
        <View style={addEthnicityStyle.wrapper}>
          <HeaderBar skip={() => navigateToRelationshipScreen()}></HeaderBar>
          <Text style={addEthnicityStyle.subHeader}>
            Tell us your ethnicity
          </Text>
          <View style={addEthnicityStyle.wrapper}>
            <MultipleCheckBoxList
              data={ethnicityList}
              handleListChange={handleListChange}
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
