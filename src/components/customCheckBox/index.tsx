import {
  Text,
  View,
  Pressable,
  StatusBar,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { Row } from '../tools';
import { sizes } from '../../infrastructure/theme/sizes';
import { colors } from '../../infrastructure/theme/colors';
export const CustomCheckboxWrapper = styled.View`
  width: 20px;
  height: 20px;
  border: 1px solid blue;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: 2px solid #49454f;
`;
export const CustomCheckBox = (props) => {
  const { onPress, isChecked, label } = props;

  return (
    <Row style={styles.card}>
      <Pressable onPress={onPress}>
        <CustomCheckboxWrapper style={styles.checkBox}>
          {isChecked && (
            <Image
              style={styles.checkedBoxImg}
              source={require('.../../../../assets/images/icons/checkedBox.png')}
            />
          )}
        </CustomCheckboxWrapper>
      </Pressable>
      <Text style={styles.text}>{label}</Text>
    </Row>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginBottom: sizes[4],
  },
  checkBox: {
    marginRight: sizes[4],
  },
  text: {
    fontSize: sizes[3],
    color: colors.ui.text,
    fontWeight: 'bold',
    fontFamily: 'Urbanist-Regular',
  },
  checkedBoxImg: { height: sizes[4], width: sizes[4] },
});
