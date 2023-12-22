import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { DropdownInput } from '../../../../../../../components/inputBox';
import { FullLoader, Row, Spacer } from '../../../../../../../components/tools';
import { Chip } from './components';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { HeaderBar } from '../../../../../../../components/header';

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
  } = useViewModal();
  if (loading) {
    return <FullLoader />;
  }
  return (
    <SafeAreaView style={styles.container}>
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
      </View>
    </SafeAreaView>
  );
};
