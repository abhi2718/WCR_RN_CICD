import { View, Text, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import React from 'react';
const Header = (props) => {
    const { title, showCloseButton, closeButtonIcon, onPress, titleStyle, closeIconTint, } = props;
    return (<View style={styles.container}>
      {showCloseButton && (<TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          <Image source={closeButtonIcon} style={{ tintColor: closeIconTint ?? '', height: 24, width: 24 }}/>
        </TouchableOpacity>)}
      <Text style={[styles.headingText, titleStyle]}>{title}</Text>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        paddingLeft: 15,
    },
    iconContainer: { paddingRight: 25, alignItems: 'center' },
    headingText: { fontSize: 20, fontWeight: '600', color: '#000' },
});
export default Header;
//# sourceMappingURL=Header.js.map