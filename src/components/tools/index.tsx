import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {Platform, Dimensions, TextInput, Image} from 'react-native';
import {InputProps} from '../../types/components/input.type';
import {ActivityIndicator} from 'react-native-paper';
import {rowColumnProps} from '../../types/components/rowColumn.type';
import {imageProps} from '../../types/components/image.type';

// Input Box with dynamic Styling
const InputContainer = styled.View<InputProps>`
  border: 1px solid black;
  height: ${({height}) => `${height}px`};
  width: ${({width}) => `${width}px`};
  padding: 5px;
`;

export const InputBox: React.FC<InputProps> = props => {
  const {placeholder} = props;

  return (
    <InputContainer {...props}>
      <TextInput placeholder={placeholder} />
    </InputContainer>
  );
};

// ---- ImageContainer

const ImageProps = styled.Image<imageProps>`
  height: ${({height}) => `${height}px`};
  width: ${({width}) => `${width}px`};
  margin-top: ${({marginTop}) => `${marginTop}px`};
  margin-bottom: ${({marginBottom}) => `${marginBottom}px`};
  overflow: 'visible';
`;

export const ImageContainer: React.FC<imageProps> = props => {
  return <ImageProps {...props} />;
};

// --- FullLoader
const PageLoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const FullLoader = () => {
  return (
    <PageLoaderContainer>
      <ActivityIndicator size="small" color="blue" />
    </PageLoaderContainer>
  );
};

// --- Inline Loader
const InlineLoaderContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InlineLoader = () => {
  return (
    <InlineLoaderContainer>
      <ActivityIndicator size="small" color="red" />
    </InlineLoaderContainer>
  );
};

// ----Row And Column

const ChildContainer = styled.View<rowColumnProps>`
  flex-direction: ${({flexDirection}) => flexDirection};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
  flex-wrap: ${({flexWrap}) => flexWrap};
`;

export const Row: React.FC<rowColumnProps> = ({
  justifyContent,
  alignItems = 'stretch',
  children,
  style,
  flexWrap = 'nowrap',
}) => {
  const styleProps = {
    justifyContent,
    alignItems,
    flexWrap,
    flexDirection: 'row',
  };

  return (
    <ChildContainer style={style} {...styleProps}>
      {children}
    </ChildContainer>
  );
};

export const Column: React.FC<rowColumnProps> = ({
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  children,
  style,
  flexWrap = 'nowrap',
}) => {
  const styleProps = {
    justifyContent,
    alignItems,
    flexWrap,
    flexDirection: 'column',
  };
  return (
    <ChildContainer {...styleProps} style={style}>
      {children}
    </ChildContainer>
  );
};

// -------------------------------------------------------
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
type spacerProos = {
  position: string;
  size: number;
  children: ReactNode;
  style?: object;
};
export const Spacer = (props: spacerProos) => {
  const {position, size, children, style} = props;
  const computedStyle = getVariant(position, size);
  return <SpacerView style={[computedStyle, style]}>{children}</SpacerView>;
};

export const isAndroid = Platform.OS === 'android';
const {width, height} = Dimensions.get('screen');

export const dimensions = {width, height};
