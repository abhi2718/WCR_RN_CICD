import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { LookingForStyle } from './lookingForStyle';
import { PrimaryButton } from '../../../../../components/button';
import { CheckBox } from '../../../../../components/inputBox';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useRelationshipViewModal } from './looking.ViewModel';
import { MultipleCheckBoxList } from '../../../../../components/checkbox';
import { HeaderBar } from '../../../../../components/header';

const RelationShipScreen = (props: ScreenParams) => {
  const {
    preferNotToSayflag,
    loading,
    updateUserDetails,
    relationshipList,
    handleListChange,
    handleSeletedList,
    loggInUserId,
    navigateToMaritalStatusScreen,
  } = useRelationshipViewModal(props);

  return (
    <ScreenContainer>
      <View style={LookingForStyle.container}>
        <View style={{ flex: 1 }}>
          <HeaderBar
            skip={() => navigateToMaritalStatusScreen(loggInUserId)}
          ></HeaderBar>
          <Text style={LookingForStyle.subHeader}>
            What are you looking for?
          </Text>

          <View style={{ flex: 1 }}>
            <MultipleCheckBoxList
              data={relationshipList}
              onChangeValue={handleSeletedList}
              onChangeListValue={handleListChange}
              preferNotTosayflag={preferNotToSayflag}
            />
          </View>
          <PrimaryButton
            title="Next"
            isLoading={loading}
            onPress={updateUserDetails}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default RelationShipScreen;
