import React from 'react';
import { View, Text } from 'react-native';
import {
  DropdownInput,
} from '../../../../../../../components/inputBox';
import { FullLoader, Row } from '../../../../../../../components/tools';
import { Chip } from './components';
import { styles } from './styles';
import { useViewModal } from './useViewModal';

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
    loading
  } = useViewModal();
  if (loading) {
    return <FullLoader />
  }
  return (
    <View style={styles.container}>
      <Text>Block by Country</Text>
      <DropdownInput
        data={country}
        onFocus={() => {}}
        labelField="label"
        valueField="value"
        placeholder="Select Country"
        onChange={handleSelectCountry}
      />
      <Row>
        {selectedCountry.map((item, index) => (
          <Chip
            key={index}
            item={item}
            onPress={() => handleDeSelectCountry(item)}
          />
        ))}
      </Row>
      <Text>Block by Degree Category/ Type</Text>
      <DropdownInput
        data={_userDegree}
        onFocus={() => {}}
        labelField="label"
        valueField="value"
        placeholder="Select Degree Category"
        onChange={handleSelectUserDegree}
      />
      <DropdownInput
        data={selectedUserDegreeType}
        onFocus={() => { }}
        labelField="label"
        valueField="value"
        placeholder="Select Degree Type"
        onChange={handleselectedUserDegreeType}
      />
      {selecteduserDegree.map((item, index) => (
        <Chip
          key={index}
          item={item}
          onPress={() => handleDeSelectUserDegree(item)}
        />
      ))}
      {_selectedUserDegreeType.map((item, index) => (
        <Chip
          key={index}
          item={item}
          onPress={() => handledeSelectedUserDegreeType(item)}
        />
      ))}
    </View>
  );
};
