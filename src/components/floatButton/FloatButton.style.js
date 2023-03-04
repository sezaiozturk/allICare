import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: Colors.purple,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    icon: {
        fontSize: 20,
        color: 'white'
    }
})