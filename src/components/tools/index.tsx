import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position: string, size: number) => {
  let property = 'marginLeft';
  switch (position) {
    case 'top':
      property = positionVariant.top;
      break;
    case 'left':
      property = positionVariant.left;
      break;
    case 'right':
      property = positionVariant.right;
      break;
    case 'bottom':
      property = positionVariant.bottom;
      break;
  }
  return {
    [property]: size,
  };
};
const SpacerView = styled.View``;
type spacerProos = {position: string; size: number; children: ReactNode};
export const Spacer = (props: spacerProos) => {
  const {position, size, children} = props;
  const style = getVariant(position, size);
  return <SpacerView style={style}>{children}</SpacerView>;
};

export const isAndroid = Platform.OS === 'android';
const {width, height} = Dimensions.get('screen');

export const dimensions = {width, height};
