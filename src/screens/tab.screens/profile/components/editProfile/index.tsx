import React from 'react';
import {
  Pressable,
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
    submitLoading
  } = useViewModal();

  return (
    <View style={styles.picWrapper}>
      <Pressable onPress={submitLoading?()=>{}:editProfile}>
        <Row>
          <Text>Save</Text>
          {
            submitLoading && <ActivityIndicator />
          }
       </Row>
      </Pressable>
      <ScrollView>
        <AddProfilePicScreen showHeader={false} setAllPics={setAllPics} />
        <View style={styles.container}>
          <Column>
            <Text>About Me</Text>
            <TextInput
              placeholder="About Me"
              value={userProfile.aboutMe}
              onChangeText={(text: string) =>
                _handleInputChange(text, 'aboutMe')
              }
            />
          </Column>
          <Column>
            <Text>Personal info</Text>
            <Row justifyContent="space-between">
              <Text>First Name</Text>
              <Text>{user?.profile?.name?.first}</Text>
            </Row>
            <Spacer position="top" size={10}>
              <Row justifyContent="space-between">
                <Text>Last Name</Text>
                <Text>{user?.profile?.name?.last}</Text>
              </Row>
              <Spacer position="top" size={10}>
                <Row justifyContent="space-between">
                  <Text>Email Address</Text>
                  <Text>{user?.profile?.email}</Text>
                </Row>
              </Spacer>
            </Spacer>
          </Column>
          <Spacer position="top" size={10}>
            <Column>
              <Spacer position="bottom" size={10}>
                <Row>
                  <Text>Display Name</Text>
                </Row>
              </Spacer>
              <Row>
                <TextInput
                  placeholder="Display Name"
                  value={userProfile.displayName}
                  onChangeText={(text: string) =>
                    _handleInputChange(text, 'displayName')
                  }
                />
              </Row>
            </Column>
          </Spacer>
          <Spacer position="top" size={10}>
            <Column>
              <Spacer position="bottom" size={10}>
                <Text>Phone No</Text>
                <TextInput
                  placeholder="Phone No"
                  value={userProfile.phone}
                  onChangeText={(text: string) =>
                    _handleInputChange(formatMobile(text), 'phone')
                  }
                />
              </Spacer>
            </Column>
          </Spacer>
          <Spacer position="top" size={10}>
            <Row justifyContent="space-between">
              <Text>DOB</Text>
              <Text>{userProfile.dob}</Text>
            </Row>
          </Spacer>
          <Spacer position="top" size={10}>
            <Row justifyContent="space-between">
              <Text>Gender</Text>
              <Text>{userProfile.gender}</Text>
            </Row>
          </Spacer>
          <Column>
            <View>
              <Row justifyContent="space-between">
                <Text>Interests/Hobbies</Text>
                <TouchableOpacity onPress={() => openModal('hobby')}>
                  <Text>Select</Text>
                </TouchableOpacity>
              </Row>
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
            </View>
          </Column>
          <Column>
            <Text>Location Details</Text>
            <Row justifyContent="space-between">
              <Text>Country</Text>
              <Text>{user?.address?.country}</Text>
            </Row>
            <Spacer position="bottom" size={20}>
              <Row justifyContent="space-between" alignItems="center">
                <Text>State/Territy</Text>
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
                />
              </Row>
            </Spacer>
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
    </View>
  );
};
