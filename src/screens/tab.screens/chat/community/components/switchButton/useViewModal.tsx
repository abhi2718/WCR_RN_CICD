import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { dimensions } from "../../../../../../components/tools";
import { SwitchButtonProps } from '../../../../../../types/screen.type/communityChat';

export const useViewModal = (props: SwitchButtonProps) => {
    const {stage,setStage} = props;
    let transformX = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      if (stage === 0) {
        Animated.timing(transformX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(transformX, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }, [stage]);
  
    const rotationX = transformX.interpolate({
      inputRange: [0, 1],
      outputRange: [2, (dimensions.width - 32) / 2],
    });
    const setMyGroup = () => {
        setStage(0)
    }
    const setAllGroup = () => {
        setStage(1)
    }
    return {
        rotationX,
        transformX,
        stage,
        setMyGroup,
        setAllGroup
    }
}