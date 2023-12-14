import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
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
import { HeaderBar, HeaderDeck } from '../../../../../components/header';

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
      <View style={styles.padding16}>
        <HeaderBar
          button={submitLoading ? () => {} : createPrefrences}
          isText={true}
          text="Preference"
          isLogo={false}
          isLoading={submitLoading}
        />
      </View>
      <View>
        {/* <Pressable onPress={submitLoading ? () => {} : createPrefrences}>
          <Row>
            <Text>Save</Text>
            {submitLoading && <ActivityIndicator />}
          </Row>
        </Pressable> */}
        <Text style={styles.headerText}>Healthcare Professional</Text>
        <ScrollView
          style={[styles.padding16, styles.scrollSection]}
          showsVerticalScrollIndicator={false}
        >
          {optionsList.map((item, index) => {
            if (index === 2) {
              return (
                <View style={styles.multiSelector}>
                  <Row alignItems="center" justifyContent="space-between">
                    <Text>Distance preference</Text>
                    {distanceRange[0] === 600 ? (
                      <Text style={styles.silderSubText}>No Max</Text>
                    ) : (
                      <View>
                        {distanceRange[0] === 'No Max' ? (
                          <Text style={styles.silderSubText}>
                            {distanceRange[0]}
                          </Text>
                        ) : (
                          <Text style={styles.silderSubText}>
                            {distanceRange[0]} Miles
                          </Text>
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
                </View>
              );
            }
            if (index === 3) {
              return (
                <View style={styles.multiSelector}>
                  <Row justifyContent="space-between">
                    <Text>Age preference</Text>
                    <Text style={styles.silderSubText}>
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
                </View>
              );
            }
            if (index === 4) {
              return (
                <View style={styles.multiSelector}>
                  <Row justifyContent="space-between">
                    <Text>Height preference</Text>
                    <Text style={styles.silderSubText}>
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
                </View>
              );
            }
            return (
              <Row
                style={styles.itemRow}
                justifyContent="space-between"
                alignItems="center"
              >
                <Text style={[styles.textColor, styles.optionName]}>
                  {item.title}
                </Text>
                <SafeAreaView>
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
                    selectStyle={{ borderWidth: 0 }}
                  />
                </SafeAreaView>
              </Row>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
