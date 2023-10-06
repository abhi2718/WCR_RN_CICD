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
    <View
      style={{
        ...styles.redButton,
        backgroundColor: btnColor ? btnColor : '#FA5672',
      }}>
      <Text style={styles.bntText}>{title}</Text>
    </View>
  );
};

interface RoundedButtonProps {
  onPress: () => void;
  text: string;
  iconSource: any; // Adjust the type according to your image source
  buttonStyle?: StyleProp<ViewStyle>; // Optional custom button style
}

export const RoundedButtonWithIconAndText: React.FC<RoundedButtonProps> = ({
  onPress,
  text,
  iconSource,
}) => {
  return (
    <TouchableOpacity style={roundStyles.button} onPress={onPress}>
      <View style={roundStyles.buttonContainer}>
        <Image source={iconSource} style={roundStyles.icon} />
        <Text style={roundStyles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const roundStyles = StyleSheet.create({
  button: {
    borderRadius: 14, // Adjust the border radius as needed
    backgroundColor: '#fff', // White background
    borderColor: '#ccc', // Grey border color
    borderWidth: 1, // Border width
    padding: 12,
    width: '100%', // Set width to 100% to make it full width
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
    
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24, // Adjust the width and height as needed
    height: 24,
    marginRight: 10, // Adjust the spacing between the icon and text as needed
  },
  buttonText: {
    color: '#000', // Change the text color as needed
    fontSize: 16, // Adjust the font size as needed
    fontWeight: '600', // Set the font weight to 600 (semi-bold)
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
    width:'100%',
    marginTop:10
   
  },
  bntText: {
    color: '#FEFBFD',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});
