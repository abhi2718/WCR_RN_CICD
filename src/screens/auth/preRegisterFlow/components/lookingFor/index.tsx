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
  } = useRelationshipViewModal(props);

  return (
    <ScreenContainer>
      <ScrollView>
        <View style={LookingForStyle.container}>
        <HeaderBar></HeaderBar>
          <View>
            <Text style={LookingForStyle.subHeader}>
              What are you looking for?
            </Text>

            <View style={{ height: 700 }}>
              <MultipleCheckBoxList
                data={relationshipList}
                onChangeValue={handleSeletedList}
                onChangeListValue={handleListChange}
                preferNotTosayflag={preferNotToSayflag}
              />
            </View>
          </View>
          <PrimaryButton title="Next" isLoading={loading}
           onPress={() => updateUserDetails()} />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default RelationShipScreen;
