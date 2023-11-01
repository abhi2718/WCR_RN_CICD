import { StyleSheet } from "react-native";
import { dimensions } from "../../../../components/tools";

export const styles = StyleSheet.create({
    rowStyle: {width: dimensions.width - 32},
    switchContainerStyle: {
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    container: {
      flex: 1,
    },
    bellStyle: {
      width: 26,
      height: 26,
    },
    searchBarStyle: {
      width: 20,
      height: 20,
    }
  });
  