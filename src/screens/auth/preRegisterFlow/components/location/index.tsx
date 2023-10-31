import React, { useState } from 'react';
import {
  ImageContainer,
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PrimaryButton } from '../../../../../components/button';
import { RadioButton } from 'react-native-paper';
import { location } from './locationStyle';
import { FlatInput } from '../../../../../components/inputBox';

const Location = (props: any) => {
  return (
    <ScreenContainer>
      <View style={location.container}>
        <View style={location.innerView}>
          <View style={{ flex: 1 }}>
            <Row
              alignItems="center"
              justifyContent="space-between"
              style={location.rowHeader}
            >
              <ImageContainer
                height={30}
                width={30}
                source={require('../../../../../assets/images/icons/arrow.png')}
              />

              <ImageContainer
                height={40}
                width={40}
                source={require('../../../../../assets/images/logo.png')}
              />
              <View />
            </Row>

            <Text style={location.subHeader}>
              Let's find matches near you
              {`\n`}
              OR {`\n`}Tell us where you call home
            </Text>
            <View style={location.inputField}>
              <FlatInput label="Country" />
              <FlatInput label="State/territory" />
              <FlatInput label="City" />
              <FlatInput label="Zip code" />
            </View>
          </View>

          <View>
            <PrimaryButton title="Next" />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Location;
