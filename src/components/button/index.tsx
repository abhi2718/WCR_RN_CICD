import React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {ButtonProps} from '../../types/components/button.type';
import styled from 'styled-components';
import {dimensions} from '../tools';

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

export const RedButton = (props: ButtonProps) => {
  const {title, onPress, btnColor} = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.redButton,
        backgroundColor: btnColor ? btnColor : '#BB0000',
      }}
      onPress={onPress}>
      <View>
        <Text style={styles.bntText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const RoundedButtonWithIconAndText = (props: ButtonProps) => {
  const {title, onPress, btnColor, iconSource} = props;
  return (
    <TouchableOpacity style={roundStyles.button} onPress={onPress}>
      <View style={roundStyles.buttonContainer}>
        <Image source={iconSource} style={roundStyles.icon} />
        <Text style={roundStyles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const roundStyles = StyleSheet.create({
  button: {
    borderRadius: 62,
    backgroundColor: '#fff',
    borderColor: 'rgba(35, 35, 35, 0.10)',
    borderWidth: 1,
    padding: 12,
    width: '100%',
    paddingLeft: '18%',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
    overflow: 'visible',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});

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
    padding: 15,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA5672',
    elevation: 5,
    shadowColor: 'rgba(250, 86, 114, 0.15)', // iOS box shadow color
    shadowOffset: {width: 3, height: 21}, // iOS box shadow offset
    shadowOpacity: 1, // iOS box shadow opacity
    shadowRadius: 18, // iOS box shadow radius
    width: '100%',
  },
  bntText: {
    color: '#FEFBFD',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});
