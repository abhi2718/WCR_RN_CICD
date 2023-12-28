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
import { ActivityIndicator } from 'react-native-paper';
import { CustomCheckBox } from '../../../../../components/customCheckBox';
import MultiSelectModal from '../../../../../components/multiSelectModal';
import { Column, Row, Spacer } from '../../../../../components/tools';
import { hobbies } from '../../../../../utils/constanst';
import AddProfilePicScreen from '../../../../auth/preRegisterFlow/components/AddProfilePic';
import MultiSlider from '../preferences/components/MultiSlider';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { HeaderBar } from '../../../../../components/header';
import { colors } from '../../../../../infrastructure/theme/colors';

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
  } = useViewModal();

  return (
    <SafeAreaView style={styles.editInfoContainer}>
      <View style={styles.ph16}>
        <HeaderBar
          isLogo={false}
          isText={true}
          text="Edit info"
          button={submitLoading ? () => {} : editProfile}
        />
      </View>
      <ScrollView>
        <Text style={styles.headingText}>Media</Text>
        {/* <Spacer position="bottom" size={-30} /> */}
        <AddProfilePicScreen showHeader={false} setAllPics={setAllPics} />
        <View style={styles.container}>
          <Text style={styles.headingText}>About Me</Text>
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
            <Text style={styles.charCount}>360</Text>
          </Column>
          <Spacer position="bottom" size={20} />
          <Text style={styles.headingText}>Personal info</Text>
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
            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>DOB</Text>
              <View style={styles.fieldValueContainer}>
                <Text style={styles.fieldValue}>{userProfile.dob}</Text>
              </View>
            </Spacer>
          </Column>
          <Spacer position="bottom" size={20} />
          <Text style={styles.headingText}>Personal info</Text>

          <Column style={styles.ph16}>
            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>Gender</Text>
              <View style={styles.fieldValueContainer}>
                <Text style={styles.fieldValue}>{userProfile.gender}</Text>
              </View>
            </Spacer>

            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>Interests/Hobbies</Text>
              <View style={styles.fieldValueContainer}>
                <TouchableOpacity onPress={() => openModal('hobby')}>
                  <Text style={styles.fieldValue}>Select</Text>
                </TouchableOpacity>
                <Image
                  resizeMode="contain"
                  style={styles.nextArrow}
                  source={require('../../../../../assets/images/settings/Next.png')}
                />
              </View>
              <MultiSelectModal
                isVisible={openHobbyModal}
                data={hobbies}
                selectedItems={hobbiesList}
                onClose={() => closeModal('hobby')}
                onItemSelected={(selected) =>
                  handleItemSelected(selected, 'hobby')
                }
              />
              <Text>{hobbiesList.join(', ')}</Text>
            </Spacer>

            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>Country</Text>
              <View style={styles.fieldValueContainer}>
                <Text style={styles.fieldValue}>{user?.address?.country}</Text>
              </View>
            </Spacer>

            <Spacer position="top" size={10}>
              <Text style={styles.fieldName}>State/Territy</Text>
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
                  optionContainerStyle={styles.optionContainer}
                  optionTextStyle={styles.optionText}
                  cancelStyle={styles.cancelButton}
                  selectedItemTextStyle={styles.selectedItem}
                  initValueTextStyle={styles.initValueTextStyle}
                  selectStyle={{ borderWidth: 0 }}
                />
                <Image
                  resizeMode="contain"
                  style={styles.nextArrow}
                  source={require('../../../../../assets/images/settings/Next.png')}
                />
              </Row>
            </Spacer>
          </Column>

          <Column>
            <Spacer position="bottom" size={10}>
              <Text>City</Text>
              <TextInput
                placeholder="City"
                value={userProfile.city}
                onChangeText={(text: string) =>
                  _handleInputChange(text, 'city')
                }
              />
            </Spacer>
            <Spacer position="bottom" size={10}>
              <Text>Zipcode</Text>
              <TextInput
                placeholder={
                  user.address.country === 'USA' ? 'EX: 55555' : 'Ex: M4G3B2'
                }
                value={userProfile.zipcode}
                maxLength={user.address.country === 'USA' ? 5 : 6}
                onChangeText={(text: string) =>
                  _handleInputChange(text, 'zipcode')
                }
              />
            </Spacer>
          </Column>
          <Column>
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
          {optionsList.map((item, index) => {
            if (index === 2) {
              return (
                <Column key={index}>
                  <Spacer position="bottom" size={10}>
                    <Text>Job Title</Text>
                    <TextInput
                      placeholder="Job Title"
                      value={userProfile.jobTitle}
                      onChangeText={(text: string) =>
                        _handleInputChange(text, 'jobTitle')
                      }
                    />
                  </Spacer>
                </Column>
              );
            }
            if (index === 3) {
              return (
                <Column key={index}>
                  <Spacer position="bottom" size={10}>
                    <Text>Institution/School/Practice Name</Text>
                    <TextInput
                      placeholder="Institution/School/Practice Name"
                      value={userProfile.institution}
                      onChangeText={(text: string) =>
                        _handleInputChange(text, 'institution')
                      }
                    />
                  </Spacer>
                </Column>
              );
            }
            if (index === 4) {
              return (
                <Spacer key={index} position="bottom" size={20}>
                  <Row justifyContent="space-between">
                    <Text>Height</Text>
                    <Text>{heightRange[0]}</Text>
                  </Row>
                  <Column justifyContent="center" alignItems="center">
                    <MultiSlider
                      values={heightRange}
                      min={4}
                      max={7}
                      step={0.1}
                      onValuesChange={handleHeightSliderChange}
                    />
                  </Column>
                </Spacer>
              );
            }
            if (item.title === 'Ethnicity') {
              return (
                <View key={index}>
                  <Row justifyContent="space-between">
                    <Text>{item.title}</Text>
                    <TouchableOpacity onPress={() => openModal('ethnicity')}>
                      <Text>Select</Text>
                    </TouchableOpacity>
                  </Row>
                  <MultiSelectModal
                    isVisible={ethnicityModalVisible}
                    data={ethnicity}
                    selectedItems={selectedEthnicityItems}
                    onClose={() => closeModal('ethnicity')}
                    onItemSelected={(selected) =>
                      handleItemSelected(selected, 'ethnicity')
                    }
                  />
                  <Text>{selectedEthnicityItems.join(', ')}</Text>
                </View>
              );
            }
            if (item.title === 'Relationship level') {
              return (
                <View key={index}>
                  <Row justifyContent="space-between">
                    <Text>{item.title}</Text>
                    <TouchableOpacity
                      onPress={() => openModal('relationshipLevel')}
                    >
                      <Text>Select</Text>
                    </TouchableOpacity>
                  </Row>
                  <MultiSelectModal
                    isVisible={relationshipLevelModalVisible}
                    data={relationship}
                    selectedItems={selectedrelationshipLevelItems}
                    onClose={() => closeModal('relationshipLevel')}
                    onItemSelected={(selected) =>
                      handleItemSelected(selected, 'relationshipLevel')
                    }
                  />
                  <Text>{selectedrelationshipLevelItems.join(', ')}</Text>
                </View>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
