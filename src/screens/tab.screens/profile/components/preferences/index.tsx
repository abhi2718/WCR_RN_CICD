import React from 'react';
import { View, Text, Pressable } from 'react-native';
import {
  Column,
  FullLoader,
  Row,
  Spacer,
} from '../../../../../components/tools';
import { useViewModal } from './useViewModal';
import { styles } from './styles';
import ModalSelector from 'react-native-modal-selector';
import { ScrollView } from 'react-native-gesture-handler';
import MultiSlider from './components/MultiSlider';
import { ActivityIndicator } from 'react-native-paper';

export const PreferencesScreen = () => {
  const {
    goBack,
    answer,
    handleInputChange,
    optionsList,
    createPrefrences,
    loading,
    distanceRange,
    handleDistanceSliderChange,
    ageRange,
    handleAgeSliderChange,
    handleHeightSliderChange,
    heightRange,
    submitLoading,
  } = useViewModal();

  if (loading) {
    return <FullLoader />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={submitLoading ? () => {} : createPrefrences}>
          <Row>
            <Text>Save</Text>
            {submitLoading && <ActivityIndicator />}
          </Row>
        </Pressable>
        <ScrollView>
          {optionsList.map((item, index) => {
            if (index === 2) {
              return (
                <Spacer key={index} position="bottom" size={20}>
                  <Row justifyContent="space-between">
                    <Text>Distance preference</Text>
                    {distanceRange[0] === 600 ? (
                      <Text>No Max</Text>
                    ) : (
                      <View>
                        {distanceRange[0] === 'No Max' ? (
                          <Text>{distanceRange[0]}</Text>
                        ) : (
                          <Text>{distanceRange[0]} Miles</Text>
                        )}
                      </View>
                    )}
                  </Row>
                  <Column justifyContent="center" alignItems="center">
                    <MultiSlider
                      values={distanceRange}
                      min={100}
                      max={600}
                      step={100}
                      onValuesChange={handleDistanceSliderChange}
                    />
                  </Column>
                </Spacer>
              );
            }
            if (index === 3) {
              return (
                <Spacer key={index} position="bottom" size={20}>
                  <Row justifyContent="space-between">
                    <Text>Age preference</Text>
                    <Text>
                      {ageRange[0]} - {ageRange[1]}
                    </Text>
                  </Row>
                  <Column justifyContent="center" alignItems="center">
                    <MultiSlider
                      values={ageRange}
                      min={18}
                      max={60}
                      step={1}
                      onValuesChange={handleAgeSliderChange}
                    />
                  </Column>
                </Spacer>
              );
            }
            if (index === 4) {
              return (
                <Spacer key={index} position="bottom" size={20}>
                  <Row justifyContent="space-between">
                    <Text>Height preference</Text>
                    <Text>
                      {heightRange[0]} - {heightRange[1]}
                    </Text>
                  </Row>
                  <Column justifyContent="center" alignItems="center">
                    <MultiSlider
                      values={heightRange}
                      min={3}
                      max={7}
                      step={0.1}
                      onValuesChange={handleHeightSliderChange}
                    />
                  </Column>
                </Spacer>
              );
            }
            return (
              <Spacer key={index} position="bottom" size={20}>
                <Row justifyContent="space-between" alignItems="center">
                  <Text>{item.title}</Text>
                  <ModalSelector
                    data={item.option!}
                    initValue={answer[item.initValue]}
                    onChange={handleInputChange}
                    style={styles.modalSelector}
                    optionContainerStyle={styles.optionContainer}
                    optionTextStyle={styles.optionText}
                    cancelStyle={styles.cancelButton}
                    selectedItemTextStyle={styles.selectedItem}
                    initValueTextStyle={styles.initValueTextStyle}
                  />
                </Row>
              </Spacer>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
