import { View, StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export const AppBarMenu = (props) => {
  const { memuList } = props;
  return (
    <View style={styles.container}>
      <Menu>
        <MenuTrigger text="">
          <Image
            source={require('../../assets/images/appBarThreeDot.png')}
            style={styles.threeDotImageStyle}
          />
        </MenuTrigger>
        <MenuOptions>
          {memuList.map((item, index) => (
            <MenuOption
              key={index}
              style={styles.menuOptionStyle}
              onSelect={item.onSelect}
              text={item.title}
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
    width: 40,
    height: 80,
  },
  menuOptionStyle: {
    padding: 10,
  },
});
