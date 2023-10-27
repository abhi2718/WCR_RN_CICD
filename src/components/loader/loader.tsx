import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({isLoading}) => {
  if (!isLoading) {
    return null; // Do not render anything if not loading
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
