import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationScreen =() => {

    return (
        <View style={styles.containerStyle}>
           <Text>Notification</Text>
        </View>
    );
};

export default NotificationScreen;
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})