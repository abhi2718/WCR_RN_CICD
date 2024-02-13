import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { CustomCheckbox } from '../checkbox';
import { Row, dimensions } from '../tools';
import { PrimaryButton } from '../button';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../infrastructure/theme/fonts';

interface MultiSelectModalProps {
  isVisible: boolean;
  data: string[];
  selectedItems: string[];
  onClose: () => void;
  onItemSelected: (selected: string[]) => void;
  modalHeading?: string;
}

const MultiSelectModal: React.FC<MultiSelectModalProps> = ({
  isVisible,
  data,
  selectedItems,
  onClose,
  onItemSelected,
  modalHeading,
}) => {
  const [selected, setSelected] = useState<string[]>(selectedItems);
  const toggleItem = (item: string) => {
    const updatedSelected = selected.includes(item)
      ? selected.filter((selectedItem) => selectedItem !== item)
      : [...selected, item];
    if ('Prefer not to say' === item) {
      setSelected(['Prefer not to say']);
    } else {
      setSelected(
        updatedSelected.filter((item) => item !== 'Prefer not to say'),
      );
    }
    onItemSelected(updatedSelected);
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.containerView}>
          <Text style={styles.modalHeading}>{modalHeading}</Text>
          <ScrollView>
            {data.map((item, index) => (
              <Row
                key={index}
                style={[
                  styles.card,
                  selected.includes(item) ? styles.cardBg : '',
                ]}
              >
                <Pressable onPress={() => toggleItem(item)}>
                  <CustomCheckbox style={styles.checkBox}>
                    {selected.includes(item) && (
                      <Image
                        style={styles.checkedBoxImg}
                        source={require('.../../../../assets/images/icons/checkedBox.png')}
                      />
                    )}
                  </CustomCheckbox>
                </Pressable>
                <Text
                  style={[
                    styles.text,
                    selected.includes(item) ? styles.selectedText : {},
                  ]}
                >
                  {item}
                </Text>
              </Row>
            ))}
          </ScrollView>
          <View style={styles.PrimaryButton}>
            <PrimaryButton onPress={onClose} title="Close" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modalHeading: {
    textAlign: 'center',
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.h5,
    marginBottom: 10,
    fontFamily: fonts.body,
  },
  cardBg: {
    backgroundColor: colors.bg.secondary,
  },
  PrimaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  containerView: {
    backgroundColor: 'white',
    paddingVertical: 50,
    borderRadius: 10,
    marginTop: 25,
    width: dimensions.width,
    height: dimensions.height,
  },
  card: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  checkBox: {
    marginRight: sizes[4],
  },
  text: {
    fontSize: sizes[3],
    color: colors.ui.text,
    fontFamily: fonts.body,
  },
  selectedText: {
    fontWeight: 'bold',
    fontFamily: fonts.body,
  },
  checkedBoxImg: { height: sizes[4], width: sizes[4] },
});
export default MultiSelectModal;
