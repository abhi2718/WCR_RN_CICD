import React from 'react';
import { View, StyleSheet, Platform, TouchableHighlight } from 'react-native';
import { colors } from '../../../../../../infrastructure/theme/colors';

class DefaultMarker extends React.Component {
  render() {
    return (
      <TouchableHighlight>
        <View
          style={
            this.props.enabled
              ? [
                  styles.markerStyle,
                  this.props.markerStyle,
                  this.props.pressed && styles.pressedMarkerStyle,
                  this.props.pressed && this.props.pressedMarkerStyle,
                ]
              : [
                  styles.markerStyle,
                  styles.disabled,
                  this.props.disabledMarkerStyle,
                ]
          }
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  markerStyle: {
    ...Platform.select({
      ios: {
        height: 26,
        width: 26,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: colors.ui.primary,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        backgroundColor: colors.ui.primary,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 1,
        shadowOpacity: 0.2,
      },
      android: {
        height: 26,
        width: 26,
        borderRadius: 26,
        backgroundColor: colors.ui.primary,
      },
      web: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 1,
        shadowOpacity: 0.2,
      },
    }),
  },
  pressedMarkerStyle: {
    ...Platform.select({
      web: {},
      ios: {},
      android: {
        height: 20,
        width: 20,
        borderRadius: 20,
      },
    }),
  },
  disabled: {
    backgroundColor: '#d3d3d3',
  },
});

export default DefaultMarker;
