import React from 'react';
import { View, Text, Pressable, SafeAreaView, Image } from 'react-native';
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
import { HeaderBar } from '../../../../../components/header';
import { formatNumber } from '../../../../../utils/common.functions';
import { PreferenceyModal } from '../../../../../components/preferenceModal';
import { HeightPrefrence } from './components/heightPrefrence';
import { ErrorText } from '../../../../auth/signin/signInStyle';
export const PreferencesScreen = () => {
  const {
    answer,
    handleInputChange,
    optionsList,
    createPrefrences,
    loading,
    distanceRange,
    handleDistanceSliderChange,
    ageRange,
    handleAgeSliderChange,
    submitLoading,
    showHeightModal,
    isPrimaryDegreeValid,
    setIsPrimaryDegreeValid,
    handleHeightModal,
    openModal,
    closeModal,
    isVerificationInfoModalVisible,
    heightRange,
    setHeightRange,
    voidFun,
  } = useViewModal();
  if (loading) {
    return <FullLoader />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <PreferenceyModal
        isVisible={isVerificationInfoModalVisible}
        onClose={closeModal}
      />
      <View style={styles.padding16}>
        <HeaderBar
          isText={true}
          text="Dating Preference"
          isLogo={false}
          isLoading={submitLoading}
          button={submitLoading ? voidFun : createPrefrences}
        />
      </View>
      <View>
        <ScrollView
          style={[styles.padding16, styles.scrollSection]}
          showsVerticalScrollIndicator={false}
        >
          {optionsList.map((item, index) => {
            if (index === 0) {
              return (
                <Row
                  key={index}
                  style={styles.heading}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text style={styles.headerText}>
                    Tap here for more information
                  </Text>
                  <Pressable onPress={openModal}>
                    <Image
                      style={styles.questionMarkIcon}
                      resizeMode="contain"
                      source={require('../../../../../assets/images/icons/questionMark.png')}
                    />
                  </Pressable>
                </Row>
              );
            }
            if (index === 2) {
              return (
                <View key={index} style={styles.multiSelector}>
                  <Row alignItems="center" justifyContent="space-between">
                    <Text style={[styles.textColor, styles.optionName]}>
                      Distance Preference
                    </Text>
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
                      max={700}
                      step={100}
                      onValuesChange={handleDistanceSliderChange}
                    />
                  </Column>
                </View>
              );
            }
            if (index === 3) {
              return (
                <View key={index} style={styles.multiSelector}>
                  <Row justifyContent="space-between">
                    <Text style={[styles.textColor, styles.optionName]}>
                      Age Preference
                    </Text>
                    <Text style={styles.silderSubText}>
                      {ageRange[0]} - {ageRange[1]}
                    </Text>
                  </Row>
                  <Column justifyContent="center" alignItems="center">
                    <MultiSlider
                      values={ageRange}
                      min={18}
                      max={100}
                      step={1}
                      onValuesChange={handleAgeSliderChange}
                    />
                  </Column>
                </View>
              );
            }
            if (index === 4) {
              return (
                <View key={index} style={styles.multiSelector}>
                  <Pressable onPress={handleHeightModal}>
                    <Row justifyContent="space-between">
                      <Text style={[styles.textColor, styles.optionName]}>
                        Height Preference
                      </Text>
                      <Text style={styles.silderSubText}>
                        {formatNumber(heightRange[0])} -{' '}
                        {formatNumber(heightRange[1])}
                      </Text>
                    </Row>
                  </Pressable>
                  <HeightPrefrence
                    visible={showHeightModal}
                    handleHeightModal={handleHeightModal}
                    heightRange={heightRange}
                    setHeightRange={setHeightRange}
                  />
                </View>
              );
            }
            if (index === 5) {
              return (
                <Row
                  key={index}
                  style={styles.heading}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text style={styles.headerText}>Healthcare Professional</Text>
                </Row>
              );
            }

            if (index === 7) {
              return (
                <Column
                  key={index}
                  style={styles.itemRow}
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Text style={[styles.textColor, styles.optionName]}>
                    {item.title}
                  </Text>

                  <SafeAreaView>
                    <Row
                      style={styles.selectRow}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      {item.option!.length > 0 ? (
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
                          selectStyle={styles.selectStyle}
                          overlayStyle={styles.overlayStyle}
                          cancelTextStyle={styles.cancelTextStyle}
                          optionStyle={styles.optionStyle}
                        />
                      ) : isPrimaryDegreeValid ? (
                        <Row style={styles.degreeTypeWrapper}>
                          <ErrorText>
                            Please Select the Degree Category first
                          </ErrorText>
                        </Row>
                      ) : (
                        <Row
                          style={styles.degreeTypeWrapper}
                          justifyContent="space-between"
                        >
                          <Pressable
                            onPress={() => {
                              setIsPrimaryDegreeValid(true);
                            }}
                          >
                            <Spacer position="left" size={10}>
                              <Text style={styles.degreeTypeFont}>
                                No Preference
                              </Text>
                            </Spacer>
                          </Pressable>
                          <Image
                            resizeMode="contain"
                            style={styles.selectArrow}
                            source={require('../../../../../assets/images/settings/Next.png')}
                          />
                        </Row>
                      )}
                    </Row>
                  </SafeAreaView>
                </Column>
              );
            }
            if (index === 8) {
              return (
                <Row
                  key={index}
                  style={styles.heading}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text style={styles.headerText}>Vital Signs</Text>
                </Row>
              );
            }
            return (
              <Column
                key={index}
                style={styles.itemRow}
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Text style={[styles.textColor, styles.optionName]}>
                  {item.title}
                </Text>
                <SafeAreaView>
                  <Row
                    style={styles.selectRow}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ModalSelector
                      data={item.option!}
                      initValue={answer[item.initValue]}
                      onChange={handleInputChange}
                      style={styles.modalSelector}
                      header={
                        <Text style={styles.modalHeading}>{item.title}</Text>
                      }
                      optionContainerStyle={styles.optionContainer}
                      optionTextStyle={styles.optionText}
                      cancelStyle={styles.cancelButton}
                      selectedItemTextStyle={styles.selectedItem}
                      initValueTextStyle={styles.initValueTextStyle}
                      selectStyle={styles.selectStyle}
                      overlayStyle={styles.overlayStyle}
                      cancelTextStyle={styles.cancelTextStyle}
                      optionStyle={styles.optionStyle}
                    />
                    <Image
                      resizeMode="contain"
                      style={styles.selectArrow}
                      source={require('../../../../../assets/images/settings/Next.png')}
                    />
                  </Row>
                </SafeAreaView>
              </Column>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
