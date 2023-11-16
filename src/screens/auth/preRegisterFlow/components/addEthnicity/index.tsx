import React from 'react';
import { Image, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { addEthnicityStyle } from './AddEthnicityStyle';
import { PrimaryButton } from '../../../../../components/button';
import { MultiSelectCheckBoxList } from '../../../../../components/checkbox';
import { useEthnicityViewModal } from './ethnicity.ViewModal';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';

const AddEthnicityScreen = (props: ScreenParams) => {
  const { ethnicityList, handleListChange, handleSeletedList } = useEthnicityViewModal(props);
  return (
    <ScreenContainer>
      <View style={addEthnicityStyle.container}>
        <View>
          <Row justifyContent="space-between" alignItems="center">
            <Image
              style={addEthnicityStyle.arrow}
              source={require('../../../../../assets/images/icons/arrow.png')}
            />
            <Image
              style={addEthnicityStyle.logo}
              source={require('../../../../../assets/images/logo.png')}
            />
            <Text style={addEthnicityStyle.skipBtn}>Skip</Text>
          </Row>
          <Text style={addEthnicityStyle.subHeader}>Your Ethnicity</Text>
          <View style={{ height: 1000 }}>
            <MultiSelectCheckBoxList
              data={ethnicityList}
              onChangeValue={handleSeletedList}
              onChangeListValue={handleListChange}
            />
          </View>
        </View>
        <PrimaryButton title="Next" />
      </View>
    </ScreenContainer>
  );
};

export default AddEthnicityScreen;
