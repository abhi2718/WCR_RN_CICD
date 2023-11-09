import React, {useRef, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

export default function VedioPlayer({url}) {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.state.paused = true;
  }, [videoRef]);
  return (
    <View style={styles.container}>
      <VideoPlayer
        toggleResizeModeOnFullscreen={false}
        style={styles.video}
        ref={videoRef}
        onEnterFullscreen={() => {
        }}
        onExitFullscreen={() => {
        }}
        onEnd={() => {}}
        onBack={() => {}}
        onPause={() => {}}
        onPlay={() => {}}
        source={{uri: url}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  video: {
    height: 200,
  },
});
