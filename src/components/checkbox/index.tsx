import {
  Text,
  View,
  Pressable,
  StatusBar,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import {
  CheckBoxDataType,
  CheckBoxProps,
} from '../../types/components/checkbox.type';
import { preferNotToSay } from '../../utils/constanst';
import { makeFalseDefaultValue } from '../../utils/common.functions';

const CustomCheckbox = styled.View`
  width: 20px;
  height: 20px;
  border: 1px solid blue;
  justify-content: center;
  align-items: center;
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
            <Card style={{ margin: 5 }}>
              <View style={styles.card}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                  }}
                >
                  <Pressable onPress={() => handleChange(item.id)}>
                    <CustomCheckbox>
                      {item.isChecked && (
                        <Image
                          source={require('.../../../../assets/images/check-icon.png')}
                          style={{ height: 15, width: 15 }}
                        />
                      )}
                    </CustomCheckbox>
                  </Pressable>
                  <Text>{item.text}</Text>
                </View>
              </View>
            </Card>
          );
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>{renderFlatList(products)}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //  paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ECF0F1',
    padding: 8,
  },
  card: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
