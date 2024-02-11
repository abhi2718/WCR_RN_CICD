import React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { ButtonProps } from '../../types/components/button.type';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { fontWeights, fonts } from '../../infrastructure/theme/fonts';

export const Button = (props: ButtonProps) => {
  const { title, onPress, isLoading } = props;
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
  const { title, onPress, btnColor, isLoading, style, color } = props;
  const _isLoading = isLoading ?? false;

  let renderValue = null;

  if (_isLoading) {
    renderValue = (
      <View
        style={{
          ...styles.primaryButton,
          backgroundColor: btnColor ? btnColor : colors.ui.primary,
        }}
      >
        <ActivityIndicator size={sizes[4]} color="#fff" />
      </View>
    );
  } else {
    renderValue = (
      <TouchableOpacity
        style={{
          ...style,
          ...styles.primaryButton,
          backgroundColor: btnColor ? btnColor : colors.ui.primary,
        }}
        onPress={onPress}
      >
        <View>
          <Text
            style={{
              ...styles.bntText,
              color: color ? color : colors.ui.white,
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return renderValue;
};

export const RoundedButtonWithIconAndText = (props: ButtonProps) => {
  const { title, onPress, btnColor, iconSource } = props;
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
    borderRadius: sizes[15],
    backgroundColor: colors.bg.primary,
    borderColor: 'rgba(35, 35, 35, 0.10)',
    borderWidth: 1,
    padding: sizes[2],
    width: '100%',
    paddingLeft: '18%',
    marginBottom: sizes[5],
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: sizes[5],
    height: sizes[5],
    marginRight: sizes[2],
    overflow: 'visible',
  },
  buttonText: {
    color: '#000',
    fontSize: sizes[3],
    fontWeight: fontWeights.medium,
    fontFamily: fonts.body,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: 200,
    padding: sizes[3],
    borderRadius: sizes[3],
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: sizes[3],
    fontFamily: fonts.body,
  },
  primaryButton: {
    padding: sizes[3],
    borderRadius: sizes[6],
    justifyContent: 'center',
    alignItems: 'center',
    elevation: sizes[0],
    shadowColor: 'rgba(250, 86, 114, 0.15)', // iOS box shadow color
    shadowOffset: { width: 2, height: 8 }, // iOS box shadow offset
    shadowOpacity: 1, // iOS box shadow opacity
    shadowRadius: 18, // iOS box shadow radius
    width: '100%',
    zIndex: 9999,
  },
  bntText: {
    color: '#FEFBFD',
    fontSize: sizes[3],
    fontStyle: 'normal',
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },
});
