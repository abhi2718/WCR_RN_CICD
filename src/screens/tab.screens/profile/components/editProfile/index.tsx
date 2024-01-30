import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ModalSelector from 'react-native-modal-selector';
import { CustomCheckBox } from '../../../../../components/customCheckBox';
import MultiSelectModal from '../../../../../components/multiSelectModal';
import {
  Column,
  Row,
  Spacer,
  dimensions,
} from '../../../../../components/tools';
import AddProfilePicScreen from '../../../../auth/preRegisterFlow/components/AddProfilePic';
import MultiSlider from '../preferences/components/MultiSlider';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { HeaderBar } from '../../../../../components/header';
import { colors } from '../../../../../infrastructure/theme/colors';
import { formatNumber } from '../../../../../utils/common.functions';
import { HeightModal } from './components/heightModal';

export const EditProfile = () => {
  const {
    answer,
    optionsList,
    handleInputChange,
    editProfile,
    distanceRange,
    handleDistanceSliderChange,
    ageRange,
    handleAgeSliderChange,
    handleHeightSliderChange,
    heightRange,
    ethnicity,
    handleItemSelected,
    closeModal,
    openModal,
    ethnicityModalVisible,
    selectedEthnicityItems,
    relationshipLevelModalVisible,
    selectedrelationshipLevelItems,
    relationship,
    userProfile,
    _handleInputChange,
    user,
    formatMobile,
    openAgePickerModal,
    handleDateChange,
    setAllPics,
    openHobbyModal,
    hobbiesList,
    statesList,
    setUserProfile,
    submitLoading,
    letterCount,
    hobbies,
    showHeightModal,
    setShowHeightModal,
    _setShowHeightModal,
    height,
    setheight,
  } = useViewModal();
  return (
    <SafeAreaView style={styles.editInfoContainer}>
      <View style={styles.ph16}>
        <HeaderBar
          isLogo={false}
          isText={true}
          isLoading={submitLoading}
          text="Edit info"
          button={submitLoading ? () => {} : editProfile}
        />
      </View>
      <ScrollView>
        <Text style={styles.headingText}>Photos</Text>
        <AddProfilePicScreen showHeader={false} setAllPics={setAllPics} />
        <View style={styles.container}>
          <Text style={styles.headingText}>About Yourself</Text>
          <Column>
            <TextInput
              placeholder="About Me"
              value={userProfile.aboutMe}
              onChangeText={(text: string) =>
                _handleInputChange(text, 'aboutMe')
              }
              textAlignVertical="top"
              style={styles.aboutInput}
              multiline={true}
              maxLength={150}
              numberOfLines={10}
              returnKeyLabel="go"
              placeholderTextColor={colors.ui.placeholder}
            />
            <Text style={styles.charCount}>{letterCount}</Text>
          </Column>
          <Spacer position="bottom" size={20} />
          <Text style={styles.headingText}>Personal Info</Text>
          <Spacer position="bottom" size={10} />
          <Column style={styles.ph16}>
            <Text style={styles.fieldName}>First Name</Text>
            <View style={styles.fieldValueContainer}>
              <Text style={styles.fieldValue}>
                {user?.profile?.name?.first}
              </Text>
            </View>
            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>Last Name</Text>
              <View style={styles.fieldValueContainer}>
                <Text style={styles.fieldValue}>
                  {user?.profile?.name?.last}
                </Text>
              </View>
            </Spacer>
            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>Email Address</Text>
              <View style={styles.fieldValueContainer}>
                <Text style={styles.fieldValue}>{user?.profile?.email}</Text>
              </View>
            </Spacer>
            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>Display Name</Text>
              <View style={styles.fieldValueContainer}>
                <TextInput
                  placeholder="Display Name"
                  value={userProfile.displayName}
                  onChangeText={(text: string) =>
                    _handleInputChange(text, 'displayName')
                  }
                  style={styles.fieldValue}
                />
                <Image
                  resizeMode="contain"
                  style={styles.nextArrow}
                  source={require('../../../../../assets/images/settings/Next.png')}
                />
              </View>
            </Spacer>
            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>Phone No</Text>
              <View style={styles.fieldValueContainer}>
                <TextInput
                  placeholder="Phone No"
                  value={userProfile.phone}
                  onChangeText={(text: string) =>
                    _handleInputChange(formatMobile(text), 'phone')
                  }
                  style={styles.fieldValue}
                />
                <Image
                  resizeMode="contain"
                  style={styles.nextArrow}
                  source={require('../../../../../assets/images/settings/Next.png')}
                />
              </View>
            </Spacer>
          </Column>
          <Text style={styles.headingText}>DOB</Text>
          <Spacer position="top" size={10}>
            <Pressable onPress={() => {}}>
              <Row>
                <Column>
                  <Spacer position="top" size={10}>
                    <Text style={styles.fieldName}>{userProfile.dob}</Text>
                  </Spacer>
                </Column>
                <Image
                  resizeMode="contain"
                  style={styles.nextArrow}
                  source={require('../../../../../assets/images/settings/Next.png')}
                />
              </Row>
            </Pressable>
          </Spacer>
          <Text style={styles.headingText}>Height</Text>

          <Spacer position="top" size={10}>
            <HeightModal
              showHeightModal={showHeightModal}
              setShowHeightModal={setShowHeightModal}
              setheight={setheight}
            />
            <Pressable onPress={() => _setShowHeightModal()}>
              <Row>
                <Column>
                  <Spacer position="top" size={10}>
                    <Text style={styles.fieldName}>
                      {height?.feet}'{height?.inch}
                    </Text>
                  </Spacer>
                </Column>
                <Text>Update</Text>

                <Image
                  resizeMode="contain"
                  style={styles.nextArrow}
                  source={require('../../../../../assets/images/settings/Next.png')}
                />
              </Row>
            </Pressable>
          </Spacer>
          <Text style={styles.headingText}>Gender</Text>
          <Spacer position="top" size={10}>
            <View style={styles.fieldValueContainer}>
              <Row>
                <Column>
                  <Text style={styles.fieldValue}>{userProfile.gender}</Text>
                </Column>

                <Image
                  resizeMode="contain"
                  style={styles.nextArrow}
                  source={require('../../../../../assets/images/settings/Next.png')}
                />
              </Row>
            </View>
          </Spacer>

          <Text style={styles.headingText}>Identity/Orientation</Text>
          <Column style={styles.ph16}>
            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>Country</Text>
              <View style={styles.fieldValueContainer}>
                <Text style={styles.fieldValue}>{user?.address?.country}</Text>
              </View>
            </Spacer>
            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>State/Territory</Text>
              <Row
                style={[styles.selectRow, styles.fieldValueContainer]}
                justifyContent="space-between"
                alignItems="center"
              >
                <ModalSelector
                  data={statesList}
                  initValue={userProfile.state}
                  onChange={(oldState) => {
                    _handleInputChange(oldState.label, 'state');
                    _handleInputChange('', 'city');
                    _handleInputChange('', 'zipcode');
                  }}
                  style={styles.modalSelector}
                  cancelText="Close"
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
                  style={styles.nextArrow}
                  source={require('../../../../../assets/images/settings/Next.png')}
                />
              </Row>
            </Spacer>
            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>City</Text>
              <View style={styles.fieldValueContainer}>
                <TextInput
                  placeholder="City"
                  value={userProfile.city}
                  onChangeText={(text: string) =>
                    _handleInputChange(text, 'city')
                  }
                  style={styles.fieldValue}
                />
              </View>
            </Spacer>
            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>Zipcode</Text>
              <View style={styles.fieldValueContainer}>
                <TextInput
                  placeholder={
                    user.address.country === 'USA' ? 'EX: 55555' : 'Ex: M4G3B2'
                  }
                  value={userProfile.zipcode}
                  maxLength={user.address.country === 'USA' ? 5 : 6}
                  onChangeText={(text: string) =>
                    _handleInputChange(text, 'zipcode')
                  }
                  style={styles.fieldValue}
                />
              </View>
            </Spacer>
            <Spacer position="top" size={10}>
              <CustomCheckBox
                onPress={() => {
                  setUserProfile((oldstate) => {
                    return {
                      ...oldstate,
                      showGender: !userProfile.showGender,
                    };
                  });
                }}
                isChecked={userProfile.showGender}
                label="Show Gender on profile"
              />
            </Spacer>
            <CustomCheckBox
              onPress={() => {
                setUserProfile((oldstate) => {
                  return {
                    ...oldstate,
                    showSexualOrientation: !userProfile.showSexualOrientation,
                  };
                });
              }}
              isChecked={userProfile.showGender}
              label="Show Gender Pronoun on profile"
            />
            <CustomCheckBox
              onPress={() => {
                setUserProfile((oldstate) => {
                  return {
                    ...oldstate,
                    showSexualOrientation: !userProfile.showSexualOrientation,
                  };
                });
              }}
              isChecked={userProfile.showSexualOrientation}
              label="Show Sexual orientation on profile"
            />
          </Column>

          <Column style={styles.ph16}>
            {optionsList.map((item, index) => {
              if (index === 2) {
                return (
                  <Spacer key={index} position="top" size={10}>
                    <Text style={styles.fieldName}>Job Title</Text>
                    <View style={styles.fieldValueContainer}>
                      <TextInput
                        placeholder="Job Title"
                        value={userProfile.jobTitle}
                        onChangeText={(text: string) =>
                          _handleInputChange(text, 'jobTitle')
                        }
                        style={styles.fieldValue}
                      />
                    </View>
                  </Spacer>
                );
              }
              if (index === 3) {
                return (
                  <Spacer key={index} position="top" size={10}>
                    <Text style={styles.fieldName}>
                      Institution/School/Practice Name
                    </Text>
                    <View style={styles.fieldValueContainer}>
                      <TextInput
                        placeholder="Institution/School/Practice Name"
                        value={userProfile.institution}
                        onChangeText={(text: string) =>
                          _handleInputChange(text, 'institution')
                        }
                        style={styles.fieldValue}
                      />
                    </View>
                  </Spacer>
                );
              }
              if (index === 4) {
                return (
                  <Spacer key={index} position="top" size={20}>
                    {/* <Row justifyContent="space-between">
                      <Text style={styles.fieldName}>Height</Text>
                      <Text style={styles.fieldName}>
                        {formatNumber(heightRange[0])}
                      </Text>
                    </Row>
                    <Column justifyContent="center" alignItems="center">
                      <MultiSlider
                        values={heightRange}
                        min={4}
                        max={7}
                        step={0.1}
                        onValuesChange={handleHeightSliderChange}
                      />
                    </Column> */}
                  </Spacer>
                );
              }
              if (item.title === 'Ethnicity') {
                return (
                  <Spacer key={index} position="top" size={10}>
                    <Spacer position="top" size={10}>
                      <Text style={styles.fieldName}>{item.title}</Text>
                      <TouchableOpacity onPress={() => openModal('ethnicity')}>
                        <Row
                          style={[styles.selectRow, styles.fieldValueContainer]}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <View>
                            <Spacer position="top" size={5} />
                            {selectedEthnicityItems.length === 0 ? (
                              <Text style={styles.fieldValue}>Select</Text>
                            ) : selectedEthnicityItems.length > 2 ? (
                              <Text style={styles.fieldValue}>
                                {selectedEthnicityItems[0]}
                                {' , '}
                                {selectedEthnicityItems[1]}...
                              </Text>
                            ) : (
                              <Text style={styles.fieldValue}>
                                {selectedEthnicityItems.join(', ')}
                              </Text>
                            )}
                            <Spacer position="top" size={5} />
                          </View>
                          <Image
                            resizeMode="contain"
                            style={styles.nextArrow}
                            source={require('../../../../../assets/images/settings/Next.png')}
                          />
                        </Row>
                      </TouchableOpacity>
                    </Spacer>
                    <MultiSelectModal
                      isVisible={ethnicityModalVisible}
                      data={ethnicity}
                      modalHeading="Ethnicity"
                      selectedItems={selectedEthnicityItems}
                      onClose={() => closeModal('ethnicity')}
                      onItemSelected={(selected) =>
                        handleItemSelected(selected, 'ethnicity')
                      }
                    />
                  </Spacer>
                );
              }
              if (item.title === 'Hobby') {
                return (
                  <Spacer key={index} position="top" size={10}>
                    <Spacer key={index} position="top" size={10}>
                      <Text style={styles.fieldName}>Interests/Hobbies</Text>
                      <TouchableOpacity onPress={() => openModal('hobby')}>
                        <Row
                          style={[styles.selectRow, styles.fieldValueContainer]}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <View>
                            <Spacer position="top" size={5} />
                            {hobbiesList.length === 0 ? (
                              <Text style={styles.fieldValue}>Select</Text>
                            ) : hobbiesList.length > 2 ? (
                              <Text style={styles.fieldValue}>
                                {hobbiesList[0]}
                                {' , '}
                                {hobbiesList[1]}...
                              </Text>
                            ) : (
                              <Text style={styles.fieldValue}>
                                {hobbiesList.join(', ')}
                              </Text>
                            )}
                            <Spacer position="top" size={5} />
                          </View>

                          <Image
                            resizeMode="contain"
                            style={styles.nextArrow}
                            source={require('../../../../../assets/images/settings/Next.png')}
                          />
                        </Row>
                      </TouchableOpacity>
                    </Spacer>
                    <MultiSelectModal
                      isVisible={openHobbyModal}
                      data={hobbies}
                      modalHeading="Interests/Hobbies"
                      selectedItems={hobbiesList}
                      onClose={() => closeModal('hobby')}
                      onItemSelected={(selected) =>
                        handleItemSelected(selected, 'hobby')
                      }
                    />
                  </Spacer>
                );
              }
              if (item.title === 'Relationship level') {
                return (
                  <Spacer key={index} position="top" size={10}>
                    <Spacer position="top" size={10}>
                      <Text style={styles.fieldName}>{item.title}</Text>
                      <TouchableOpacity
                        onPress={() => openModal('relationshipLevel')}
                      >
                        <Row
                          style={[styles.selectRow, styles.fieldValueContainer]}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <View>
                            <Spacer position="top" size={5} />
                            {selectedrelationshipLevelItems.length === 0 ? (
                              <Text style={styles.fieldValue}>Select</Text>
                            ) : selectedrelationshipLevelItems.length > 1 ? (
                              <Row>
                                <Text style={styles.fieldValue}>
                                  {selectedrelationshipLevelItems[0]}...
                                </Text>
                              </Row>
                            ) : (
                              <Text
                                style={{
                                  ...styles.fieldValue,
                                  flexWrap: 'wrap',
                                }}
                              >
                                {selectedrelationshipLevelItems.join(', ')}
                              </Text>
                            )}
                            <Spacer position="top" size={5} />
                          </View>
                          <Image
                            resizeMode="contain"
                            style={styles.nextArrow}
                            source={require('../../../../../assets/images/settings/Next.png')}
                          />
                        </Row>
                      </TouchableOpacity>
                    </Spacer>
                    <MultiSelectModal
                      isVisible={relationshipLevelModalVisible}
                      data={relationship}
                      selectedItems={selectedrelationshipLevelItems}
                      onClose={() => closeModal('relationshipLevel')}
                      onItemSelected={(selected) =>
                        handleItemSelected(selected, 'relationshipLevel')
                      }
                    />
                  </Spacer>
                );
              }

              return (
                <View key={index}>
                  <Spacer position="top" size={10}>
                    <Text style={styles.fieldName}>{item.title}</Text>
                    <Row
                      style={[styles.selectRow, styles.fieldValueContainer]}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <ModalSelector
                        data={item.option!}
                        initValue={answer[item.initValue]}
                        onChange={handleInputChange}
                        style={styles.modalSelector}
                        cancelText="Close"
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
                        style={styles.nextArrow}
                        source={require('../../../../../assets/images/settings/Next.png')}
                      />
                    </Row>
                  </Spacer>
                </View>
              );
            })}
          </Column>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
