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
        </ScrollView>
      </View>
    </View>
  );
};
