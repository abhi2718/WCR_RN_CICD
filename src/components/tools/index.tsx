import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {
  Platform,
  Dimensions,
  TextInput,
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {InputProps} from '../../types/components/input.type';
import {ActivityIndicator} from 'react-native-paper';
import {rowColumnProps} from '../../types/components/rowColumn.type';
import {imageProps} from '../../types/components/image.type';

// Screen Wrapper
interface ScreenContainerProps {
  children: ReactNode;
}
export const ScreenContainer: React.FC<ScreenContainerProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  innerContainer: {
    textAlign: 'center',
    flex: 1,
    padding: 16,
  },
});

// Input Box with dynamic Styling
const InputContainer = styled.TextInput<InputProps>`
  padding: 15px;
  width: 100%;
`;

export const InputBox: React.FC<InputProps> = (props) => {
  return <InputContainer {...props} />;
};

// ---- ImageContainer

const ImageProps = styled.Image<imageProps>`
  height: ${({height = 50}) => `${height}px`};
  width: ${({width = 50}) => `${width}px`};
  margin-top: ${({marginTop = 10}) => `${marginTop}px`};
  margin-bottom: ${({marginBottom = 10}) => `${marginBottom}px`};
  overflow: visible;
`;

export const ImageContainer: React.FC<imageProps> = (props) => {
  const {source, ...otherProps} = props;
  return <ImageProps source={source as ImageSourcePropType} {...otherProps} />;
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
