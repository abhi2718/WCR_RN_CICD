import { View, StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { theme } from '../../infrastructure/theme';

export const AppBarMenu = (props) => {
  const { memuList } = props;
  return (
    <View style={styles.container}>
      <Menu>
        <MenuTrigger text="">
          <Image
            source={require('../../assets/images/verticalDotMenu.png')}
            style={styles.threeDotImageStyle}
          />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: styles.menuOptionWrapper,
          }}
        >
          {memuList.map((item, index) => (
            <MenuOption
              key={index}
              style={styles.menuOptionStyle}
              onSelect={item.onSelect}
              text={item.title}
              customStyles={{
                optionText: styles.menuOptionText,
              }}
            />
          ))}
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  threeDotImageStyle: {
    width: 7,
    height: 32,
    objectFit: 'contain',
  },
  menuOptionStyle: {
    padding: 10,
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 0.5,
  },
  menuOptionText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: theme.fontWeights.medium,
    textAlign: 'center',
    color: theme.colors.ui.text,
  },
  menuOptionWrapper: {
    borderRadius: 14,
    elevation: 1.2,
  },
});
