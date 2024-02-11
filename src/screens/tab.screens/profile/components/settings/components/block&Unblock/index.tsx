import React from 'react';
import { View, Text, SafeAreaView, Pressable, Image } from 'react-native';
import { DropdownInput } from '../../../../../../../components/inputBox';
import {
  Column,
  FullLoader,
  Row,
  Spacer,
} from '../../../../../../../components/tools';
import { BlockedUser, Chip } from './components';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { HeaderBar } from '../../../../../../../components/header';
import { ScrollView } from 'react-native-gesture-handler';

export const BlockAndUnBlock = () => {
  const {
    country,
    handleSelectCountry,
    selectedCountry,
    handleDeSelectCountry,
    _userDegree,
    handleSelectUserDegree,
    selecteduserDegree,
    handleDeSelectUserDegree,
    selectedUserDegreeType,
    handleselectedUserDegreeType,
    handledeSelectedUserDegreeType,
    _selectedUserDegreeType,
    loading,
    cometChatBlockedUsers,
    handleCometChatUserUnBlock,
    voidFunc,
    inAppBlockedUsers,
    unBlockInAppBlockUser,
  } = useViewModal();
  if (loading) {
    return <FullLoader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Spacer position="left" size={16}>
        <HeaderBar isLogo={false} isText={true} text="Block & Unblock" />
      </Spacer>
      <ScrollView>
        <View style={styles.container}>
          <Spacer style={styles.rowOne} position="top" size={20}>
            <Text style={styles.text}>Block by Country</Text>
            <DropdownInput
              data={country}
              onFocus={voidFunc}
              labelField="label"
              valueField="value"
              placeholder="Country"
              onChange={handleSelectCountry}
            />
            <Row alignItems="center" gap={10}>
              {selectedCountry.map((item, index) => (
                <Chip
                  key={index}
                  item={item}
                  onPress={() => handleDeSelectCountry(item)}
                />
              ))}
            </Row>
          </Spacer>
          <Spacer style={styles.rowOne} position="top" size={20}>
            <Text style={styles.text}>Block by Degree Category/ Type</Text>
            <DropdownInput
              data={_userDegree}
              onFocus={voidFunc}
              labelField="label"
              valueField="value"
              placeholder="Select Degree Category"
              onChange={handleSelectUserDegree}
            />
            <Spacer style={styles.rowOne} position="bottom" size={10}>
              <DropdownInput
                data={selectedUserDegreeType}
                onFocus={voidFunc}
                labelField="label"
                valueField="value"
                placeholder="Select Degree Type"
                onChange={handleselectedUserDegreeType}
              />
            </Spacer>
            <Row style={styles.rowWrap} alignItems="center">
              {selecteduserDegree.map((item, index) => (
                <Chip
                  key={index}
                  item={item}
                  onPress={() => handleDeSelectUserDegree(item)}
                />
              ))}
              <Row style={styles.rowWrap} alignItems="center">
                {_selectedUserDegreeType.map((item, index) => (
                  <Chip
                    key={index}
                    item={item}
                    onPress={() => handledeSelectedUserDegreeType(item)}
                  />
                ))}
              </Row>
            </Row>
          </Spacer>
          <Text style={styles.blockedListText}>Blocked Users</Text>
          {cometChatBlockedUsers.map((user) => (
            <BlockedUser
              key={user.getUid()}
              id={user.getUid()}
              name={user.getName()}
              profileUrl={user.getAvatar()}
              onPress={handleCometChatUserUnBlock}
            />
          ))}
          {inAppBlockedUsers.map(({ profile, _id, profilePicture }) => (
            <BlockedUser
              key={_id}
              id={_id}
              name={profile.name.first}
              profileUrl={profilePicture.url}
              onPress={unBlockInAppBlockUser}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
