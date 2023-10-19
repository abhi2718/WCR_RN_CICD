import React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {ButtonProps} from '../../types/components/button.type';
import styled from 'styled-components';

export const Button = (props: ButtonProps) => {
  const {title, onPress, isLoading} = props;
  return (
    <>
      {isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator size={16} color="#fff" />
        </View>
      ) : (
        <View style={styles.container}>
          <Pressable onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export const PrimaryButton = (props: ButtonProps) => {
  const {title, onPress, isLoading, btnColor} = props;

  return (
    <TouchableOpacity
      onPress={isLoading ? undefined : onPress}
      style={{
        ...styles.redButton,
        backgroundColor: btnColor || '#BB0000',
        width: '100%',
      }}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.btnText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: 200,
    padding: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  redButton: {
    padding: 16,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA5672',
    // alignSelf: 'stretch',
    elevation: 5, // Android box shadow
    shadowColor: 'rgba(250, 86, 114, 0.15)', // iOS box shadow color
    shadowOffset: {width: 3, height: 21}, // iOS box shadow offset
    shadowOpacity: 1, // iOS box shadow opacity
    shadowRadius: 18, // iOS box shadow radius
  },
  btnText: {
    color: '#FEFBFD',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});
