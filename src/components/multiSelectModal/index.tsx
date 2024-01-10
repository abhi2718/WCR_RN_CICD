import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { CustomCheckbox } from '../checkbox';
import { Row } from '../tools';

interface MultiSelectModalProps {
  isVisible: boolean;
  data: string[];
  selectedItems: string[];
  onClose: () => void;
  onItemSelected: (selected: string[]) => void;
}

const MultiSelectModal: React.FC<MultiSelectModalProps> = ({
  isVisible,
  data,
  selectedItems,
  onClose,
  onItemSelected,
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
        <ScrollView>
          <View style={styles.containerView}>
            {data.map((item, index) => (
              <Row key={index} style={styles.card}>
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
                <Text style={styles.text}>{item}</Text>
              </Row>
            ))}
            <TouchableOpacity onPress={onClose}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  containerView: {
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 10,
    marginTop: 50,
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
  },
  checkedBoxImg: { height: sizes[4], width: sizes[4] },
});
export default MultiSelectModal;
