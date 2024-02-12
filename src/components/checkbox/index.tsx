import {
  Text,
  View,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import {
  CheckBoxProps,
  MultipleCheckBoxListDataType,
  MultipleCheckBoxListProps,
} from '../../types/components/checkbox.type';
import { preferNotToSay } from '../../utils/constanst';
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

export const CheckBox = (props: CheckBoxProps) => {
  const { isChecked, label, id, handleChange } = props;
  return (
    <Row gap={10} style={styles.card}>
      <Pressable onPress={() => handleChange(id)}>
        <CustomCheckbox>
          {isChecked && (
            <Image
              style={styles.checkedBoxImg}
              source={require('.../../../../assets/images/icons/checkedBox.png')}
            />
          )}
        </CustomCheckbox>
      </Pressable>
      <Text style={styles.text}>{label}</Text>
    </Row>
  );
};
export const MultipleCheckBoxList: React.FC<MultipleCheckBoxListProps> = ({
  data,
  handleListChange,
}) => {
  const [products, setProducts] =
    useState<MultipleCheckBoxListDataType[]>(data);
  const [isPreferNotToSayChecked, setIsPreferNotToSayChecked] = useState(false);
  const handleChange = (id: number) => {
    if (isPreferNotToSayChecked) {
      setIsPreferNotToSayChecked(false);
    }
    setProducts((oldState) => {
      const updates = oldState.map((product) => {
        if (id === product?.id!) {
          return { ...product, isChecked: !product.isChecked };
        }
        return product;
      });
      return updates;
    });
  };
  const handlePreferNotToSay = (id: number) => {
    setIsPreferNotToSayChecked((oldState) => !oldState);
    setProducts((oldState) =>
      oldState.map((product) => ({ ...product, isChecked: false })),
    );
    handleListChange(data.filter((product) => product.text === preferNotToSay));
  };
  useEffect(() => {
    if (products.some((product) => product.isChecked)) {
      handleListChange(products.filter((product) => product.isChecked));
    }
  }, [products]);
  const renderFlatList = (renderData: MultipleCheckBoxListDataType[]) => (
    <FlatList
      data={renderData}
      renderItem={(_item) => {
        const { item, index } = _item;
        if (index === data.length - 1 && item.text === preferNotToSay) {
          return (
            <CheckBox
              isChecked={isPreferNotToSayChecked}
              label={preferNotToSay}
              id={data.length}
              handleChange={handlePreferNotToSay}
            />
          );
        }
        return (
          <CheckBox
            isChecked={item.isChecked}
            label={item.text}
            id={item.id}
            handleChange={handleChange}
          />
        );
      }}
    />
  );
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
