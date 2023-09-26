import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {ButtonProps} from '../../types/components/button.type';

export const Button = (props: ButtonProps) => {
  const {title, onPress, isLoading} = props;
  return (
    <>
      {isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator color="#fff" />
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
  },
});
