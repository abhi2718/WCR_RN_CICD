import React from 'react';
import { Text, View } from 'react-native';
import { ScreenContainer } from '../../../../../components/tools';
import { LookingForStyle } from './lookingForStyle';
import { PrimaryButton } from '../../../../../components/button';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useRelationshipViewModal } from './looking.ViewModel';
import { MultipleCheckBoxList } from '../../../../../components/checkbox';
import { HeaderBar } from '../../../../../components/header';

const RelationShipScreen = (props: ScreenParams) => {
  const {
    handleListChange,
    loading,
    updateUserDetails,
    relationshipList,
    navigateToMaritalStatusScreen,
  } = useRelationshipViewModal(props);

  return (
    <ScreenContainer>
      <View style={LookingForStyle.container}>
        <View style={LookingForStyle.flex}>
          <HeaderBar skip={navigateToMaritalStatusScreen} />
          <Text style={LookingForStyle.subHeader}>
            What are you looking for?
          </Text>
          <View style={LookingForStyle.flex}>
            <MultipleCheckBoxList
              data={relationshipList}
              handleListChange={handleListChange}
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
