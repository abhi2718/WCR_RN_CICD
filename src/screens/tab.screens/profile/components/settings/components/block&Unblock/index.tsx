import React from 'react';
import { View, Text, SafeAreaView, Pressable, Image } from 'react-native';
import { DropdownInput } from '../../../../../../../components/inputBox';
import {
  Column,
  FullLoader,
  Row,
  Spacer,
} from '../../../../../../../components/tools';
import { Chip } from './components';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { HeaderBar } from '../../../../../../../components/header';
import { ScrollView } from 'react-native-gesture-handler';

export const BlockAndUnBlock = () => {
  const {
    user,
    goBack,
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
    handleUserUnBlock,
  } = useViewModal();
  if (loading) {
    return <FullLoader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderBar isLogo={false} isText={true} text="Block & Unblock" />
          <Spacer style={styles.rowOne} position="top" size={20}>
            <Text style={styles.text}>Block by Country</Text>
            <DropdownInput
              data={country}
              onFocus={() => {}}
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
              onFocus={() => {}}
              labelField="label"
              valueField="value"
              placeholder="Select Degree Category"
              onChange={handleSelectUserDegree}
            />
            <Spacer style={styles.rowOne} position="bottom" size={10}>
              <DropdownInput
                data={selectedUserDegreeType}
                onFocus={() => {}}
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
            <View key={user.getUid()} style={styles.blockUserWrapper}>
              <Row justifyContent="space-between" alignItems="center">
                <Row alignItems="center" gap={10}>
                  <Image
                    style={styles.blockUserAvatar}
                    source={{ uri: user.getAvatar() }}
                  />
                  <Column>
                    <Text style={styles.blockUserText}>{user.getName()}</Text>
                    <Text style={styles.blockedText}>Blocked</Text>
                  </Column>
                </Row>
                <Pressable
                  onPress={() => handleUserUnBlock(user.getUid())}
                  style={styles.blockedButton}
                >
                  <Text style={styles.blockButtonText}>Unblock</Text>
                </Pressable>
              </Row>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
