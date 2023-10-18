import { View, StyleSheet } from 'react-native';
import {dimensions, FullLoader} from '../../../../../components/tools';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: dimensions.width,
        padding:8
    },
    headerViewStyle: {
        height: 40,
        backgroundColor: "red",
        justifyContent: "center",
    }
})