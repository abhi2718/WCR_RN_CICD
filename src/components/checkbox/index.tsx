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
import {
  CheckBoxDataType,
  CheckBoxProps,
} from '../../types/components/checkbox.type';
import { preferNotToSay } from '../../utils/constanst';
import { makeFalseDefaultValue } from '../../utils/common.functions';
import { Row } from '../tools';
import { sizes } from '../../infrastructure/theme/sizes';
import { colors } from '../../infrastructure/theme/colors';
import { fontWeights, fonts } from '../../infrastructure/theme/fonts';

export const CustomCheckbox = styled.View`
  width: 20px;
  height: 20px;
  border: 1px solid blue;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: 2px solid #49454f;
`;

export const MultipleCheckBoxList: React.FC<CheckBoxProps> = ({
  data,
  preferNotTosayflag,
  onChangeValue,
  onChangeListValue,
}) => {
  const [products, setProducts] = useState<CheckBoxDataType[]>(data);
  const handleChange = (id: any) => {
    let temp = products.map((product) => {
      if (id === product?.id!) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
    onChangeListValue(temp);
    let selected = temp.filter((product) => product.isChecked);
    onChangeValue(products[id].text, selected);
    if (selected.find((item) => item.text === preferNotToSay)) {
      setProducts((oldState) => {
        const temp = oldState.map((item) => {
          if (item.text === preferNotToSay) {
            return {
              ...item,
              isChecked: false,
            };
          }
          return item;
        });
        return temp;
      });
    }
  };

  useEffect(() => {
    if (preferNotTosayflag === preferNotToSay) {
      setProducts(
        makeFalseDefaultValue(products.map((product) => product.text)),
      );
    }
  }, [preferNotTosayflag]);

  const renderFlatList = (renderData: any) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => {
          return (
            <Row gap={10} style={styles.card}>
              <Pressable onPress={() => handleChange(item.id)}>
                <CustomCheckbox style={styles.checkBox}>
                  {item.isChecked && (
                    <Image
                      style={styles.checkedBoxImg}
                      source={require('.../../../../assets/images/icons/checkedBox.png')}
                    />
                  )}
                </CustomCheckbox>
              </Pressable>
              <Text style={styles.text}>{item.text}</Text>
            </Row>
          );
        }}
      />
    );
  };
  return <View style={styles.container}>{renderFlatList(products)}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginBottom: sizes[4],
  },
  text: {
    fontSize: sizes[3],
    color: colors.ui.text,
    fontWeight: fontWeights.semiBold,
    fontFamily: fonts.body,
  },
  checkedBoxImg: { height: sizes[4], width: sizes[4] },
});
