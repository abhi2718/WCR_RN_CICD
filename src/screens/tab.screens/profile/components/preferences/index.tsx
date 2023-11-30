import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Column, Row, Spacer } from '../../../../../components/tools';
import { useViewModal } from './profileViewModal';
import { styles } from './styles';
import ModalSelector from 'react-native-modal-selector';
import { ScrollView } from 'react-native-gesture-handler';
export const PreferencesScreen = () => {
  const { user, goBack, _userDegree, answer, handleInputChange, optionsList } =
    useViewModal();

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          {optionsList.map((item, index) => {
            return (
              <Spacer key={index} position="bottom" size={20}>
                <Row justifyContent="space-between" alignItems="center">
                  <Text>{item.title}</Text>
                  <ModalSelector
                    data={item.option!}
                    initValue={answer[item.initValue]}
                    onChange={handleInputChange}
                    style={styles1.modalSelector}
                    optionContainerStyle={styles1.optionContainer}
                    optionTextStyle={styles1.optionText}
                    cancelStyle={styles1.cancelButton}
                    selectedItemTextStyle={styles1.selectedItem}
                    initValueTextStyle={styles1.initValueTextStyle}
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
const styles1 = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
  modalSelector: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
  },
  optionContainer: {
    borderRadius: 4,
  },
  optionText: {
    fontSize: 18,
    color: 'blue',
  },
  cancelButton: {
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  selectedItem: {
    marginTop: 10,
    fontSize: 16,
  },
  initValueTextStyle: {
    color: 'black',
  },
});
